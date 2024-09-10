"use client"
import React from 'react'
import { Button, Card, Col, Row, Tooltip } from "antd";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="container mt-5">
    <Row gutter={16} justify="start">
    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
    <Link href="/multistep_form" className="text-decoration-none text-white flex-grow-1" passHref>
      {/* <a className="card-link"> */}
        <Card
          className="common-card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            overflow: "hidden",
            color: "#fff",
            backgroundColor:"#43628f", // Stylish background color
            textAlign: "center" // Center text inside the card
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="fw-bold mb-4">MULTISTEP FORM</h5>
          </div>
        </Card>
      {/* </a> */}
    </Link>
  </Col>
  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
    <Link href="/drag_drop" className="text-decoration-none text-white flex-grow-1" passHref>
      {/* <a className="card-link"> */}
        <Card
          className="common-card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            overflow: "hidden",
            color: "#fff",
            backgroundColor:"#43628f", // Stylish background color
            textAlign: "center" // Center text inside the card
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="fw-bold mb-4">DRAG AND DROP</h5>
          </div>
        </Card>
      {/* </a> */}
    </Link>
  </Col>
  <Col xs={24} sm={12} md={8} lg={8} xl={8}>
    <Link href="/multistep_form" className="text-decoration-none text-white flex-grow-1" passHref>
      {/* <a className="card-link"> */}
        <Card
          className="common-card"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            overflow: "hidden",
            color: "#fff",
            backgroundColor:"#43628f", // Stylish background color
            textAlign: "center" // Center text inside the card
          }}
        >
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="fw-bold mb-4">Multistep Form</h5>
          </div>
        </Card>
      {/* </a> */}
    </Link>
  </Col>
  </Row>
    </div>
  )
}

export default Dashboard