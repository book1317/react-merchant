import React from 'react'
import css from './FacebookPage.module.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import history from 'utils/History'
import PageName from 'constant/PageName'
import FacebookLogin from 'react-facebook-login'

export interface ILoginPageProps {}

export interface ILoginPageState {}

class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  // state = { :  }
  componentDidMount() {
    console.log('didmount')
  }

  onFinish = (values: any) => {
    console.log('Success:', values)
    const { username, password } = values
    // if (username === 'admin' && password === 'admin') {
    localStorage.setItem('isAuthen', 'OK')
    history.push(PageName.inventory)
    // }
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  responseFacebook = (response: any) => {
    console.log(response)
  }

  render() {
    return (
      <div className={css.LoginPageContainer}>
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={this.responseFacebook}
        />
        ,
      </div>
    )
  }
}

export default LoginPage
