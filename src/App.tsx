import { Router, Route, Redirect, Switch } from 'react-router-dom'
import 'antd/dist/antd.less'
import history from 'utils/History'
import PageName from 'constant/PageName'
import LoginPage from 'page/LoginPage/LoginPage'
import MerchantPage from 'page/Merchant/MerchantPage/MerchantPage'
import RegisterPage from 'page/Merchant/RegisterPage/RegisterPage'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={PageName.login} component={LoginPage} />
          <Route path={PageName.register} component={RegisterPage} />
          <Route path={'/'} component={MerchantPage} />
          <Route exact path="/">
            <Redirect to={PageName.login} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
