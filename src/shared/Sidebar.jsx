import React, { useState } from "react";
import { sidebarList } from "../utils/sidebarMenu";
import { Avatar, Col, Divider, Layout, Menu, Row, Space, Typography } from "antd";
import { AlibabaOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import logo from "assets/imgs/logo.jpg";
import useDimension from "hooks/useDimension";
import { getLocalItem } from "utils/functions";
export default function Sidebar({ hide, setHide }) {
  const location = useLocation();
  const { windowWidth } = useDimension();
  return (
    <Layout.Sider
      // trigger={null}
      className="sidebar"
      collapsed={hide}
      breakpoint="sm"
      onBreakpoint={(param) => setHide(param)}
      hidden={windowWidth < 500 ? hide : false}
      theme="light"
    >
      <Col
        className={`flex justify-center align-center ${
          hide ? "p-2" : "p-2"
        } logo-container`}
      >
        <Row gutter={[20, 0]}>
          <Col className="logo">
            {/* <img src={logo} alt="logo" /> */}
            <Avatar shape="square" style={{width:'100%', height:'100%', borderRadius:'2px',backgroundColor:"#e6f4ff", color:'black',fontSize:'18px'}} icon={<UserOutlined />} />
          </Col>
          {!hide && (
            <Col className="flex flex-column">
              <Typography.Text className="bold mb-0 capitalize">
                {getLocalItem("username")}
              </Typography.Text>
              <Typography.Text className="capitalize">{getLocalItem("role")}</Typography.Text>
            </Col>
          )}
        </Row>
      </Col>
      <Menu
        mode={windowWidth < 500 ? "inline" : "vertical"}
        onClick={(e) => (windowWidth < 500 ? setHide(true) : "")}
        theme="light"
        items={sidebarList || []}
        className="menu"
        // defaultOpenKeys={['/inventory/grn']}
        selectedKeys={[location.pathname]}
      />
    </Layout.Sider>
  );
}
