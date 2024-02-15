import React from "react";
import { DatePicker } from "antd";
export default function InputDate(props) {
  return <DatePicker format="YYYY-MM-DD" onChange={props?.handleChange} value={props?.value} />;
}
