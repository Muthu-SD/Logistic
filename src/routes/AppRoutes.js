import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./protected-route";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected route for authenticated users */}
      <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
      {/* Route for sign up */}
      <Route path="/signup" element={<SignUp />} />
      {/* Route for login */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
