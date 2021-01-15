import React from 'react'
import css from './LoginPage.module.scss'
import { Form, Input, Button, Checkbox } from 'antd'
import { history } from 'utils/History'
import PageName from 'constant/PageName'

export interface IHomePageProps {}

export interface IHomePageState {}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  // state = { :  }
  onFinish = (values: any) => {
    console.log('Success:', values)
    history.push(PageName.inventory)
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <div className={css.homePageContainer}>
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

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="htts://google.com">
                Forgot Password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={'w-100 rounded'}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default HomePage
