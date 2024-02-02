import { Card, Col, Row } from "antd";
import React from "react";

export default function Cards() {
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} md={16} xl={6}>
        {" "}
        <Card>Users clients:user:admin</Card>
      </Col>
      <Col xs={24} md={16} xl={6}>
        {" "}
        <Card>Bottles in:out</Card>
      </Col>
      <Col xs={24} md={16} xl={6}>
        <Card>Amount pending:recieved</Card>
      </Col>
      <Col xs={24} md={16} xl={6}>
        {" "}
        <Card>Expense</Card>
      </Col>
    </Row>
  );
}
