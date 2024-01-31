import React from "react";
import { Button, Col, Row, Form, Space, Card } from "antd";

export default function SeacrhComponent({
  title,
  form,
  isLoading,
  handleSubmit,
  submit,
  reset,
  children,
  customAction,
  validate,
  initialValues,
  customActionJustify,
  hideActions,
  layout
}) {
  const handleFormData = (values) => {
    handleSubmit(values);
  };

  return (
    <Card title={title} bordered={false}>
      <Form
        form={form}
        onFinish={(values) => handleFormData(values)}
        layout={layout || "vertical"}
        autoComplete="off"
        onValuesChange={(change, values) => {
          if (validate) {
            validate(change, values);
          }
        }}
        initialValues={initialValues}
        // validateTrigger={['onBlur']}
      >
        {children}
        {!hideActions && (
          <Row gutter={[10, 0]} className={`justify-end mt-2`}>
            {/* {customAction ? customAction : <div></div>} */}
            <Space>
              {customAction && customAction}
              <Col>
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  type="primary"
                  disabled={isLoading}
                >
                  {submit || "Submit"}
                </Button>
              </Col>
              {reset !== false && (
                <Col>
                  <Button htmlType="reset" danger>
                    {reset || "Reset"}
                  </Button>
                </Col>
              )}
            </Space>
          </Row>
        )}
      </Form>
    </Card>
  );
}
