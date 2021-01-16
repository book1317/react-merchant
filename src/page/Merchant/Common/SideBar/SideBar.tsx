import React from 'react'
import { Layout, Menu } from 'antd'
import PageName from 'constant/PageName'
import { history } from 'utils/History'

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
    key: PageName.login,
    content: 'Log out',
  },
]

class SideBar extends React.PureComponent<ISideBarProps, ISideBarState> {
  renderListMenu = (props: any) => (
    <Menu.Item
      className={'mt-0 mb-0'}
      key={props.key}
      onClick={() => {
        history.replace(props.key)
        // window.history.replaceState(null, '', props.key)
      }}
    >
      {props.content}
    </Menu.Item>
  )

  render() {
    let keyPath = window.location.pathname
    const selectKey = [keyPath]

    return (
      <Sider width={150} className="site-layout-background">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[PageName.inventory]}
          defaultOpenKeys={['sub1']}
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
