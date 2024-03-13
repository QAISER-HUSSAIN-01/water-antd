import { DownloadOutlined } from "@ant-design/icons";
import { Space } from "antd";
import ButtonComponent from "components/ButtonComponent";
import TableComponent from "components/TableComponent";
import TableConfig from "components/TableConfig";

import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFTemplate from "./PDFTemplate";
export default function ClientsTable({ rows }) {
  const { getColumnSearchProps, sort, sortString } = TableConfig();

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
    // {
    //   key: "4",
    //   title: "Bottle Qty",
    //   dataIndex: "bottleQty",
    //   ...getColumnSearchProps("bottleQty"),
    //   ...sort("bottleQty"),
    // },
    // {
    //   key: "5",
    //   title: "Bottle Price",
    //   dataIndex: "bottlePrice",
    //   ...getColumnSearchProps("bottlePrice"),
    //   ...sort("bottlePrice"),
    // },
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
          <PDFDownloadLink
            document={<PDFTemplate data={record} />}
            fileName={
              record?.username ? record?.username + ".pdf" : "sample.pdf"
            }
          >
            {({ blob, url, loading, error }) => (
              <ButtonComponent icon={<DownloadOutlined />} />
            )}
          </PDFDownloadLink>
        </Space>
      ),
    },
  ];

  return (
    <>
      <TableComponent
        columns={columns || []}
        rows={rows || []}
        title={"Client List"}
      />
      {/* <PDFViewer style={{ width: "100%", height: "90vh", marginTop: 20 }}>
        <PDFTemplate />
      </PDFViewer> */}
    </>
  );
}
