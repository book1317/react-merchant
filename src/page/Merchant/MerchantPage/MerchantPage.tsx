import React from 'react'
import { Layout, Menu } from 'antd'
import css from './MerchantPage.module.scss'
import SideBar from '../Common/SideBar/SideBar'
import { Redirect, Route, Switch } from 'react-router-dom'
import PageName from 'constant/PageName'
import InventoryPage from '../InventoryPage/InventoryPage'
import TransactionPage from '../TransactionPage/TransactionPage'
import history from 'utils/History'

const { Header } = Layout

export interface IMerchantPageProps {}

export interface IMerchantPageState {}

const MenuList = [
  {
    content: 'จัดการสินค้า',
    key: PageName.inventory,
  },
  {
    content: 'บิล',
    key: PageName.transaction,
  },
  {
    content: 'Log out',
    key: PageName.facebookLogin,
  },
]

class MerchantPage extends React.Component<
  IMerchantPageProps,
  IMerchantPageState
> {
  componentDidMount() {
    // const isLogin = localStorage.getItem('isAuthen')
    // console.log('isLogin', isLogin)
    // if (!isLogin || isLogin !== 'OK') {
    //   history.replace(PageName.login)
    // }
  }
  render() {
    let keyPath = window.location.pathname.split('/')
    const selectKey = ['/' + keyPath[2]]

    return (
      <Layout className={css.merchantPage}>
        <Header className={css.header}>
          <div
            className={css.title}
            onClick={() => {
              history.push(PageName.home)
            }}
          >
            Omagase V2
          </div>
          <Menu
            className={'d-flex'}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[PageName.inventory]}
            defaultOpenKeys={[PageName.inventory]}
            selectedKeys={selectKey}
          >
            {MenuList.map(({ key, content }) => (
              <Menu.Item
                className={css.headerItem}
                onClick={() => {
                  if (key === PageName.facebookLogin) {
                    localStorage.removeItem('isAuthen')
                  }
                  history.replace(key)
                  this.forceUpdate()
                }}
                key={key}
              >
                {content}
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Layout className={css.contentContainer}>
          {/* <SideBar /> */}
          <Layout style={{ padding: '24px  24px 24px' }}>
            <Switch>
              <Route path={PageName.inventory} component={InventoryPage} />
              <Route path={PageName.transaction} component={TransactionPage} />
              <Route path="/">
                <Redirect to={PageName.inventory} />
              </Route>
            </Switch>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default MerchantPage
