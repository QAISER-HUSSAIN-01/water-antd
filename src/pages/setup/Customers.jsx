import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputText from "components/form/InputText";
import React, { useEffect, useState } from "react";

export default function Customers() {
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const [isLoading, setIsLoading] = useState(false);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [rows, setRows] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setIsLoading(true);
    if (formData?.operation == 3) {
      setIsLoading(false);
      setRows(
        rows.map((item) =>
          item.Id == formData.Id ? { ...formData, ...values } : item
        )
      );
      // form.setFieldsValue(initialValues);
      setFormData({});
    } else {
      const Id = (Math.random() * 356).toString();
      setIsLoading(false);
      setRows([...rows, { ...values, Id: Id }]);
      // form.setFieldsValue(initialValues);
      setFormData({});
    }
  };

  const handleEdit = (record) => {
    setFormData({ ...record, operation: 3 });
    form.setFieldsValue(record);
  };

  const handleDelete = (record) => {
    const copy = [...rows];
    setRows(copy.filter((item) => item.Id != record.Id));
  };

  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Phone No",
      dataIndex: "PhoneNo",
      ...getColumnSearchProps("PhoneNo"),
      ...sort("PhoneNo"),
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "Address",
      ...getColumnSearchProps("Address"),
      ...sortString("Address"),
    },
    {
      key: "4",
      title: "Bottle Qty",
      dataIndex: "BottleQty",
      ...getColumnSearchProps("BottleQty"),
      ...sort("BottleQty"),
    },
    {
      key: "5",
      title: "Bottle Price",
      dataIndex: "BottlePrice",
      ...getColumnSearchProps("BottlePrice"),
      ...sort("BottlePrice"),
    },

    {
      key: "5",
      title: "Action",
      render: (_, record) => (
        <Space>
          {" "}
          <ButtonComponent
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />{" "}
          <ButtonComponent
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            danger={true}
          />{" "}
        </Space>
      ),
    },
  ];


  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Phone No"} name={"Phone No"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Address"} name={"Address"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Bottle Qty"} name={"BottleQty"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Bottle Price"} name={"BottlePrice"} />
        </Col>
      </Row>
    </>
  );

  return (
    // <Card>
    <>
      <FormComponent
        title={"Add Customer"}
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={formData.Id ? "Update" : "Save"}
        isLoading={isLoading}
        // initialValues={initialValues}
        // customAction={customAction}
      />
      <br />
      <TableComponent
        columns={columns || []}
        rows={rows || []}
        title={"Customer List"}
        loading={isTableLoading}
      />
    </>
    // </Card>
  );
}
