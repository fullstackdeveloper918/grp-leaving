"use client";
import React from "react";
import { Card, Checkbox, Divider, Flex, Form, Input } from "antd";
import dynamic from "next/dynamic";
import SocalLogin from "../components/common/SocialLogin";
import MicroSoftLogin from "../components/common/MicroSoftLogin";
const { Row, Col, Button } = {
    Row: dynamic(() => import("antd").then((module) => module.Row), {
      ssr: false,
    }),
    Col: dynamic(() => import("antd").then((module) => module.Col), {
      ssr: false,
    }),
    Button: dynamic(() => import("antd").then((module) => module.Button), {
      ssr: false,
    }),
  };
const Login = () => {
  return (
    <section className="auth-pages d-flex align-items-center h-100">
    <div className="container">
      <Row justify="center">
        <Col className="gutter-row" xs={23} sm={21} md={19} lg={12} xl={10}>
          <Card
          className="mt-3 mb-5"
            bordered={false}
            style={{
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 className="text-center mb-3">Log In</h3>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: false }}
            //   onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                {/* <label className="labelSignup">Email</label> */}
                <Input
                  size="large"
                  placeholder="Email"
                  prefix={<i className="fa-regular fa-envelope"></i>}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please enter a password" }]}
              >
                {/* <label className="labelSignup">Password</label> */}
                <Input.Password
                  size="large"
                  placeholder="Password"
                  prefix={<i className="fa-solid fa-lock"></i>}
                />
                <small className="text-muted">
                  Must be at least 8 characters
                </small>
              </Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="register-button w-100"
              >
                Log In
              </Button>
            </Form>
            <Divider style={{ borderColor: "#333333" }}>
              <div className="divider my-2 text-center">
                <span>or</span>
              </div>
            </Divider>

            <Flex gap={24} justify="center" align="center" className="my-3">
                  <SocalLogin />
                  <MicroSoftLogin />
                  {/* <Button size='middle' type='default' shape='circle' htmlType='button' style={{ width: 40, height: 40 }} icon={<Icons.FaceBookIcon />} className='btn-blue fw-medium text-white'></Button> */}
                </Flex>
            {/* <div className="auth-footer text-center mt-2">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div> */}
            <div className="auth-footer text-center mt-2">
              <h6>
                 <a href="/login">Forgot Password</a>
              </h6>
              <p>
                Need an account? <a href="/register">Register</a>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  </section>   
  )
}

export default Login