import { Checkbox, Form, message } from "antd";

export default function InputCheckbox({
  label,
  name,
  disabled,
  required,
  // value
}) {
  return (
    <Form.Item
      // initialValue={value}
      name={name}
      valuePropName="checked"
      rules={[{ required: required, message: `${label} is required!` }]}
      className="mb-0"
    >
      {/* onChange={onChange} */}
      <Checkbox disabled={disabled}>
        {label} {required && <span className="steric">*</span>}
      </Checkbox>
    </Form.Item>
  );
}
