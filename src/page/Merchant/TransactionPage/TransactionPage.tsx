import React from 'react'
import { Table, Tag, Modal } from 'antd'
import css from './TransactionPage.module.scss'

interface IImageDetail {
  name: string
  imageURL: string
}

const ItemStatus = {
  Pending: 'PENDING',
  SOLD: 'SOLD',
  ACTIVE: 'ACTIVE',
}

export interface ITransactionPageProps {}

export interface ITransactionPageState {
  isShowImage: boolean
  currentImage: IImageDetail
}

const INVENTORY_DATA = [
  {
    name: 'เสื้อผ้าเด็ก',
    imageURL: '',
    price: 50.0,
    remaining: 10,
    customer: 'รวีวัชร์ เงียบประเสริฐ',
    address: '119 หมู่ 6 ต.ป่าอ้อดอนชัย อ.เมือง จ.เชียงราย 57000',
    status: 'PENDING',
  },
  {
    name: 'เสื้อผ้าผู้ใหญ่',
    imageURL: '',
    price: 100.0,
    customer: 'Raweewat Ngeabprasert',
    address: '7/6 ซ.ลาดพร้าว 1 แยก 8 จอมพล จตุจักร กรุงเทพมหานคร 10900',
    status: 'SOLD',
  },
]

class TransactionPage extends React.Component<
  ITransactionPageProps,
  ITransactionPageState
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
        title: 'Slip Image',
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
        title: 'Customer',
        dataIndex: 'customer',
        key: 'customer',
        render: (name: string) => <div>{name}</div>,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (address: string) => <div>{address}</div>,
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
      <div className={css.transactionPage}>
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
                'https://f.ptcdn.info/743/070/000/qfxl0r5t7zWsuc4XCm2A-o.jpg'
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

export default TransactionPage
