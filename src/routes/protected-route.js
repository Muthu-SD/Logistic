import React from "react";
import { Navigate } from "react-router-dom";
import useStore from "../store/UseStore";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useStore();
  const token = localStorage.getItem("authToken"); // Adjust this based on where you store the token

  // Function to check if the token is expired
  const isTokenExpired = (token) => {
    if (!token) return true; // No token means it's expired
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000; // Current time in seconds
    return payload.exp < currentTime; // Check if expiration time is less than current time
  };

  // Check if user is authenticated and token is not expired
  const isLoggedIn = isAuthenticated && !isTokenExpired(token);

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
