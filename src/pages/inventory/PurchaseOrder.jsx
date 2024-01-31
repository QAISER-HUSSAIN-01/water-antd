import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import InputTextarea from "components/form/InputTextarea";
import React, { useEffect, useState } from "react";

export default function PurchaseOrder() {
  const initialValues = {
    Id: 0,
    Name: "",
    ShortName: "",
    UniqueId: "",
    HeadOffice: true,
    Enabled: true,
    Deleted: true,
  };
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
      form.setFieldsValue(initialValues);
      setFormData({});
    } else {
      const Id = (Math.random() * 356).toString();
      setIsLoading(false);
      setRows([...rows, { ...values, Id: Id }]);
      form.setFieldsValue(initialValues);
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
      title: "Item Code",
      dataIndex: "Name",

    },
    {
      key: "2",
      title: "Item",
      dataIndex: "ShortName",
    },
    {
      key: "3",
      title: "Unit",
      dataIndex: "HeadOffice",
    },
    {
      key: "4",
      title: "Qty",
      dataIndex: "Enabled",
    },
    {
      key: "5",
      title: "Rate",
      dataIndex: "Name",
    },
    {
      key: "6",
      title: "Amount",
      dataIndex: "ShortName",
    },
    {
      key: "7",
      title: "Min",
      dataIndex: "HeadOffice",

    },
    {
      key: "8",
      title: "Max",
      dataIndex: "Enabled",

    },
    {
      key: "9",
      title: "Balance",
      dataIndex: "Enabled",

    },
    {
      key: "10",
      title: "Action",
      className: "text-center",
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
          <InputText label={"PO"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"PO Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Vendor"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Branch"} name={"Enabled"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Department Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Items"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Demand Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Rate"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputTextarea label={"Description"} name={"Name"} />
        </Col>
      </Row>
    </>
  );

  return (
    // <Card>
    <>
      <FormComponent
        title={"Purchase Order"}
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={formData.Id ? "Update" : "Save"}
        isLoading={isLoading}
        initialValues={initialValues}
        // customAction={customAction}
      />
      <br />
      <TableComponent
        columns={columns || []}
        rows={rows || []}
        title={"Purchase Order List"}
        loading={isTableLoading}
      />
    </>
    // </Card>
  );
}
