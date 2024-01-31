import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "layout/DashboardLayout";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import LoginAuth from "routes/LoginAuth";
import ForgotPassword from "pages/ForgotPassword";
import ChangePassword from "pages/ChangePassword";
import Setting from "pages/Setting";
import Private from "./Private";
import Branch from "pages/setup/Branch";
import Category from "pages/setup/Category";
import Department from "pages/setup/Department";
import Item from "pages/setup/Item";
import Subcategory from "pages/setup/Subcategory";
import OpeningInventory from "pages/inventory/OpeningInventory";
import PurchaseOrder from "pages/inventory/PurchaseOrder";
import Grn from "pages/inventory/Grn";
import Production from "pages/inventory/Production";
import Issuance from "pages/inventory/Issuance";
import CustomerSaleInvoice from "pages/inventory/CustomerSaleInvoice";
import Adjustment from "pages/inventory/Adjustment";
import Wastage from "pages/inventory/Wastage";
import PhysicalStock from "pages/inventory/PhysicalStock";
import IssuanceReturn from "pages/inventory/IssuanceReturn";
import Invoice from "pages/inventory/Invoice";
import GrnReturn from "pages/inventory/GrnReturn";
import Quotation from "pages/inventory/Quotation";
import Recipe from "pages/setup/Recipe";
import UserInventory from "pages/setup/UserInventory";

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

          <Route
            path="inventory/opening-inventory"
            element={<OpeningInventory />}
          />
          <Route path="inventory/purchase-order" element={<PurchaseOrder />} />
          <Route path="inventory/grn" element={<Grn />} />
          <Route path="inventory/production" element={<Production />} />
          <Route path="inventory/issuance" element={<Issuance />} />
          <Route
            path="inventory/customer-sale-invoice"
            element={<CustomerSaleInvoice />}
          />
          <Route path="inventory/adjustment" element={<Adjustment />} />
          <Route path="inventory/wastage" element={<Wastage />} />
          <Route path="inventory/physical-stock" element={<PhysicalStock />} />
          <Route
            path="inventory/issuance-return"
            element={<IssuanceReturn />}
          />
          <Route path="inventory/invoice" element={<Invoice />} />
          <Route path="inventory/grn-return" element={<GrnReturn />} />
          <Route path="inventory/quotation" element={<Quotation />} />

          {/* Setup Routes */}

          <Route path="setup/branch" element={<Branch />} />
          <Route path="setup/category" element={<Category />} />
          <Route path="setup/department" element={<Department />} />
          <Route path="setup/item" element={<Item />} />
          <Route path="setup/subcategory" element={<Subcategory />} />
          <Route path="setup/recipe" element={<Recipe />} />
          <Route path="setup/user-inventory-role" element={<UserInventory />} />
          
          {/* Other Routes */}

          <Route path="setting" element={<Setting />} />
          <Route path="changepassword" element={<ChangePassword />} />
          
        </Route>

        {/* no routes */}

        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </Router>
  );
}
