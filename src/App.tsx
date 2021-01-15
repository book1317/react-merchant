import React, { Fragment } from 'react'
import { Router, Route, Redirect } from 'react-router-dom'
import 'antd/dist/antd.less'
import history from 'utils/History'
import PageName from 'constant/PageName'
import LoginPage from 'page/LoginPage/LoginPage'
import InventoryPage from 'page/Merchant/MerchantPage/MerchantPage'
import RegisterPage from 'page/Merchant/RegisterPage/RegisterPage'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Fragment>
          <Route path={PageName.login} component={LoginPage} />
          <Route path={PageName.inventory} component={InventoryPage} />
          <Route path={PageName.register} component={RegisterPage} />
          <Route exact path="/">
            <Redirect to={PageName.login} />
          </Route>
        </Fragment>
      </Router>
    </div>
  )
}

export default App
