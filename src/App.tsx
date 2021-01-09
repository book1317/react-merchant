import React, { Fragment } from 'react'
import { Router, Switch, Route, withRouter, Redirect } from 'react-router-dom'

import history from 'utils/History'
import PageName from 'constant/PageName'
import HomePage from 'page/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Fragment>
          <Route path={'/'} component={HomePage} />
        </Fragment>
      </Router>
    </div>
  )
}

export default App
