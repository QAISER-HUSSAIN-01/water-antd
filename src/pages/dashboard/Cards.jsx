import { CheckOutlined, LoadingOutlined, PauseCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Loading from "components/Loading";
import React from "react";

export default function Cards({ data,isLoading }) {
  const {
    totalClients,
    totalReceivedAmount,
    totalRemainingAmount,
    totalUsers,
  } = data;
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} md={16} xl={6}>
        <Card style={{ borderBottom:'5px solid orange'}}>
          <Row justify={"space-between"}>
            <span style={{ fontSize: "20px" }}>Clients</span>
            <span style={{ fontSize: "20px",color:'orange' }}>
             {isLoading ? <LoadingOutlined />:<UserOutlined />} 
            </span>
          </Row>
          <Row>
            {" "}
            <span style={{ fontSize: "40px" }}>{totalClients}</span>{" "}
          </Row>
        </Card>
      </Col>
      <Col xs={24} md={16} xl={6}>
        <Card className="d-card" style={{ borderBottom:'5px solid green'}}>
          <Row justify={"space-between"}>
            <span style={{ fontSize: "20px" }}>Recieved Cash</span>
            <span style={{ fontSize: "20px", color:'green' }}>
             {isLoading ? <LoadingOutlined />:<CheckOutlined />} 

            </span>
          </Row>
          <Row>
            {" "}
            <span style={{ fontSize: "40px" }}>{totalReceivedAmount}</span>{" "}
          </Row>
        </Card>
      </Col>
      <Col xs={24} md={16} xl={6}>
        <Card className="d-card" style={{ borderBottom:'5px solid red'}}>
          <Row justify={"space-between"}>
            <span style={{ fontSize: "20px" }}>Pending Cash</span>
            <span style={{ fontSize: "20px",color:'red' }}>
            {isLoading ? <LoadingOutlined />:<PauseCircleOutlined />} 

            </span>
          </Row>
          <Row>
            {" "}
            <span style={{ fontSize: "40px" }}>
              {totalRemainingAmount}
            </span>{" "}
          </Row>
        </Card>
      </Col>
      <Col xs={24} md={16} xl={6}>
        <Card style={{ borderBottom:'5px solid blue'}}>
          <Row justify={"space-between"}>
            <span style={{ fontSize: "20px" }}>Users</span>
            <span style={{ fontSize: "20px", color:'blue' }}>
            {isLoading ? <LoadingOutlined />:<UserOutlined />} 
            </span>
          </Row>
          <Row>
            {" "}
            <span style={{ fontSize: "40px" }}>{totalUsers}</span>{" "}
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
