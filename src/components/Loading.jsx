import React from "react";
import { Spin } from "antd";

export default function Loading() {
  return (
    <Spin size="large" tip="Loading">
      {" "}
      <div className="content"></div>{" "}
    </Spin>
  );
}
