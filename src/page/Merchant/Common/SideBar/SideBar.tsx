import React from 'react'
import { Layout, Menu } from 'antd'
import PageName from 'constant/PageName'
import history from 'utils/History'

const { Sider } = Layout

export interface ISideBarProps {}

export interface ISideBarState {}

const MenuList = [
  {
    content: 'Inventory',
    key: PageName.inventory,
  },
  {
    content: 'Transaction',
    key: PageName.transaction,
  },
  {
    content: 'Log out',
    key: PageName.facebookLogin,
  },
]

class SideBar extends React.PureComponent<ISideBarProps, ISideBarState> {
  state = { selectKey: [] }
  renderListMenu = (props: any) => (
    <Menu.Item
      className={'mt-0 mb-0'}
      key={props.key}
      onClick={() => {
        if (props.key === PageName.facebookLogin) {
          localStorage.removeItem('isAuthen')
        }
        history.replace(props.key)
        this.forceUpdate()
      }}
    >
      {props.content}
    </Menu.Item>
  )

  componentDidMount() {
    console.log('didmount sidbar')
    this.forceUpdate()
  }

  render() {
    // let keyPath = window.location.pathname
    let keyPath = window.location.pathname.split('/')
    const selectKey = ['/' + keyPath[2]]

    return (
      <Sider width={150} className="site-layout-background">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[PageName.inventory]}
          defaultOpenKeys={[PageName.inventory]}
          style={{ height: '100%', borderRight: 0 }}
          selectedKeys={selectKey}
        >
          {MenuList.map((menu) => this.renderListMenu(menu))}
        </Menu>
      </Sider>
    )
  }
}

export default SideBar
