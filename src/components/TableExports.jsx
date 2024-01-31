import React from "react";
import { Button, Table } from "antd";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useLocation } from "react-router-dom";

const ExportTable = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const lastSegment = pathArray[pathArray.length - 1];
  
  const exportToPDF = (columns, data) => {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = lastSegment;
    const headers = [columns.map((column) => column.title == 'Action' ? '':column.title)];

    const tableData = data.map((item) =>
      columns.map((column) => item[column.dataIndex])
    );
    const content = {
      startY: 50,
      head: headers,
      body: tableData,
    };
    const textWidth = doc.getTextWidth(title);

    // Calculate the x-coordinate to center the text
    const xCoordinate = (doc.internal.pageSize.width - textWidth) / 2;
  
    // Draw the text at the centered position
    doc.text(title, xCoordinate, 50);
    doc.autoTable(content);
    doc.save(`${lastSegment}.pdf`);
  };

  const exportToCSV = (columns, data) => {
    const fileType = "text/csv;charset=utf-8";
    const fileExtension = ".csv";

    const headers = columns.map((column) =>
      column.title != "Action" ? column.title : ""
    );
    const csvData = data.map((row) =>
      columns.map((column) => row[column.dataIndex])
    );

    const csvContent = headers.join(",") + "\n" + csvData.join("\n");

    const blob = new Blob([csvContent], { type: fileType });
    FileSaver.saveAs(blob, 'lastSegment' + fileExtension);
  };

  const exportToExcel = (columns, data) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    // Create a new array of objects with column titles as keys
    const newData = data.map((item) => {
      let newItem = {};
      columns.forEach((column) => {
        if (column.title != "Action") {
          newItem[column.title] = item[column.dataIndex];
        }
      });
      return newItem;
    });

    const ws = XLSX.utils.json_to_sheet(newData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const excelData = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(excelData, lastSegment + fileExtension);
  };

  const printTable = (columns, data) => {
    // Generate table headers
    let headers =
      "<tr>" +
      columns
        .map((column) => {
          if (column.title != "Action") {
            return `<th>${column.title}</th>`;
          }
        })
        .join("") +
      "</tr>";

    // Generate table rows
    let rows = data
      .map((item) => {
        let row = columns
          .map((column) =>
            column.title != "Action" ? `<td>${item[column.dataIndex]}</td>` : ""
          )
          .join("");
        return "<tr>" + row + "</tr>";
      })
      .join("");

    // Combine headers and rows to create table HTML
    let table = "<table>" + headers + rows + "</table>";

    // Open a new window and print the table
    let newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title> ${lastSegment} Table</title>
          <style>
           table {
            border-collapse:collapse;
            width:100%
           }
           th,td{
            border:1px solid black;
            padding: 8px;
            text-align:left
           }
          </style>
        </head>
        <body onload="window.print()">
          ${table}
        </body>
      </html>
    `);
    newWindow.document.close();
  };
  return { exportToCSV, exportToExcel, exportToPDF, printTable };
};

export default ExportTable;
