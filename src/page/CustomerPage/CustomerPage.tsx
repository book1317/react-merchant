import React from 'react'
import css from './CustomerPage.module.scss'
import { Form, Input, Button, Cascader } from 'antd'
import history from 'utils/History'
import PageName from 'constant/PageName'

export interface ICustomerPageProps {}

export interface ICustomerPage {}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

class CustomerPage extends React.Component<ICustomerPageProps, ICustomerPage> {
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
      <div className={css.customerPage}>
        <div className={css.title}>Address</div>
        <Form
          // {...formItemLayout}
          name="register"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="ชื่อ"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input placeholder="ชื่อ" />
          </Form.Item>

          <Form.Item
            name="surename"
            label="นามสกุล"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>

          <Form.Item
            name="surename"
            label="ที่อยู่เลขที่"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input.TextArea allowClear />
          </Form.Item>

          <Form.Item
            name="surename"
            label="จังหวัด"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            {/* <Input placeholder="นามสกุล" /> */}
            <Cascader
              className={'w-100'}
              options={[
                { value: 'a', label: 'aasdasasdasdasdasdassad' },
                { value: 'b', label: 'b' },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="surename"
            label="เขต / อำเภอ"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>

          <Form.Item
            name="surename"
            label="แขวง / ตำบล"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>

          <Form.Item
            name="surename"
            label="รหัสไปรษณีย์"
            rules={[
              {
                required: true,
                message: '',
              },
            ]}
          >
            <Input placeholder="นามสกุล" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="เบอร์โทรศัพท์"
            rules={[{ required: true, message: '' }]}
          >
            <Input style={{ width: '100%' }} placeholder="Phone" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100 rounded">
              บันทึก
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default CustomerPage
