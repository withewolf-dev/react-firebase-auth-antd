import React,{Fragment,useState} from 'react'
import { Row,Card, Col, Typography,Button } from 'antd';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import fire from '../config/fire'
import { withRouter } from 'react-router';
//import './components/App.css';



const { Title } = Typography;

function Login() {

  const login = (e) => {
    e.preventDefault();
    fire
      .auth() // it gets the auth service from firebase for the current app
      .signInWithEmailAndPassword(this.state.email, this.state.password)//async sign in with email & password,
      //fails if the password and email don't match
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
    return (
      <Fragment>
        <Row justify="center" align="top">
          <Col span={7}>
            <Card style={{ width: 400 }}>
                <br/>
              <Title level={2}>Login Now</Title>
                <br/>
                <br/>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    value={password} onChange={e=>setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="/">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    onClick={login}
                  >
                    Log in
                  </Button><br/>
                  Or <br/>
                  <Button type='link'
                  onClick={()=>{this.props.history.push('/Signup')}}
                  > sing up</Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );

                }

export default withRouter(Login) 