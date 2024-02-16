import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Input, Space, Form } from "antd";
import ButtonComponent from "components/ButtonComponent";
import { SuccessNotification } from "components/Notifications";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";
import FormComponent from "components/form/FormComponent";
import InputDate from "components/form/InputDate";
import React, { useEffect, useState } from "react";
import { Delete, GetAll, Post, Update } from "utils/CrudApi";

const initialEditRows = {
  records: [],
};
export default function Supply() {
  const { getColumnSearchProps, sort, sortString } = TableConfig();
  const [id, setId] = useState(null);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [editRows, setEditRows] = useState(initialEditRows);
  const [selectedDate, setSelectedDate] = useState("");
  const [date] = Form.useForm();

  const handleUpdate = async () => {
    setIsTableLoading(true);
    const data = await Update("supply", editRows?._id, editRows);
    if (data?.success) {
      SuccessNotification(data?.message);
      setRows(data?.data);
      setEditRows(initialEditRows);
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

  const handleBlur = (e, render) => {
    const { value, id } = e.target;
    if (value) {
      if (
        editRows?.records?.length > 0 &&
        editRows.records?.find((item) => item.date == id)
      ) {
        let updated = editRows?.records?.map((item) => {
          if (item?.date == id) {
            return { date: id, qty: value };
          }
          return item;
        });
        setEditRows({
          ...editRows,
          ...render,
          records: updated,
        });
      } else {
        let created = editRows?.records?.length > 0 ? [...editRows?.records] : [];
        created.push({ date: id, qty: value });
        setEditRows({
          ...editRows,
          ...render,
          records: created,
        });
      }
    }
  };
  
  const handleChange = (date, dateString) => {
    setSelectedDate(dateString);
  };
  
  const dateFormat = (currentDate, din) => {
    // Get year, month, and day
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = din;
    // Format the date string
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const generateColumns = () => {
    const genCols = [];
    const currentDate = selectedDate ? new Date(selectedDate) : new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const numberOfDays = getDaysInMonth(currentYear, currentMonth);
    for (let day = 1; day <= numberOfDays; day++) {
      genCols.push({
        title: `${currentMonth + 1}/${day}`,
        dataIndex: dateFormat(currentDate, day),
        key: `day_${day}`,
        editable: true,
        render: (_, render) => {
          const value = render?.records?.find(item=>item.date == dateFormat(currentDate, day) ? item.qty : '');
          return(
          <Input
            id={dateFormat(currentDate, day)}
            onBlur={(e) => handleBlur(e, render)}
            disabled={editRows._id && editRows._id != render?._id}
            value={value?.qty}
          />
        )},
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
          {editRows._id == record?._id && (
            <ButtonComponent
              icon={<UploadOutlined />}
              onClick={() => handleUpdate(record)}
              disabled={editRows._id != record?._id}
            />
          )}
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const fetched = async () => {
      const data = await GetAll("supply");
      setRows(data?.data);
    };
    fetched();
  }, []);

  useEffect(() => {
    generateColumns();
    setEditRows({});
  }, [selectedDate]);

  const formFields = <InputDate handleChange={handleChange} />;

  return (
    <>
      <FormComponent children={formFields} form={date} />
      <br />
      <TableComponent
        columns={columns || []}
        rows={rows || []}
        title={"Supply List"}
        loading={isTableLoading}
      />
    </>
  );
}

// import React, { useEffect, useState, useRef } from "react";
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import { Input, Space, Form } from "antd";
// import ButtonComponent from "components/ButtonComponent";
// import { SuccessNotification } from "components/Notifications";
// import TableComponent from "components/TableComponent";
// import TableConfig from "components/TableConfig";
// import FormComponent from "components/form/FormComponent";
// import InputDate from "components/form/InputDate";
// import { Delete, GetAll, Update } from "utils/CrudApi";

// const Supply = () => {
//   const { getColumnSearchProps, sortString } = TableConfig();
//   const [id, setId] = useState(null);
//   const [isTableLoading, setIsTableLoading] = useState(false);
//   const [rows, setRows] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [date] = Form.useForm();

//   const handleUpdate = async (payload) => {
//     delete payload?.password;
//     setIsTableLoading(true);
//     const data = await Update("user", id, payload);
//     if (data?.success) {
//       SuccessNotification(data?.message);
//       setRows(data?.data);
//       setIsTableLoading(false);
//       setId(null);
//     }
//     setIsTableLoading(false);
//   };

//   const handleDelete = async (record) => {
//     setIsTableLoading(true);
//     const data = await Delete("user", record._id);
//     if (data?.success) {
//       setRows(data?.data);
//       setIsTableLoading(false);
//     }
//     setIsTableLoading(false);
//   };

//   const EditableCell = ({ dataIndex, record, handleUpdate }) => {
//     const [editing, setEditing] = useState(true);
//     const inputRef = useRef();

//     const toggleEdit = () => {
//       setEditing(!editing);
//     };

//     const handleInputChange = (e) => {
//       const { value } = e.target;
//       const payload = { [dataIndex]: value };
//       handleUpdate(payload);
//       toggleEdit();
//     };

//     useEffect(() => {
//       if (editing) {
//         inputRef.current.focus();
//       }
//     }, [editing]);

//     return (
//       <td>
//         {editing ? (
//           <Input
//             ref={inputRef}
//             onPressEnter={handleInputChange}
//             onBlur={toggleEdit}
//           />
//         ) : (
//           <div style={{ paddingRight: 24 }} onClick={toggleEdit}>
//             {record[dataIndex]}
//           </div>
//         )}
//       </td>
//     );
//   };
//   const generateColumns = () => {
//     const genCols = [];
//     const currentDate = selectedDate ? new Date(selectedDate) : new Date();
//     const currentMonth = currentDate.getMonth();
//     const currentYear = currentDate.getFullYear();
//     const numberOfDays = getDaysInMonth(currentYear, currentMonth);

//     for (let day = 1; day <= numberOfDays; day++) {
//       genCols.push({
//         title: `${currentMonth + 1}/${day}`,
//         dataIndex: `day_${day}`,
//         key: `day_${day}`,
//         editable: true,
//         render: (_, render, index) => (
//           <EditableCell
//             dataIndex={`day_${day}`}
//             record={render}
//             handleUpdate={handleUpdate}
//           />
//         ),
//       });
//     }
//     return genCols;
//   };

//   const columns = [
//     {
//       key: "1",
//       title: "Name",
//       dataIndex: "username",
//       ...getColumnSearchProps("username"),
//       ...sortString("username"),
//       width: "150px",
//       fixed: "left",
//     },
//     ...generateColumns(),
//     {
//       key: "5",
//       title: "Action",
//       fixed: "right",
//       width: "100px",
//       render: (_, record) => (
//         <Space>
//           <ButtonComponent
//             icon={<EditOutlined />}
//             onClick={() => setId(record.key)}
//           />
//           <ButtonComponent
//             icon={<DeleteOutlined />}
//             onClick={() => handleDelete(record)}
//             danger={true}
//           />
//         </Space>
//       ),
//     },
//   ];

//   const handleChange = (date, dateString) => {
//     setSelectedDate(dateString);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsTableLoading(true);
//       const data = await GetAll("user");
//       setRows(data?.data);
//       setIsTableLoading(false);
//     };
//     fetchData();
//   }, [selectedDate]);

//   const formFields = <InputDate handleChange={handleChange} />;

//   return (
//     <>
//       <FormComponent children={formFields} form={date} />
//       <br />
//       <TableComponent
//         columns={columns || []}
//         rows={rows || []}
//         title={"Supply List"}
//         loading={isTableLoading}
//       />
//     </>
//   );
// };

// export default Supply;

// function getDaysInMonth(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }
