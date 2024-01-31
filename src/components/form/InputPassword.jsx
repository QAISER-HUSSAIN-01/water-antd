import { Form, Input, Typography } from "antd";
import React from "react";

export default function InputPassword({
  label,
  placeholder,
  name,
  disabled,
  min,
  max,
  pattern,
  required,
}) {
  return (
    <Form.Item
      label={label}
      name={name}
      // initialValue={value}
      rules={[
        { required: required, message: `${label} is required!` },
        { pattern: pattern?.allow, message: pattern?.message },
      ]}
    
    >
      <Input.Password
        // onChangeCapture={(e) => onChange(e, validation)}
        disabled={disabled}
        placeholder={placeholder || label}
      />
    </Form.Item>
  );
}
