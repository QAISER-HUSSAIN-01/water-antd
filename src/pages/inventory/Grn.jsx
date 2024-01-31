import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Col, Form, Row, Space, Typography } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import InputTextarea from "components/form/InputTextarea";
import React, { useEffect, useState } from "react";

export default function Grn() {
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
      title: "Item",
      dataIndex: "Name",
    },
    {
      key: "2",
      title: "Unit",
      dataIndex: "HeadOffice",
    },
    {
      key: "3",
      title: "Qty",
      dataIndex: "Enabled",
    },
    {
      key: "4",
      title: "Rate",
      dataIndex: "Name",
    },
    {
      key: "5",
      title: "Amount",
      dataIndex: "ShortName",
    },
    {
      key: "6",
      title: "Discount",
      dataIndex: "HeadOffice",
    },
    {
      key: "7",
      title: "Tax Percentage",
      dataIndex: "Enabled",
    },
    {
      key: "8",
      title: "Tax Amount",
      dataIndex: "Enabled",
    },
    {
      key: "9",
      title: "Total Amount",
      dataIndex: "Name",
    },
    {
      key: "10",
      title: "Min",
      dataIndex: "ShortName",
    },
    {
      key: "11",
      title: "Max",
      dataIndex: "HeadOffice",
    },
    {
      key: "12",
      title: "ST Balance",
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
        <Col xs={24} md={12} xl={6}>
          <InputText label={"GRN #"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"GRN Date"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Vendor"} name={"HeadOffice"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"Ref#"} name={"Enabled"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Items"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"GRN Qty"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"Rate"} name={"ShortName"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputText label={"Last Rate"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"PO"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Branch"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputSelect label={"Department"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputTextarea label={"Description"} name={"Name"} />
        </Col>
      </Row>
      <Row justify={"end"}>
        <Col xs={24} md={12} xl={6}>
          <Col xs={24} md={24} xl={24} className="mb-2">
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Gross Amount</Typography.Text>
              </Col>
              <Col xs={8} md={8} xl={8}>
                <Typography.Text>250</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Tax Percentage</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Total Tax</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Discount</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Transportation</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={24} xl={24}>
            <Row>
              <Col xs={12} md={8} xl={8}>
                <Typography.Text>Total Amount</Typography.Text>
              </Col>
              <Col xs={12} md={12} xl={12}>
                {" "}
                <InputText name={"Name"} size={"small"} />{" "}
              </Col>
            </Row>
          </Col>
        </Col>
        <Col xs={24} md={12} xl={6}>
          <InputCheckbox label={"Tax After Discount"} />
          <InputCheckbox label={"Auto Issuance"} />
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
        submit={formData.Id ? "Update" : "Search"}
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
