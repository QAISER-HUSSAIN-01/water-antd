import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "layout/DashboardLayout";
import Dashboard from "pages/dashboard/Dashboard";
import Login from "pages/Login";
import LoginAuth from "routes/LoginAuth";
import ForgotPassword from "pages/ForgotPassword";
import ChangePassword from "pages/ChangePassword";
import Setting from "pages/Setting";
import Private from "./Private";
import Users from "pages/setup/Users";
import Customers from "pages/setup/Customers";


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route
          path="/login"
          element={
            <LoginAuth>
              <Login />
            </LoginAuth>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <LoginAuth>
              <ForgotPassword />
            </LoginAuth>
          }
        />
        {/* private routes */}
        <Route path="/" element={<Private component={<DashboardLayout />} />}>
          <Route path="" element={<Dashboard />} />

          {/* Inventory Routes */}

          {/* <Route path="inventory/supply" element={<Supply />} />
          <Route path="inventory/invoice" element={<Invoice />} /> */}

          {/* Reports Routes */}
          {/* <Route path="report/user" element={<Branch />} /> */}

          {/* Setup Routes */}
          <Route path="setup/user" element={<Users />} />
          <Route path="setup/customer" element={<Customers />} />
          {/* <Route path="setup/item" element={<Item />} /> */}
          {/* Other Routes */}
          <Route path="setting" element={<Setting />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>
        s{/* no routes */}
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </Router>
  );
}
