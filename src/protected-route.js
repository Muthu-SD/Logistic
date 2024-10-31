// src/Components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import useStore from "./store/UseStore";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

