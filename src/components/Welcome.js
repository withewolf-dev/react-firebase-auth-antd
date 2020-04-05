import React, {Fragment} from 'react'
import './App.css';
import { Row,Card, Col, Typography,Button } from 'antd';
import { GoogleSquareFilled,FacebookFilled} from '@ant-design/icons';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { withRouter } from 'react-router'


const { Text,Title } = Typography;


function Welcome() {

    
    return (
      <Router>
      <Fragment>
        <Row justify="center" align="top">
          <Col span={6}>
            <Card style={{ width: 400 }}>
              <Title level={2}>Welcome</Title>
              <br />
              <Text> Please login in or signup to use our app</Text>
              <br />
              <br />
              <Text> Enter via social media</Text>
              <br/>
              <br/>
              <GoogleSquareFilled
                style={{ fontSize: "40px", color: "#E50000" }}
              />
              <FacebookFilled style={{ fontSize: "40px", color: "#0000B2" }} />
              <br/>
              <br/>
              {/* <Button 
              type="primary" block

              >
                Sign Up

              </Button> */}
              <Link to='/Signup'>
                Sign Up
              </Link>
              <br />
              <Text>
                already have an account?
                {/* <Button type="primary" block
                onClick={()=>{this.props.history.push('/Login')}}
                >
                  Login
                </Button> */}
                <Link to='/Signup'>
                login
              </Link>
              </Text>
            </Card>
          </Col>
        </Row>
      </Fragment>
      </Router>
    );
}

export default withRouter(Welcome)



