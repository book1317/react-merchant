import React from 'react'
import { Table, Tag, Modal, Button, Input, Form, Upload } from 'antd'
import css from './InventoryPage.module.scss'
import { IFacebookStore } from 'store/FacebookStore.d'
import { inject, observer } from 'mobx-react'
import { formatPrice } from 'utils/Format'
import ImgCrop from 'antd-img-crop'
import ProductModal from './components/ProductModal'

const catImage =
  'https://cf.shopee.co.th/file/18d8e8ef2e7ecd66a2ddbe885a01df30_tn'

export interface IProduct {
  name: string
  imageURL: string
  price: number
  remaining: number
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
  isShowProductModal: boolean
  currentProduct: IProduct
}

const INVENTORY_DATA = [
  {
    name: 'เสื้อผ้าเด็ก',
    imageURL: catImage,
    price: 50.0,
    remaining: 10,
    status: 'PENDING',
  },
  {
    name: 'เสื้อผ้าผู้ใหญ่',
    imageURL: catImage,
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
  refUpload: any
  constructor(props: any) {
    super(props)
    this.state = {
      isShowProductModal: false,
      currentProduct: this.initProduct(),
    }
    this.refUpload = React.createRef()
  }

  initProduct(): IProduct {
    return {
      name: '',
      imageURL: '',
      price: 0,
      remaining: 0,
    }
  }

  componentDidMount() {
    const FacebookSelectPageImageList = this.props.facebook.getUserPageWithImageListJS()
  }

  openProductModal = (product: any) => {
    this.setState({ currentProduct: product, isShowProductModal: true })
  }

  onClickRow = (record: any) => {
    return {
      onClick: () => {
        this.openProductModal(record)
      },
    }
  }

  onAddItem = () => {
    this.setState({
      isShowProductModal: true,
      currentProduct: this.initProduct(),
    })
  }

  setIsShowProductModal = (isShowProductModal: boolean) => {
    this.setState({ isShowProductModal })
  }

  setCurrentProduct = (currentProduct: IProduct) => {
    this.setState({ currentProduct })
  }

  render() {
    const columns = [
      {
        title: 'สินค้า',
        dataIndex: 'product',
        key: 'product',
        render: (product: any) => (
          <div className={css.tableProduct}>
            <div className={css.productImage}>
              <img src={product.imageURL || catImage} alt="" />
            </div>
            <div className={css.productName}>{product.name}</div>
          </div>
        ),
      },
      // {
      //   title: 'รูป',
      //   dataIndex: 'image',
      //   key: 'image',
      //   render: (image: IImageDetail) => (
      //     <div
      //       className={css.imageDetail}
      //       onClick={() => {
      //         this.openProductModal(image)
      //       }}
      //     >
      //       ดูรูป
      //     </div>
      //   ),
      // },
      {
        title: 'ราคา',
        dataIndex: 'price',
        key: 'price',
        render: (price: number) => <div>{formatPrice(price)}</div>,
      },
      {
        title: 'คงเหลือ',
        dataIndex: 'remaining',
        key: 'remaining',
        render: (remaining: number) => <div>{remaining} ชิ้น</div>,
      },
      {
        title: 'สถานะ',
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
      item['product'] = { imageURL: item.imageURL, name: item.name }
      item['image'] = { imageURL: item.imageURL, name: item.name }
      return item
    })

    const { isShowProductModal, currentProduct } = this.state

    return (
      <div className={css.inventoryPage}>
        <ProductModal
          isShowProductModal={isShowProductModal}
          currentProduct={currentProduct}
          setIsShowProductModal={this.setIsShowProductModal}
          setCurrentProduct={this.setCurrentProduct}
        />
        <div className={css.optionMenuContainer}>
          <Input placeholder="ค้นหา" className={css.searchInput} />
          <Button className={css.addItemButton} onClick={this.onAddItem}>
            + เพิ่มสินค้า
          </Button>
        </div>
        <div className={css.tableContainer}>
          <Table
            rowSelection={{ type: 'checkbox' }}
            columns={columns}
            dataSource={data}
            size="small"
            onRow={this.onClickRow as any}
            rowClassName={css.tableRow}
          />
        </div>
      </div>
    )
  }
}

export default InventoryPage
