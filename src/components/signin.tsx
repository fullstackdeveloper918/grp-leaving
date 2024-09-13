"use client"
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Typography } from "antd";
import { FacebookOutlined, TwitterOutlined, GoogleOutlined } from "@ant-design/icons";
import { setCookie } from "nookies";
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from "next/navigation";
const { Title, Text } = Typography;

const SignIn = () => {
    const [loading,setLoading]=useState<any>(false)
    const router=useRouter()
    const setCookie = (name: string, value: string, days: number) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
      };
    
      const createSessionCookie = (idToken: string) => {
        try {
          setCookie("COOKIES_USER_ACCESS_TOKEN", idToken, 30); // 30 days
        } catch (error) {
        }
      };
  const onFinish = (values: any) => {
    console.log(values,"values");
    try {
        const validUsername = "abhay@gmail.com";
        const validPassword = "Abhay@123";
        setLoading(true)
        setCookie("Username", values?.username, 30);
        setCookie("Password", values?.password, 30);
        if (values?.username === validUsername && values?.password === validPassword) {
            router.push("/dashboard");
          } else {
            // Show error message if credentials are invalid
            alert("Enter valid credentials");
          }
    } catch (error) {
        setLoading(false)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #8e2de2, #4a00e0)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={2} style={{ textAlign: "center" }}>
          Login
        </Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Type your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item>
            <Text type="secondary" style={{ float: "right" }}>
              Forgot password?
            </Text>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                background: "linear-gradient(to right, #43e97b, #38f9d7)",
                border: "none",
                borderRadius: "20px",
              }}
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Text>Or Sign in using</Text>
            <div style={{ marginTop: "10px" }}>
              <FacebookOutlined
                style={{ fontSize: "24px", margin: "0 10px", color: "#3b5998" }}
              />
              <TwitterOutlined
                style={{ fontSize: "24px", margin: "0 10px", color: "#00acee" }}
              />
              <GoogleOutlined
                style={{ fontSize: "24px", margin: "0 10px", color: "#DB4437" }}
              />
            </div>
          </Form.Item>

          {/* <Form.Item style={{ textAlign: "center" }}>
            <Text>Or Sign up using</Text>
            <br />
            <a href="/signup">SIGN UP</a>
          </Form.Item> */}
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
