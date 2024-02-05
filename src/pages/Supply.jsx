import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Badge, Col, Form, Row, Space, Tag } from "antd";
import ButtonComponent from "components/ButtonComponent";
import { SuccessNotification } from "components/Notifications";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputPassword from "components/form/InputPassword";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import React, { useEffect, useState } from "react";
import { Delete, GetAll, Post, Update } from "utils/CrudApi";
import { EMAIL, NUMERIC, OPTIONS, ROLES_MENU } from "utils/constants";

export default function Supply() {
  const initialValues = {
    userId: "",
    email: "",
    password: "",
    role: "",
    isActive: true,
  };
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState(null);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [form] = Form.useForm();

  const handleSubmit = async (payload) => {
    setIsLoading(true);
    const data = await Post("register", payload);
    if (data?.success) {
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
    delete payload?.password;
    setIsTableLoading(true);
    const data = await Update("user", id, payload);
    if (data?.success) {
      SuccessNotification(data?.message);
      setRows(data?.data);
      setIsTableLoading(false);
      form.setFieldsValue(initialValues);
      setId(null);
    }
    setIsTableLoading(false);
  };

  const handleDelete = async (record) => {
    setIsTableLoading(true);
    const data = await Delete("user", record._id);
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
      title: "Email",
      dataIndex: "email",
      ...getColumnSearchProps("email"),
      ...sortString("email"),
    },
    {
      key: "3",
      title: "Role",
      dataIndex: "role",
      ...getColumnSearchProps("role"),
      ...sort("role"),
    },
    {
      key: "4",
      title: "Is Active",
      dataIndex: "isActive",
      render: (_, record) =>
        record?.isActive ? (
          <Tag color="green">Yes</Tag>
        ) : (
          <Tag color="error">No</Tag>
        ),
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
          <InputSelect label={"Client"} name={"username"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Bottles In"} name={"email"} pattern={EMAIL} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Bottles Out"} name={"password"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText
            label={"Cash Recieved"}
            name={"cashRecieved"}
          />
        </Col>
      </Row>
    </>
  );

  useEffect(() => {
    const fetched = async () => {
      const data = await GetAll("user");
      setRows(data?.data);
    };
    fetched();
  }, []);

  return (
    // <Card>
    <>
      <FormComponent
        title={"Add Supply"}
        children={fields}
        handleSubmit={id ? handleUpdate : handleSubmit}
        form={form}
        submit={id ? "Update" : "Save"}
        isLoading={isLoading}
        initialValues={initialValues}
        extra={amount ? `Total: ${amount}` :''}
        // customAction={customAction}
      />
      <br />
      <TableComponent
        columns={columns || []}
        rows={rows || []}
        title={"Supply List"}
        loading={isTableLoading}
      />
    </>
    // </Card>
  );
}
