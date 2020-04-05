import { Row,Card, Col, Typography,Button } from 'antd';
import React,{Fragment,useState} from 'react'
import './App.css'
import {
    Form,
    Input,
    Select,
    Checkbox,
  } from 'antd';
  import {BrowserRouter as Router,Link} from 'react-router-dom'
 import fire from '../config/fire'


const { Option } = Select;


const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
const { Title } = Typography;

export default function Signup() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const signup = (e) => {
    (e).preventDefault();
    fire
      .auth() // it gets the auth service from firebase for the current app
      .createUserWithEmailAndPassword(this.state.email, this.state.password) //creates a new user account with the specific email & password
      // on successful creation, the user can login 
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };
    

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
      };
    
      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
            <Option value="91">+91</Option>
          </Select>
        </Form.Item>
      );
      
    
    return (
      <Router>
      <Fragment>
        <Row justify="center" align="top">
          <Col span={7}>
            <Card style={{ width: 400 }}>
              <br />
              <Title level={2}>SignUp Now</Title>
              <br />
              <br />

              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                   />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password 
                    value={password}
                  onChange={e=>setPassword(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="FirstName"
                  label={
                    <span>
                      First Name &nbsp;
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your nickname!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="LastName"
                  label={
                    <span>
                      Last Name &nbsp;
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Should accept agreement"),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox>
                    I have read the <a href="/">agreement</a>
                  </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>

                   <Button type="primary" htmlType="submit"
                   onClick={signup}
                   >
                    SignUp
                  </Button> <br/>
                  {/* <Button type="primary" htmlType="submit"
                  onClick={()=>{this.props.history.push('/')}}
                  >
                    Go back
                  </Button> */}
                  <Link to='/'> 
                    Go Back
                  </Link>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Fragment>
      </Router>
    );

    
}
