import { Form, Input } from "antd";
import React from "react";

export default function InputTextarea({
  label,
  placeholder,
  name,
  disabled,
  min,
  max,
  showCount,
  required,
}) {
  return (
    <Form.Item
      label={label}
      name={name}
      // initialValue={value}
      rules={[
        { required: required, message: `${label} is required!` },
        { min: min, message: `Minimum length required ${min}` },
        { max: max, message: `Maximum length is ${max}` },
        
      ]}
    >
      <Input.TextArea
        placeholder={placeholder || label}
        // onChangeCapture={(e) => onChange(e)}
        disabled={disabled}
        // showCount={showCount}
        // maxLength={max}
      />
    </Form.Item>
  );
}
