"use client";
import React from "react";
import { Card, Checkbox, Divider, Flex, Form, Input } from "antd";
import dynamic from "next/dynamic";
import SocalLogin from "../components/common/SocialLogin";
import MicroSoftLogin from "../components/common/MicroSoftLogin";
import api from "@/utils/api";
import validation, { capFirst } from "@/utils/validation";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
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
    const router= useRouter()
  const onFinish = async (values: any) => {
    let items = {
      full_name: validation.toLowCase(values?.full_name),
      email: String(values.email).toLowerCase(),
      password: values.password,
    };
    
    try {
      let res = await api.Auth.signUp(items);
      console.log(res, "rereere");
      toast.success("Please verify your email to continue")
      // router.replace("/login")
    } catch (error: any) {}
  };
  return (
    <section className="auth-pages d-flex align-items-center h-100 bg-lightBg py-12 loginPage">
      <div className="container">
      <ToastContainer/>
        <Row justify="center">
          <Col className="gutter-row" xs={23} sm={21} md={19} lg={12} xl={10}>
            <Card
              className="mt-3 mb-5"
              bordered={false}
              style={{
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-center mb-3 lg:text-3xl md:xl">Register</h3>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: false }}
                onFinish={onFinish}
                scrollToFirstError
              >
                <Form.Item
                  name="full_name"
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please enter valid name",
                    },
                  ]}
                >
                  {/* <label className="labelSignup">Full Name</label> */}
                  <Input
                    size="large"
                    placeholder="Full Name"
                    prefix={<i className="fa-regular fa-user"></i>}
                  />
                </Form.Item>

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
                  //   rules={[
                  //     { required: true, message: "Please enter a password" },
                  //   ]}
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

                <Form.Item name="newsletter" valuePropName="checked" >
                  <Checkbox className="checkBoxWrapper">
                    Receive occasional emails with exclusive special offers and
                    product updates.
                  </Checkbox>
                </Form.Item>

                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
               className="loginBtn w-100"
                >
                  Register
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
              </Flex>

              <div className="auth-footer text-center mt-2">
                <p>
                  Already have an account? <a href="/login" className="alreadyText">Login</a>
                </p>
                <p className="text-muted">
                  By registering you accept our{" "}
                  <a href="/terms" className="alreadyText">Terms of Use</a> and{" "}
                  <a href="/privacy" className="alreadyText">Privacy Policy</a>.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Register;
