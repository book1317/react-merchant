import { Router, Route, Redirect, Switch } from 'react-router-dom'
import './index.scss'
import './Antd.scss'
import history from 'utils/History'
import PageName from 'constant/PageName'
import LoginPage from 'page/LoginPage/LoginPage'
import MerchantPage from 'page/Merchant/MerchantPage/MerchantPage'
import RegisterPage from 'page/Merchant/RegisterPage/RegisterPage'
import CustomerPage from 'page/CustomerPage/CustomerPage'
import FacebookLoginPage from 'page/FacebookLoginPage/FacebookLoginPage'
import FacebookSelectPage from 'page/FacebookSelectPage/FacebookSelectPage'
import HomePage from 'page/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={PageName.home} component={HomePage} />
          <Route path={PageName.login} component={LoginPage} />
          <Route path={PageName.register} component={RegisterPage} />
          <Route path={PageName.customer} component={CustomerPage} />
          <Route path={PageName.facebookLogin} component={FacebookLoginPage} />
          <Route
            path={PageName.facebookSelect}
            component={FacebookSelectPage}
          />
          <Route path={'/'} component={MerchantPage} />
          <Route exact path="/">
            {/* <Redirect to={PageName.facebookLogin} /> */}
            <Redirect to={PageName.home} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
