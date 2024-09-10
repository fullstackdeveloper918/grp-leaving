"use client";
import React from 'react'
import { Row, Col, Typography, Space, Button } from 'antd';
import { SyncOutlined, HighlightOutlined, SmileOutlined } from '@ant-design/icons';
import MacImg from "../../assesst/images/mac_demo.webp"
const { Title, Text, Paragraph } = Typography;
const Image_text_Card = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
    <Row justify="center" align="middle" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Left Section: Image */}
      <Col xs={24} md={12} style={{ textAlign: 'center' }}>
        <img
          src={MacImg.src}
          alt="Laptop with card preview"
          style={{ width: '100%', maxWidth: '500px' }}
        />
      </Col>

      {/* Right Section: Text and Button */}
      <Col xs={24} md={12}>
        <Space direction="vertical" size="large" style={{ paddingLeft: '20px' }}>
          <Title level={3}>Make it your own</Title>

          <Space direction="vertical" size="middle">
            {/* First Feature */}
            <Space>
              <SyncOutlined style={{ fontSize: '24px', color: '#000' }} />
              <div>
                <Text strong>Unlimited Signatures</Text>
                <Paragraph type="secondary">
                  Get unlimited pages and signatures for friends and colleagues to sign.
                </Paragraph>
              </div>
            </Space>

            {/* Second Feature */}
            <Space>
              <HighlightOutlined style={{ fontSize: '24px', color: '#000' }} />
              <div>
                <Text strong>Style Your Card</Text>
                <Paragraph type="secondary">
                  Choose your signature’s font, colour, size, rotation and place it anywhere on the card.
                </Paragraph>
              </div>
            </Space>

            {/* Third Feature */}
            <Space>
              <SmileOutlined style={{ fontSize: '24px', color: '#000' }} />
              <div>
                <Text strong>Make it fun</Text>
                <Paragraph type="secondary">
                  Add emojis, GIFs, stickers, images and custom messages to make your card extra special.
                </Paragraph>
              </div>
            </Space>
          </Space>

          <Button type="primary" size="large" style={{ width: '200px', backgroundColor: '#002766' }}>
            Get started
          </Button>
        </Space>
      </Col>
    </Row>
  </div>
  )
}

export default Image_text_Card