import React from "react";
import FormComponent from "./form/FormComponent";
import TableComponent from "./TableComponent";

export default function FormAndTable(props) {
  return (
    <>
      <FormComponent {...props.form} />
      <br />
      <TableComponent {...props.table} />
    </>
  );
}
