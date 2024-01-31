import { Card, Col, Form, Row } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import FormComponent from "components/form/FormComponent";
import InputCheckbox from "components/form/InputCheckbox";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import React, { useState } from "react";

export default function Item() {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);

  const [form] = Form.useForm();
  const initialValues = {
    Id: 0,
    SubCategoryId: 0,
    Name: "",
    ItemCode: "",
    ItemTypeId: 0,
    PurchaseUnitId: 0,
    IssuanceUnitId: 0,
    RecipeUnitId: 0,
    PurchaseIssuance: 0,
    IssuanceRecipe: 0,
    Enabled: true,
    Deleted: true,
  };
  const columns = [
    {
      key: "1",
      title: "SubCategory Name",
      dataIndex: "SubCategoryName",
      filterSearch: true,
    },
    {
      key: "2",
      title: "Item Code",
      dataIndex: "CategoryName",
    },
    {
      key: "3",
      title: "Item Name",
      dataIndex: "IsActive",
    },
    {
      key: "4",
      title: "Purchase Unit",
      dataIndex: "AccountName",
    },
    {
      key: "5",
      title: "Issuance Unit",
      dataIndex: "AccountName",
    },
    {
      key: "6",
      title: "Recipe Unit",
      dataIndex: "AccountName",
    },
    {
      key: "7",
      title: "Purchase Issuance",
      dataIndex: "AccountName",
    },
    {
      key: "8",
      title: "Issuance Recipe",
      dataIndex: "AccountName",
    },
    {
      key: "9",
      title: "Is Active",
      dataIndex: "AccountName",
    },
    {
      key: "10",
      title: "Item type",
      dataIndex: "AccountName",
    },
  ];
  const fields = (
    <>
      <Row gutter={[20, 0]}>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Item Type"} name={"ItemTypeId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"SubCategory"} name={"SubCategoryId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Name"} name={"Name"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Item Code"} name={"ItemCode"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Purchase Unit"} name={"PurchaseUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Issuance Unit"} name={"IssuanceUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputSelect label={"Recipe Unit"} name={"RecipeUnitId"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Purchase Issuance"} name={"PurchaseIssuance"} />
        </Col>
        <Col xs={24} md={12} xl={8}>
          <InputText label={"Issuance Recipe"} name={"IssuanceRecipe"} />
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
      title={'Add Item'}
        children={fields}
        handleSubmit={handleSubmit}
        form={form}
        submit={"Save"}
        isLoading={isLoading}
        initialValues={initialValues}
        // customAction={customAction}
      />
      <br />
      <TableComponent columns={columns || []} rows={rows || []} title={'Item List'} />
    </>
  );
}
