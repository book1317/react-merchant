import React from 'react'
import { Table, Tag, Button, Input, Dropdown, Menu } from 'antd'
import css from './InventoryPage.module.scss'
import { IFacebookStore } from 'store/FacebookStore.d'
import { inject, observer } from 'mobx-react'
import { formatPrice } from 'utils/Format'
import ProductModal from './components/ProductModal'
import { IInventoryStore, IProduct } from 'store/InventoryStore.d'

const catImage =
  'https://cf.shopee.co.th/file/18d8e8ef2e7ecd66a2ddbe885a01df30_tn'

const ItemStatus = {
  PUBLISH: 'PUBLISH',
  UNPUBLISH: 'UNPUBLISH',
  SOLD: 'SOLD',
}

export interface IInventoryPageProps {
  facebook: IFacebookStore
  inventory: IInventoryStore
}

export interface IInventoryPageState {
  isShowProductModal: boolean
  currentProduct: IProduct
  selectedRows: any
}

@inject('facebook', 'inventory')
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
      selectedRows: [],
    }
    this.refUpload = React.createRef()
  }

  initProduct(): IProduct {
    return {
      name: '',
      detail: '',
      imageURL: '',
      price: 0,
      remaining: 0,
    }
  }

  async componentDidMount() {
    const UserID = ''
    await this.props.inventory.getInventories(UserID)
    // const FacebookSelectPageImageList = this.props.facebook.getUserPageWithImageListJS()
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
      {
        title: 'ราคา',
        dataIndex: 'price',
        key: 'price',
        render: (price: number) => <div>{formatPrice(price)}</div>,
        className: css.priceColumn,
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
            case ItemStatus.PUBLISH:
              color = 'green'
              break
            case ItemStatus.UNPUBLISH:
              color = 'blue'
              break
            case ItemStatus.SOLD:
              color = 'red'
          }
          return <Tag color={color}>{status}</Tag>
        },
      },
    ]

    const inventories = this.props.inventory.getInventoriesJS()
    const data = inventories.map((item: any, index: number) => {
      item['key'] = index
      item['product'] = { ...item }
      return item
    })

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows
        )
        this.setState({ selectedRows })
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows)
        this.setState({ selectedRows })
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows)
        this.setState({ selectedRows })
      },
      // renderCell: (checked, record) => (
      //   <div>
      //     <Checkbox checked={checked} />
      //   </div>
      // ),
    }

    const changeStatusMenu = (
      <Menu>
        <Menu.Item>
          <div>ร่าง</div>
        </Menu.Item>
        <Menu.Item>
          <div>ยังไม่จ่าย</div>
        </Menu.Item>
        <Menu.Item>
          <div>โอนแล้ว</div>
        </Menu.Item>
        <Menu.Item>
          <div>เตรียมส่ง</div>
        </Menu.Item>
      </Menu>
    )

    const printMenu = (
      <Menu>
        <Menu.Item>
          <div>จ่าหน้าผู้รับ</div>
        </Menu.Item>
        <Menu.Item>
          <div>จ่าหน้าผู้รับและผู้ส่ง</div>
        </Menu.Item>
      </Menu>
    )

    const downloadMenu = (
      <Menu>
        <Menu.Item>
          <div>ดาวน์โหลด CSV</div>
        </Menu.Item>
      </Menu>
    )

    const { isShowProductModal, currentProduct, selectedRows } = this.state

    return (
      <div className={css.inventoryPage}>
        <ProductModal
          isShowProductModal={isShowProductModal}
          currentProduct={currentProduct}
          setIsShowProductModal={this.setIsShowProductModal}
          setCurrentProduct={this.setCurrentProduct}
        />
        <div className={css.optionMenuContainer2}>
          <Button className={css.addItemButton} onClick={this.onAddItem}>
            + เพิ่มสินค้า
          </Button>
        </div>
        <div className={css.optionMenuContainer}>
          <Input placeholder="ค้นหา" className={css.searchInput} />
          <div className={css.optionMenuContainer2}>
            <Dropdown overlay={changeStatusMenu}>
              <Button className={css.optinButton}>
                เปลี่ยนสถานะ ({selectedRows.length})
              </Button>
            </Dropdown>
            <Dropdown overlay={printMenu}>
              <Button className={css.optinButton}>
                พิมพ์ ({selectedRows.length})
              </Button>
            </Dropdown>
            <Dropdown overlay={downloadMenu}>
              <Button className={css.optinButton}>
                ดาวน์โหลด ({selectedRows.length})
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className={css.tableContainer}>
          <Table
            rowSelection={{ ...rowSelection, type: 'checkbox' }}
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
