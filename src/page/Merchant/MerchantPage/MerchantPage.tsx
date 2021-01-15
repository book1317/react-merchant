import React from 'react'
import { Layout, Menu } from 'antd'
import css from './MerchantPage.module.scss'

const { Header, Content, Sider } = Layout

export interface IMerchantPageProps {}

export interface IMerchantPageState {}

class MerchantPage extends React.Component<
  IMerchantPageProps,
  IMerchantPageState
> {
  render() {
    return (
      <Layout className={css.merchantPage}>
        <Header className={css.header}>
          <div className={css.title}>Omagase V2</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Inventory</Menu.Item>
            <Menu.Item key="2">Transaction</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={150} className="site-layout-background">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">Inventory</Menu.Item>
              <Menu.Item key="2">Transaction</Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default MerchantPage
