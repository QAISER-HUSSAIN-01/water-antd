import {
  EditOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  LogoutOutlined,
  MenuOutlined,
  SettingOutlined,
  UserOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, Space, Switch, theme } from "antd";
import DropdownComponent from "components/DropdownComponent";
import { confirm } from "components/Modals";
import { Link, useNavigate } from "react-router-dom";
import { removeLocalItem } from "utils/functions";
import { handleTheme } from "../store/slices/theme";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "components/ButtonComponent";
import { useState } from "react";

export default function Header({ handleSidebar }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const navigate = useNavigate();
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const logout = () => {
    removeLocalItem("token");
    navigate("/login");
  };

  const items = [
    { key: "1", label: "...menu" },
    {
      key: "2",
      label: <Link to={"setting"}>Setting</Link>,
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: <Link to={"changepassword"}>Change Password</Link>,
      icon: <EditOutlined />,
    },
    {
      key: "4",
      label: (
        <Link
          onClick={() => confirm("Are you sure you want to logout?", logout)}
        >
          Sign Out
        </Link>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  const handleFullScreen = () => {
    let elem = document.documentElement;
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    } else {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  return (
    // h-30 line-h-3 ant-layout-sider-light
    <Layout.Header className="p-0">
      {/* <Menu theme="light"> */}
      <Row justify={"space-between"} className="pl-3">
        <Col span={1}>
          <MenuOutlined onClick={handleSidebar} className="header-icon" />
        </Col>
        <Space className="pr-3" size={"large"}>
          {/* <Col span={1} className="column">
            <Switch
              checkedChildren="Light"
              unCheckedChildren="Dark"
              onClick={() => {
                dispatch(handleTheme());
              }}
              defaultValue={isDark}
            />
          </Col> */}
          <Col>
            {isFullscreen ? (
              <FullscreenExitOutlined
                className="header-icon"
                onClick={handleFullScreen}
              />
            ) : (
              <FullscreenOutlined
                className="header-icon"
                onClick={handleFullScreen}
              />
            )}
          </Col>
          <Col>
            <DropdownComponent
              list={items}
              icon={<UserOutlined className="header-icon" />}
              // text={'Profile'}
            />
          </Col>
        </Space>
      </Row>
      {/* </Menu> */}
    </Layout.Header>
  );
}
