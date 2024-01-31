import {Checkbox, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import React, { useEffect, useState } from "react";

export default function OpeningInventory() {
  const initialValues = {
    Id: 0,
    Name: "",
    ShortName: "",
    UniqueId: "",
    HeadOffice: true,
    Enabled: true,
    Deleted: true,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [form] = Form.useForm();
  
  const columns = [
    {
      key: "1",
      title: "Item Code",
      dataIndex: "ItemCode",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "Name",
    },
    {
      key: "3",
      title: "Unit",
      dataIndex: "Unit",
    },
    {
      key: "4",
      title: "Qty",
      dataIndex: "Qty",
    },
    {
      key: "5",
      title: "Rate",
      dataIndex: "Rate",
    },
  ];


  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"Branch"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Department Name"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Opening Date"} name={"ShortName"} />
        </Col>
       
      </Row>
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
    // <Card>
    <>
      <FormComponent
        title={"Opening Inventory"}
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={"Search"}
        isLoading={isLoading}
        initialValues={initialValues}
        hideActions={true}
        // customAction={customAction}
      />
      <br />
      <TableComponent columns={columns || []} rows={rows || []} title={'Opening Inventory List'} />
    </>
    // </Card>
  );
}
