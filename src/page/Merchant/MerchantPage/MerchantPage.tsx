import React from 'react'
import { Layout } from 'antd'
import css from './MerchantPage.module.scss'
import SideBar from '../Common/SideBar/SideBar'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import PageName from 'constant/PageName'
import InventoryPage from '../InventoryPage/InventoryPage'
import TransactionPage from '../TransactionPage/TransactionPage'
import history from 'utils/History'

const { Header } = Layout

export interface IMerchantPageProps {}

export interface IMerchantPageState {}

class MerchantPage extends React.Component<
  IMerchantPageProps,
  IMerchantPageState
> {
  componentDidMount() {
    const isLogin = localStorage.getItem('isAuthen')
    console.log('isLogin', isLogin)
    if (!isLogin || isLogin !== 'OK') {
      history.replace(PageName.login)
    }
  }
  render() {
    return (
      <Layout className={css.merchantPage}>
        <Header className={css.header}>
          <div className={css.title}>Omagase V2</div>
        </Header>
        <Layout>
          <SideBar />
          <Layout style={{ padding: '24px 24px 24px' }}>
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
