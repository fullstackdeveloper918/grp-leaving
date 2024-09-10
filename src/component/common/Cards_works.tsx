"use client";
import React from 'react'
import { Row, Col, Typography, Button, Card } from 'antd';

const { Title, Text } = Typography;
const Cards_works = () => {
  return (
    <div style={{ backgroundColor: '#2F4858', padding: '50px 0', textAlign: 'center' }}>
      <Title style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>
        How group cards work?
      </Title>
      <Text style={{ color: '#fff', fontSize: '16px', marginBottom: '40px' }}>
        How to create a group ecard signed by multiple people.
      </Text>

      <Row gutter={[16, 16]} justify="center" style={{ padding: '0 50px', marginTop: '40px' }}>
        <Col xs={24} sm={12} md={8}>
          <Card bordered={false} style={{ textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Choose a design"
              style={{ width: '100px', marginBottom: '20px' }}
            />
            <Title level={4}>Choose a design</Title>
            <Text>
              Pick one of our designs, add your friend's name, email, and select a delivery date.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card bordered={false} style={{ textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="Invite others"
              style={{ width: '100px', marginBottom: '20px' }}
            />
            <Title level={4}>Invite others to sign</Title>
            <Text>
              Share the link with friends and colleagues to collect messages and see your group card grow.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card bordered={false} style={{ textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/150"
              alt="We’ll send the card"
              style={{ width: '100px', marginBottom: '20px' }}
            />
            <Title level={4}>We’ll send the card</Title>
            <Text>
              Deliver the group greeting card via email on your scheduled date or save it as a PDF to print it.
            </Text>
          </Card>
        </Col>
      </Row>

      <Button type="primary" style={{ marginTop: '30px', backgroundColor: '#1DA57A' }}>
        Get started
      </Button>
    </div>
  )
}

export default Cards_works