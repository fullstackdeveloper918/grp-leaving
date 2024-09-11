"use client";
import React from 'react'
import { Card, Row, Col, Rate, Typography } from 'antd';
const { Text, Title } = Typography;

const CustomerReview = (props:any) => {

  
  return (
    <div style={{ backgroundColor: '#e6f7ff', padding: '50px 0', textAlign: 'center' }}>
    <Title level={3}>See Why Our Customers Love Our Cards</Title>

    <Row gutter={[16, 16]} justify="center" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {props?.data?.map((review:any, index:any) => (
        <Col xs={24} sm={12} md={6} key={index}>
          <Card
            bordered={false}
            style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            <Rate disabled defaultValue={5} style={{ color: '#52c41a' }} />
            <Text style={{ display: 'block', fontWeight: 'bold', margin: '10px 0' }}>{review.name}</Text>
            <Text type="secondary" style={{ fontSize: '12px', marginBottom: '10px', display: 'block' }}>Verified Review</Text>
            <Text style={{ fontSize: '14px', color: '#555' }}>{review.comment}</Text>
            <Text style={{ fontSize: '12px', color: '#aaa', display: 'block', marginTop: '10px' }}>{review.time}</Text>
          </Card>
        </Col>
      ))}
    </Row>

    <div style={{ marginTop: '40px' }}>
      <Rate disabled defaultValue={5} style={{ color: '#52c41a', fontSize: '24px' }} />
      <Title level={4} style={{ margin: '10px 0' }}>Excellent</Title>
      <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>4.78 average</Text>
      <Text style={{ fontSize: '16px', display: 'block' }}>1483 reviews</Text>
      <Text style={{ fontSize: '12px', color: '#aaa', display: 'block', marginTop: '5px' }}>Powered by Reviews.io</Text>
    </div>
  </div>
  )
}

export default CustomerReview