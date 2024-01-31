import { Card, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import React, { useState } from "react";

export default function Subcategory() {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);

  const [form] = Form.useForm();
  const initialValues = {
    Id: 0,
    CategoryId: 0,
    Name: "",
    ShortName: "",
    Enabled: true,
    Deleted: true,
  };
  const columns = [
    {
      key: "1",
      title: "SubCategory Name",
      dataIndex: "SubCategoryName",
    },
    {
      key: "2",
      title: "Category Name",
      dataIndex: "CategoryName",
    },
    {
      key: "3",
      title: "Is Active",
      dataIndex: "Enabled",
    },
    {
      key: "4",
      title: "Account Name",
      dataIndex: "AccountName",
    },
  ];
  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Category Name"} name={"CategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"SubCategory Code"} name={"SubCategoryCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Account"} name={"Account"} />
        </Col>
        <Col xs={3} md={3} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  const customAction = (
    <>
      <ButtonComponent text={"Delete"} />
      <ButtonComponent text={"Close"} />
      <ButtonComponent text={"Print"} />
    </>
  );

  const handleSubmit = (values) => {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => {
      setIsLoading(false);
    }, [2000]);
  };

  return (
    <>
      <FormComponent
        title={"Add Subcategory"}
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={"Save"}
        isLoading={isLoading}
        initialValues={initialValues}
        // customAction={customAction}
      />
      <br />
      <TableComponent columns={columns || []} rows={rows || []} title={'Subcategory List'} />
    </>
  );
}
