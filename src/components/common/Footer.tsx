"use client"
import React from "react";
import { Row, Col, Typography } from "antd";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const Footer: React.FC = () => {
  return (
    <div  style={{ backgroundColor: "#0C223F", padding: "40px", color: "#fff" }}>
      <Row justify="space-around">
        <Col xs={24} sm={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <MailOutlined style={{ fontSize: '48px', color: "#FF00A1" }} />
            <Text style={{ display: 'block', marginTop: '10px', fontSize: '16px' }}>
              Copyright © 2024 Group Cards Limited.
            </Text>
            <Text>All rights reserved.</Text>
            <div style={{ marginTop: "20px" }}>
              <FacebookOutlined style={iconStyle} />
              <InstagramOutlined style={iconStyle} />
              <LinkedinOutlined style={iconStyle} />
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={columnTitleStyle}>Greeting card categories</Title>
          <ul style={listStyle}>
            <li>Leaving cards</li>
            <li>Birthday cards</li>
            <li>New baby cards</li>
            <li>Wedding cards</li>
            <li>Thank you cards</li>
            <li>Sympathy cards</li>
            <li>Get well cards</li>
          </ul>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={columnTitleStyle}>Pricing & Plans</Title>
          <ul style={listStyle}>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Printed Cards</li>
            <li>Gift Cards</li>
            <li>Reminders</li>
            <li>Send Feedback</li>
          </ul>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={columnTitleStyle}>Terms & Conditions</Title>
          <ul style={listStyle}>
            <li>Privacy Notice</li>
            <li>Accessibility Statement</li>
            <li>Cookie Notice</li>
          </ul>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "40px" }}>
        <Text>Send your card from one of our other brands: Same login | Same cards | Different URL</Text>
      </Row>
    </div>
  );
};

const iconStyle = {
  fontSize: "24px",
  color: "#fff",
  marginRight: "15px",
  cursor: "pointer"
};

const columnTitleStyle = {
  color: "#fff",
  marginBottom: "20px"
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  color: "#fff",
};

export default Footer;
