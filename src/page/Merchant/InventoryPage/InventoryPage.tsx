import React from 'react'
import { Table, Tag, Modal } from 'antd'
import css from './InventoryPage.module.scss'
import { IFacebookStore } from 'store/FacebookStore.d'
import { inject, observer } from 'mobx-react'

interface IImageDetail {
  name: string
  imageURL: string
}

const ItemStatus = {
  Pending: 'PENDING',
  SOLD: 'SOLD',
  ACTIVE: 'ACTIVE',
}

export interface IInventoryPageProps {
  facebook: IFacebookStore
}

export interface IInventoryPageState {
  isShowImage: boolean
  currentImage: IImageDetail
}

const INVENTORY_DATA = [
  {
    name: 'เสื้อผ้าเด็ก',
    imageURL: '',
    price: 50.0,
    remaining: 10,
    status: 'PENDING',
  },
  {
    name: 'เสื้อผ้าผู้ใหญ่',
    imageURL: '',
    price: 100.0,
    remaining: 50,
    status: 'SOLD',
  },
]

@inject('facebook')
@observer
class InventoryPage extends React.Component<
  IInventoryPageProps,
  IInventoryPageState
> {
  state = {
    isShowImage: false,
    currentImage: {
      imageURL: '',
      name: '',
    },
  }

  componentDidMount() {
    console.log('didmount')
    const FacebookSelectPageImageList = this.props.facebook.getUserPageWithImageListJS()
  }

  openImageModal = (image: IImageDetail) => {
    this.setState({ currentImage: image, isShowImage: true })
  }

  handleCancel = () => {
    this.setState({ isShowImage: false })
  }

  handleSubmit = () => {
    this.setState({ isShowImage: false })
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (name: string) => <div>{name}</div>,
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image: IImageDetail) => (
          <div
            className={css.imageDetail}
            onClick={() => {
              this.openImageModal(image)
            }}
          >
            Detail
          </div>
        ),
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (price: number) => <div>{price}</div>,
      },
      {
        title: 'Remaining',
        dataIndex: 'remaining',
        key: 'remaining',
        render: (remaining: number) => <div>{remaining}</div>,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => {
          let color = 'green'
          switch (status) {
            case ItemStatus.ACTIVE:
              color = 'green'
              break
            case ItemStatus.Pending:
              color = 'blue'
              break
            case ItemStatus.SOLD:
              color = 'red'
          }
          return <Tag color={color}>{status}</Tag>
        },
      },
    ]

    const data = (INVENTORY_DATA as any).map((item: any, index: number) => {
      item['key'] = index
      item['image'] = { imageURL: item.imageURL, name: item.name }
      return item
    })

    const { isShowImage, currentImage } = this.state

    return (
      <div className={css.inventoryPage}>
        <Modal
          maskTransitionName=""
          // mask={false}
          title={currentImage.name || 'Title'}
          visible={isShowImage}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          // centered
        >
          <div>
            <img
              className={'w-100'}
              src={
                currentImage.imageURL ||
                'https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg'
              }
              alt=""
            />
          </div>
        </Modal>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default InventoryPage
