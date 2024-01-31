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
        key: "/inventory/opening-inventory",
        icon: <EditTwoTone />,
        label: <Link to="inventory/opening-inventory">Opening Inventory</Link>,
      },
      {
        key: "/inventory/purchase-order",
        icon: <EditTwoTone />,
        label: <Link to="inventory/purchase-order">Purchase Order</Link>,
      },
      {
        key: "/inventory/grn",
        icon: <EditTwoTone />,
        label: <Link to="inventory/grn">GRN</Link>,
      },
      {
        key: "/inventory/production",
        icon: <EditTwoTone />,
        label: <Link to="inventory/production">Production</Link>,
      },
      {
        key: "/inventory/issuance",
        icon: <EditTwoTone />,
        label: <Link to="inventory/issuance">Issuance</Link>,
      },
      {
        key: "/inventory/customer-sale-invoice",
        icon: <EditTwoTone />,
        label: (
          <Link to="inventory/customer-sale-invoice">
            Customer Sale Invoice
          </Link>
        ),
      },
      {
        key: "/inventory/adjustment",
        icon: <EditTwoTone />,
        label: <Link to="inventory/adjustment">Adjustment</Link>,
      },
      {
        key: "/inventory/wastage",
        icon: <EditTwoTone />,
        label: <Link to="inventory/wastage">Wastage</Link>,
      },
      {
        key: "/inventory/physical-stock",
        icon: <EditTwoTone />,
        label: <Link to="inventory/physical-stock">Physical Stock</Link>,
      },
      {
        key: "/inventory/issuance-return",
        icon: <EditTwoTone />,
        label: <Link to="inventory/issuance-return">Issuance Return</Link>,
      },
      {
        key: "/inventory/invoice",
        icon: <EditTwoTone />,
        label: <Link to="inventory/invoice">Invoice</Link>,
      },
      {
        key: "/inventory/grn-return",
        icon: <EditTwoTone />,
        label: <Link to="inventory/grn-return">GRN Return</Link>,
      },
      {
        key: "/inventory/quotation",
        icon: <EditTwoTone />,
        label: <Link to="inventory/quotation">Quotation</Link>,
      },
    ],
  },
  {
    key: "/setup",
    icon: <GroupOutlined />,
    label: "Setup",
    children: [
      {
        key: "/setup/branch",
        icon: <EditTwoTone />,
        label: <Link to="setup/branch">Add Branch</Link>,
      },
      {
        key: "/setup/category",
        icon: <EditTwoTone />,
        label: <Link to="setup/category">Add Category</Link>,
      },
      {
        key: "/setup/department",
        icon: <EditTwoTone />,
        label: <Link to="setup/department">Add Department</Link>,
      },
      {
        key: "/setup/item",
        icon: <EditTwoTone />,
        label: <Link to="setup/item">Add Item</Link>,
      },
      {
        key: "/setup/subcategory",
        icon: <EditTwoTone />,
        label: <Link to="setup/subcategory">Add Sub-Category</Link>,
      },
      {
        key: "/setup/recipe",
        icon: <EditTwoTone />,
        label: <Link to="setup/recipe">Add Recipe</Link>,
      },
      {
        key: "/setup/user-inventory-role",
        icon: <EditTwoTone />,
        label: <Link to="setup/user-inventory-role">Add User Inventory Role</Link>,
      },
    ],
  },
  {
    key: "/setting",
    icon: <SettingOutlined />,
    label: <Link to="setting">Setting</Link>,
  },

];

