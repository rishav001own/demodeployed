import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const signup = () => {
    const onFinish = values => {
        console.log('Success:', values);
        window.location.href="/login"
      };
        
    const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    };
    return (
        <Form
        {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
            label="Name"
            name="name"
            rules={[
                {
                    required: true,
                    message: "Please input your name!",
                },
            ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                type: "email",
                message: "The input is not valid E-mail",
                },
                {
                    required: true,
                    message: 'Please input E-mail!',
                },
            ]}
            >
            <Input/>
            </Form.Item>
            <Form.Item
            label="Password"s
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please Input password!', 
                },
            ]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout} name="Terms & condi.." valuePropName="checked">
                <Checkbox>Terms & condition</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout} >
                <Button type="primary"  htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>            
    );
};

export default signup;