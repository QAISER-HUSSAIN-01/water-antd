import React, { useState } from "react";
import { Card, Col, Row, Space, Table, Typography } from "antd";
import {
  DeleteOutlined,
  DownloadOutlined,
  PrinterOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ButtonComponent from "./ButtonComponent";
import TableExports from "./TableExports";

export default function TableComponent({
  title,
  columns,
  rows,
  loading,
  expandable,
  header,
  pagination,
  handleReload,
  handleDeleteAll
}) {
  const { exportToCSV, exportToExcel, exportToPDF, printTable } =
    TableExports();
  
  const headerContent = (
    <Row className="space-between">
      <Typography.Title level={5} className="line-h-1 mb-auto mt-auto">
        {title || "Item Lists"}
      </Typography.Title>
      {!header && (
        <Col>
          <Space size={"middle"}>
            <ButtonComponent
              icon={<DownloadOutlined className="success" />}
              type={"default"}
              tooltip="Download Excel"
              text={"Excel"}
              onClick={() => exportToExcel(columns, rows)}
              size={"small"}
            />
           
            <ButtonComponent
              icon={<DownloadOutlined className="error" />}
              type={"default"}
              tooltip="Download Pdf"
              text={"Pdf"}
              onClick={() => exportToPDF(columns, rows)}
              size={"small"}
            />
            <ButtonComponent
              icon={<PrinterOutlined className="info" />}
              type={"default"}
              tooltip="Print"
              text={"Print"}
              onClick={() => printTable(columns, rows)}
              size={"small"}
            />
          </Space>
        </Col>
      )}
    </Row>
  );
  return (
    <Card bordered={false} bodyStyle={{ padding: "0px" }} title={headerContent}>
      <Table
        // title={() => headerContent}
        columns={columns}
        dataSource={rows}
        scroll={{ x: 500, y: 400 }}
        // bordered
        loading={loading}
        rowKey={"_id"}
        // onRow={(record, rowIndex) => {
        //   return {
        //     onClick: (event) => {}, // click row
        //     onDoubleClick: (event) => {}, // double click row
        //     onContextMenu: (event) => {}, // right button click row
        //     onMouseEnter: (event) => {}, // mouse enter row
        //     onMouseLeave: (event) => {}, // mouse leave row
        //     onChange: (event) => {console.log(event);}
        //   };
        // }}
        // rowSelection={{
        //   selectedRowKeys:selectedRowKeys,
        //   onSelect: (prop) => {
        //     setSelectedRows([...selectedRows, prop]);
        //     setSelectedRowKeys([...selectedRowKeys,prop.Id]);
        //   },
        //   onSelectAll: (_, rows) => {
        //     setSelectedRows([...rows]);
        //     setSelectedRowKeys(rows.map(item => item.Id));
        //   }, 
        // }}
        expandable={
          expandable && {
            expandedRowRender: (record) => {
              console.log(record);
            },
            rowExpandable: (record) => (record.key > 1 ? true : false),
          }
        }
        size="middle"
        pagination={
          !pagination && {
            className: "px-3",
            showSizeChanger: true,
            onShowSizeChange: (currentnumber, sizenumber) => {},
            total: rows?.length,
            simple: true,
            showTotal: (total, range) => <div>Total: {total}</div>,
          }
        }
      />
    </Card>
  );
}
