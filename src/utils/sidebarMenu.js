import {
  DashboardOutlined,
  AccountBookOutlined,
  LogoutOutlined,
  SettingOutlined,
  GroupOutlined,
  EditTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export const sidebarList = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: <Link to="">Dashboard</Link>,
  },
  {
    key: "/inventory",
    icon: <AccountBookOutlined />,
    label: "Inventory",
    children: [
      {
        key: "/inventory/supply",
        icon: <EditTwoTone />,
        label: <Link to="inventory/supply">Supply</Link>,
      },
      {
        key: "/inventory/invoice",
        icon: <EditTwoTone />,
        label: <Link to="inventory/invoice">Invoice</Link>,
      }
    ],
  },
  {
    key: "/setup",
    icon: <GroupOutlined />,
    label: "Setup",
    children: [
      {
        key: "/setup/user",
        icon: <EditTwoTone />,
        label: <Link to="setup/user">Add User</Link>,
      },
      {
        key: "/setup/customer",
        icon: <EditTwoTone />,
        label: <Link to="setup/customer">Add Customer</Link>,
      },
      {
        key: "/setup/item",
        icon: <EditTwoTone />,
        label: <Link to="setup/item">Add Item</Link>,
      },
    ],
  },
  {
    key: "/setting",
    icon: <SettingOutlined />,
    label: <Link to="setting">Setting</Link>,
  },

];

