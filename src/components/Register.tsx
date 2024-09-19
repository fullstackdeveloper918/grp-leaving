"use client"
import React from "react";
import { Form, Input } from "antd";
import dynamic from "next/dynamic";

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
const Register = () => {
    const onFinish = async (values: any) => {
        if (values.email == "") {
        }
    
        let items = {
          email: String(values.email).toLowerCase(),
          password: values.password,
          device_type: "WEB",
        };
    
        try {
        } catch (error: any) {
        }
      };
  return (
    <section className="auth-pages d-flex align-items-center h-100">
    <div className="container">
      <Row justify="center">
        <Col className="gutter-row" xs={23} sm={21} md={19} lg={12} xl={10}>
          <div className="form-wrapper d-flex justify-content-center align-items-center h-100 bg-white py-5 px-4 px-md-5">
            <div>
            

              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: false }}
                onFinish={onFinish}
                scrollToFirstError
              >
               
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please enter valid name",
                    },
                  ]}
                >
                  <label className=" labelSignup">Full Name</label>
                  <Input
                    size={"large"}
                    prefix={<i className="fa-regular fa-envelope"></i>}
                    placeholder="Full Name"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please enter valid email",
                    },
                  ]}
                >
                  <label className=" labelSignup">Email</label>
                  <Input
                    size={"large"}
                    prefix={<i className="fa-regular fa-envelope"></i>}
                    placeholder="Email"
                  />
                </Form.Item>
                {/* Password  */}
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please enter password" },
                  ]}
                >
                  <label className=" labelSignup">Password</label>
                  <Input.Password
                    size={"large"}
                    prefix={<i className="fa-solid fa-lock"></i>}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                {/* Button  */}
                <Button
                  size={"large"}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button w-100"
                >
                  Sign Up
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </section>
  )
}

export default Register