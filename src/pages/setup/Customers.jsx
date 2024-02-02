import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import { SuccessNotification } from "components/Notifications";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputText from "components/form/InputText";
import React, { useEffect, useState } from "react";
import { Delete, GetAll, Post, Update } from "utils/CrudApi";
import { NUMERIC } from "utils/constants";

export default function Customers() {
  const initialValues = {
    username: "",
    phone: "",
    address: "",
    bottleQty: "",
    bottlePrice: "",
    bottlesTotalAmount: "",
    bottlesRecievedAmount: "",
    bottlesRemainingAmount: "",
  };
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(null);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = async (payload) => {
    setIsLoading(true);
    const data = await Post("customer", payload);
    if (data.success) {
      setRows(data?.data);
      setIsLoading(false);
      SuccessNotification(data?.message);
      form.setFieldsValue(initialValues);
    }
    setIsLoading(false);
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setId(record?._id);
  };
  const handleUpdate = async (payload) => {
    setIsTableLoading(true);
    const data = await Update("customer", id, payload);
    if (data?.success) {
      setRows(data?.data);
      setIsTableLoading(false);
      form.setFieldsValue(initialValues);
      setId(null);
    }
    setIsTableLoading(false);
  };

  const handleDelete = async (record) => {
    setIsTableLoading(true);
    const data = await Delete("customer", record._id);
    if (data?.success) {
      setRows(data?.data);
      setIsTableLoading(false);
    }
    setIsTableLoading(false);
  };

  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "username",
      ...getColumnSearchProps("username"),
      ...sortString("username"),
    },
    {
      key: "2",
      title: "Phone No",
      dataIndex: "phone",
      ...getColumnSearchProps("phone"),
      ...sort("phone"),
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "address",
      ...getColumnSearchProps("address"),
      ...sortString("address"),
    },
    {
      key: "4",
      title: "Bottle Qty",
      dataIndex: "bottleQty",
      ...getColumnSearchProps("bottleQty"),
      ...sort("bottleQty"),
    },
    {
      key: "5",
      title: "Bottle Price",
      dataIndex: "bottlePrice",
      ...getColumnSearchProps("bottlePrice"),
      ...sort("bottlePrice"),
    },
    {
      key: "6",
      title: "Remaining Amount",
      dataIndex: "bottlesRemainingAmount",
    },
    {
      key: "7",
      title: "Recieved Amount",
      dataIndex: "bottlesRecievedAmount",
    },
    {
      key: "8",
      title: "Total Amount",
      dataIndex: "bottlesTotalAmount",
    },
    {
      key: "9",
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
          <InputText label={"Name"} name={"username"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Phone No"} name={"phone"} pattern={NUMERIC} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Address"} name={"address"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText
            label={"Bottle Qty"}
            name={"bottleQty"}
            pattern={NUMERIC}
          />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText
            label={"Bottle Price"}
            name={"bottlePrice"}
            pattern={NUMERIC}
          />
        </Col>

        <Col xs={24} md={12} xl={8}>
          <InputText
            label={"Recieved Amount"}
            name={"bottlesRecievedAmount"}
            pattern={NUMERIC}
          />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText
            label={"Remaining Amount"}
            name={"bottlesRemainingAmount"}
            disabled={true}
            pattern={NUMERIC}
          />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText
            label={"Total Amount"}
            name={"bottlesTotalAmount"}
            disabled={true}
            pattern={NUMERIC}
          />
        </Col>
      </Row>
    </>
  );

  const validate = (change, values) => {
    if (values.bottleQty && values.bottlePrice) {
      form.setFieldsValue({
        bottlesTotalAmount: `${
          parseInt(values.bottleQty) * parseInt(values.bottlePrice)
        }`,
        bottlesRemainingAmount: `${
          parseInt(values.bottleQty) * parseInt(values.bottlePrice)
        }`,
      });
    }
    if (change?.bottlesRecievedAmount) {
      form.setFieldValue(
        "bottlesRemainingAmount",
        `${
          parseInt(values.bottlesTotalAmount) -
          parseInt(values.bottlesRecievedAmount)
        }`
      );
    }
  };

  useEffect(() => {
    const fetched = async () => {
      const data = await GetAll("customer");
      setRows(data?.data);
    };
    fetched();
  }, []);
  return (
    // <Card>
    <>
      <FormComponent
        title={"Add Customer"}
        children={fields}
        handleSubmit={id ? handleUpdate : handleSubmit}
        form={form}
        submit={id ? "Update" : "Save"}
        isLoading={isLoading}
        initialValues={initialValues}
        validate={validate}
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
