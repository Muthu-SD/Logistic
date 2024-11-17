import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import MainLayout from "../layouts/MainLayout";

// Lazy loading components
const Login = lazy(() => import("../auth/Login"));
const SignUp = lazy(() => import("../auth/SignUp"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const SupplierClearance = lazy(() => import("../pages/SupplierClearance"));
const ShippingStatus = lazy(() => import("../pages/ShippingStatus"));

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected route for authenticated users */}
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading Main Layout...</div>}>
            <ProtectedRoute element={<MainLayout />} />
          </Suspense>
        }
      >
        {/* Route for dashboard */}
        <Route
          index
          element={
            <Suspense fallback={<div>Loading Dashboard...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        {/* Route for supplier-clearance */}
        <Route
          path="/supplier-clearance"
          element={
            <Suspense fallback={<div>Loading Supplier Clearance...</div>}>
              <SupplierClearance />
            </Suspense>
          }
        />
        {/* Route for shipping-status */}
        <Route
          path="/shipping-status"
          element={
            <Suspense fallback={<div>Loading Shipping Status...</div>}>
              <ShippingStatus />
            </Suspense>
          }
        />
      </Route>
      {/* Route for sign up */}
      <Route
        path="/signup"
        element={
          <Suspense fallback={<div>Loading Sign Up...</div>}>
            <SignUp />
          </Suspense>
        }
      />
      {/* Route for login */}
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
