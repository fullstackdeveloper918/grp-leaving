"use client";
import React from "react";
import { Card, Checkbox, Divider, Flex, Form, Input } from "antd";
import dynamic from "next/dynamic";
import SocalLogin from "../components/common/SocialLogin";
import MicroSoftLogin from "../components/common/MicroSoftLogin";
import { useRouter } from "next/navigation";
import { capFirst } from "@/utils/validation";
import api from "@/utils/api";
import { setCookie } from "nookies";
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
  const router = useRouter();
  const onFinish = async (values: any) => {
    let items = {
      full_name: capFirst(values?.full_name),
      email: String(values.email).toLowerCase(),
      password: values.password,
    };
    let res = await api.Auth.login(items);
    console.log(res, "yuyyyu");

    if (res.token) {
      setCookie(null, "token", res.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }

    console.log(res, "rereere");
    router.replace("/");

    try {
    } catch (error: any) {}
  };

  
  return (
    <section className="auth-pages d-flex align-items-center h-100 bg-lightBg py-12 loginPage">
      <div className="container">
        <Row justify="center">
          <Col className="gutter-row" xs={23} sm={21} md={19} lg={12} xl={10}>
            <Card
              className="mt-3 mb-5"
              bordered={false}
              style={{
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
                    

              <h3 className="text-center mb-3 lg:text-3xl md:xl ">Log In</h3>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: false }}
                onFinish={onFinish}
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
                  rules={[
                    { required: true, message: "Please enter a password" },
                  ]}
                >
                  {/* <label className="labelSignup">Password</label> */}
                  <Input.Password
                    size="large"
                    placeholder="Password"
                    prefix={<i className="fa-solid fa-lock"></i>}
                  />
                </Form.Item>
                <small className="text-muted">
                  Must be at least 8 characters
                </small>
                <Button
                  size="large"
                  htmlType="submit"
                  className="loginBtn w-100"
                >
                  Log In
                </Button>
              </Form>
              <Divider style={{ borderColor: "#333333" }}>
                <div className="divider my-2 text-center">
                  <span>or</span>
                </div>
              </Divider>

              <Flex gap={18} justify="center" align="center" className="my-3">
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
                  Need an account? <a href="/register" className="text-blueBg font-bold alreadyText">Register</a>
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
