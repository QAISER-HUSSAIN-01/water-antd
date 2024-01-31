import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputText from "components/form/InputText";
import React, { useEffect, useState } from "react";

export default function Branch() {
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
      title: "Branch Name",
      dataIndex: "Name",
      ...getColumnSearchProps("Name"),
      ...sortString("Name"),
    },
    {
      key: "2",
      title: "Branch Code",
      dataIndex: "ShortName",
      ...getColumnSearchProps("ShortName"),
      ...sort("ShortName"),
    },
    {
      key: "3",
      title: "Is Head Office",
      dataIndex: "HeadOffice",
      render: (_, record) => <Checkbox checked={record.HeadOffice} />,
      // className: "text-center",
    },
    {
      key: "4",
      title: "Is Active",
      dataIndex: "Enabled",
      render: (_, record) => <Checkbox checked={record.Enabled} />,
      // className: "text-center",
    },
    {
      key: "5",
      title: "Action",
      // className: "text-center",
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

  const tabledata = [
    {
      Id: "1",
      ShortName: "8",
      Name: "Shershah Road",
      HeadOffice: true,
      Enabled: true,
    },
    {
      Id: "2",
      Name: "Maripur",
      ShortName: "",
      HeadOffice: false,
      Enabled: true,
    },
    {
      Id: "3",
      Name: "Defence Housing Authority",
      ShortName: "2",
      HeadOffice: false,
      Enabled: false,
    },
  ];

  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Branch Code"} name={"ShortName"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Head Office"} name={"HeadOffice"} />
        </Col>
        <Col xs={12} md={6} xl={3} className="flex align-center">
          <InputCheckbox label={"Is Active"} name={"Enabled"} />
        </Col>
      </Row>
    </>
  );

  const handleReload = () => {
    setIsTableLoading(true);
    setTimeout(() => {
      setRows(tabledata);
      setIsTableLoading(false);
    }, [3000]);
  };
  const handleDeleteAll = (selectedRows) => {
    console.log("selectedRows", selectedRows);
    const deleted = rows.filter(
      (item, index) => selectedRows[index]?.Id != item.Id
    );
    console.log("deleted", deleted);
    setRows(deleted);
  };
  useEffect(() => {
    setRows(tabledata);
  }, []);

  return (
    // <Card>
    <>
      <FormComponent
        title={"Add Branch"}
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
        title={"Branch List"}
        handleReload={handleReload}
        loading={isTableLoading}
        handleDeleteAll={handleDeleteAll}
      />
    </>
    // </Card>
  );
}
