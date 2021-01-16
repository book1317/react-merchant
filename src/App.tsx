import { Router, Route } from 'react-router-dom'
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
        <Route path={PageName.login} component={LoginPage} />
        <Route path={PageName.register} component={RegisterPage} />
        <Route path={'/'} component={MerchantPage} />
        {/* <Route exact path="/">
            <Redirect to={PageName.login} />
          </Route> */}
      </Router>
    </div>
  )
}

export default App
