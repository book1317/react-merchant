import React from 'react'
import { IProduct } from 'store/InventoryStore.d'
import { initProduct } from 'store/InventoryStore'
import { Modal, Button, Input, Form, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import css from '../InventoryPage.module.scss'

export interface IProductModalProps {
  currentProduct: IProduct
  isShowProductModal: boolean
  setIsShowProductModal: (isShowProductModal: boolean) => void
  setCurrentProduct: (currentProduct: IProduct) => void
}

export interface IProductModalState {
  fileList: any
  currentProduct: IProduct
}

class ProductModal extends React.Component<
  IProductModalProps,
  IProductModalState
> {
  refUpload = React.createRef() as any
  refFrom = React.createRef() as any

  state = {
    fileList: [],
    currentProduct: initProduct(),
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.refFrom.current.resetFields()
      this.setState({ currentProduct: this.props.currentProduct })
    }
  }

  handleCancel = () => {
    const { setIsShowProductModal } = this.props
    setIsShowProductModal(false)
  }

  handleSubmit = () => {
    const { setIsShowProductModal } = this.props
    setIsShowProductModal(false)
  }

  onFinish = () => {}

  onFinishFailed = () => {}

  onSelectImage = async ({ file }: any) => {
    const { setCurrentProduct } = this.props
    const { currentProduct } = this.state
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj as Blob)
        reader.onload = () => resolve(reader.result)
      })
    }
    let newCurrentProduct = currentProduct
    newCurrentProduct.imageURL = src
    setCurrentProduct(newCurrentProduct)
  }

  render() {
    const {
      currentProduct,
      isShowProductModal,
      setIsShowProductModal,
    } = this.props
    const { fileList } = this.state
    console.log('currentProduct', currentProduct)
    return (
      <Modal
        maskTransitionName=""
        title={currentProduct.name || 'Title'}
        visible={isShowProductModal}
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
        footer={''}
      >
        <div className={css.inventoryPageProductModal}>
          <div className={css.productImage}>
            <img
              src={currentProduct.imageURL}
              alt=""
              onClick={() => {
                this.refUpload.current.click()
              }}
            />
          </div>
          <Form
            ref={this.refFrom}
            layout="vertical"
            name="nest-messages"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            fields={[
              {
                name: ['productName'],
                value: currentProduct.name,
              },
              {
                name: ['detail'],
                value: currentProduct.detail,
              },
              {
                name: ['price'],
                value: currentProduct.price,
              },
              {
                name: ['remaining'],
                value: currentProduct.remaining,
              },
            ]}
          >
            <Form.Item
              name="productImage"
              rules={[
                () => ({
                  validator() {
                    if (currentProduct.imageURL) {
                      return Promise.resolve()
                    }
                    return Promise.reject('Please upload your product image!')
                  },
                }),
              ]}
            >
              <ImgCrop aspect={1 / 1} quality={1}>
                <Upload
                  className={css.inventoryPageUpload}
                  fileList={fileList}
                  onChange={this.onSelectImage}
                >
                  {fileList.length >= 8 ? null : (
                    <div ref={this.refUpload}>+ Upload</div>
                  )}
                </Upload>
              </ImgCrop>
            </Form.Item>

            <Form.Item
              name="productName"
              label="ชื่อสินค้า"
              rules={[
                {
                  required: true,
                  message: 'Please input your product name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="detail"
              label="Detail"
              rules={[{ required: true, message: 'Please input your detail!' }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              name="price"
              label="ราคา"
              rules={[
                {
                  required: true,
                  message: 'Please input your price!',
                },
                // ({ getFieldValue }) => ({
                //   validator(_, price) {
                //     if (
                //       parseInt(price) <
                //       parseInt(getFieldValue('originalPrice'))
                //     ) {
                //       return Promise.resolve()
                //     }
                //     return Promise.reject(
                //       'Price should less than original price!'
                //     )
                //   },
                // }),
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name="remaining"
              label="คงเหลือ"
              rules={[
                { required: true, message: 'Please input your remaining!' },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item>
              <div className="d-flex justify-content-end">
                <Button
                  className={css.submitButton}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
                <Button
                  className="cancel-button"
                  onClick={() => {
                    setIsShowProductModal(false)
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    )
  }
}

export default ProductModal
