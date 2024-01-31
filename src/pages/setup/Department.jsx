import { Card, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import React, { useState } from "react";

export default function Department() {
  const { getColumnSearchProps, sort, sortString } = TableConfig();

  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);

  const [form] = Form.useForm();
  const initialValues = {
    Id: 0,
    BranchId: 0,
    Name: "",
    ShortName: "",
    Enabled: true,
    Deleted: true,
  };
  const columns = [
    {
      key: "1",
      title: "Department Name",
      dataIndex: "Name",
      ...getColumnSearchProps('Name'),
      ...sortString('Name')
    },
    {
      key: "2",
      title: "Is Active",
      dataIndex: "Enabled",
    },
    {
      key: "3",
      title: "Branch Name",
      dataIndex: "BranchName",
      ...getColumnSearchProps('BranchName'),
      ...sortString('BranchName')
    },
  ];
  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Department Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch Code"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"BranchId"} />
        </Col>
        <Col xs={24} md={12} xl={12}>
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
      title={'Add Department'}
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={"Save"}
        isLoading={isLoading}
        // customAction={customAction}
      />
      <br />
      <TableComponent columns={columns || []} rows={rows || []} title={'Department List'} />
    </>
  );
}
