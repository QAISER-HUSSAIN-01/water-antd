import { Col, Row } from "antd";
import FormComponent from "components/form/FormComponent";
import FormComponent2 from "components/form/FormComponent";
import InputText from "components/form/InputText";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { EMAIL } from "utils/constants";

export default function ForgotPassword() {
  const customAction = (
    <Link to={'/login'}>Login ?</Link>
  );
  const handleSubmit = async ()=>{
    return <Navigate to={'/login'} />
  }
  return (
    <div className="flex justify-center align-center h-100">
      <Col xs={24} sm={18} md={16} lg={6} className="login-container h-contain">
        <FormComponent2 handleSubmit={handleSubmit} reset={false} customAction={customAction}>
          <Row>
            <Col xs={24} md={24} lg={24}>
              <InputText label={"Email"} name={"email"} required={true} pattern={EMAIL} />
            </Col>           
          </Row>
        </FormComponent2>
      </Col>
    </div>
  );
}
