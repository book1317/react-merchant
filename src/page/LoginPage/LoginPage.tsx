import React from 'react'
import css from './LoginPage.module.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import history from 'utils/History'
import PageName from 'constant/PageName'

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

  render() {
    return (
      <div className={css.LoginPageContainer}>
        <div className={css.title}>Omise V2</div>
        <div className={css.loginFormContainer}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              className={css.topForm}
              name="username"
              required
              rules={[{ required: true, message: ' ' }]}
            >
              <Input placeholder="Username" className={'rounded'} />
            </Form.Item>

            <Form.Item
              className={css.bottomForm}
              name="password"
              rules={[{ required: true, message: ' ' }]}
            >
              <Input.Password placeholder="Password" className={'rounded'} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="htts://google.com">
              Forgot Password
            </a>

            <div>
              <Button
                type="primary"
                htmlType="submit"
                className={'w-100 rounded mt-2 mb-2'}
              >
                Login
              </Button>
            </div>

            <div>
              <Button
                type="primary"
                htmlType="submit"
                className={'w-100 rounded bg-secondary border-secondary'}
                color={'black'}
                onClick={() => {
                  history.push(PageName.register)
                }}
              >
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default LoginPage
