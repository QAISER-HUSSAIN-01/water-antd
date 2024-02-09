import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Badge, Col, Form, Input, Row, Space, Tag } from "antd";
import ButtonComponent from "components/ButtonComponent";
import { SuccessNotification } from "components/Notifications";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputPassword from "components/form/InputPassword";
import InputSelect from "components/form/InputSelect";
import InputText from "components/form/InputText";
import React, { useEffect, useRef, useState } from "react";
import { Delete, GetAll, Post, Update } from "utils/CrudApi";
import { EMAIL, NUMERIC, OPTIONS, ROLES_MENU } from "utils/constants";

export default function Supply() {

  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const [id, setId] = useState(null);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [rows, setRows] = useState([]);

  const handleUpdate = async (payload) => {
    delete payload?.password;
    setIsTableLoading(true);
    const data = await Update("user", id, payload);
    if (data?.success) {
      SuccessNotification(data?.message);
      setRows(data?.data);
      setIsTableLoading(false);
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

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const generateColumns = () => {
    const genCols = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const numberOfDays = getDaysInMonth(currentYear, currentMonth);

    for (let day = 1; day <= numberOfDays; day++) {
      genCols.push({
        title: `${currentMonth + 1}/${day}`,
        dataIndex: `day_${day}`,
        key: `day_${day}`,
        editable: true,
       
        render: (_, render) => (
          <InputText />
        ),
      });
    }

    return genCols;
  };
  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "username",
      ...getColumnSearchProps("username"),
      ...sortString("username"),
      width: "150px",
      fixed: "left",
       // shouldCellUpdate:(record, prevRecord)=>{console.log({record,prevRecord});},
      //  onCell:(record, rowIndex)=>{console.log({record,rowIndex});},
    },
    ...generateColumns(),
    {
      key: "5",
      title: "Action",
      fixed: "right",
      width: "100px",
      render: (_, record) => (
        <Space>
          {/* {editedRows.includes(record.key) && ( */}
            <ButtonComponent
              icon={<EditOutlined />}
              onClick={() => handleUpdate(record)}
            />
          {/* )} */}
          <ButtonComponent
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            danger={true}
          />{" "}
        </Space>
      ),
    },
  ];


  useEffect(() => {
    const fetched = async () => {
      const data = await GetAll("user");
      setRows(data?.data);
    };
    fetched();
  }, []);

  return (
   
      <TableComponent
        columns={columns || []}
        rows={rows || []}
        title={"Supply List"}
        loading={isTableLoading}
      />
  );
}
