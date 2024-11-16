import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./protected-route";
import SupplierClearance from "../pages/SupplierClearance";
import ShippingStatus from "../pages/ShippingStatus";
import MainLayout from ".././layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected route for authenticated users */}
      <Route path="/" element={<ProtectedRoute element={<MainLayout />} />}>
        {/* Route for dashboard */}
        <Route index element={<Dashboard />} />
        {/* Route for supplier-clearance */}
        <Route path="/supplier-clearance" element={<SupplierClearance />} />
        {/* Route for shipping-status */}
        <Route path="/shipping-status" element={<ShippingStatus />} />
      </Route>
      {/* Route for sign up */}
      <Route path="/signup" element={<SignUp />} />
      {/* Route for login */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
