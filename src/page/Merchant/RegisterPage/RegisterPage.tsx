import React from 'react'
import css from './RegisterPage.module.scss'
import { Form, Input, Button } from 'antd'
import history from 'utils/History'
import PageName from 'constant/PageName'

export interface IRegisterPageProps {}

export interface IRegisterPageState {}

class RegisterPage extends React.Component<
  IRegisterPageProps,
  IRegisterPageState
> {
  // state = { :  }
  componentDidMount() {
    console.log('didmount')
  }

  onFinish = (values: any) => {
    console.log('Success:', values)
    history.push(PageName.login)
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <div className={css.registerPage}>
        <div className={css.title}>Register</div>
        <Form
          name="register"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: '',
              },
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!'
                  )
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item name="phone" rules={[{ required: true, message: '' }]}>
            <Input style={{ width: '100%' }} placeholder="Phone" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100 rounded">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default RegisterPage
