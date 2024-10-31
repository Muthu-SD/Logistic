// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./protected-route";
import { useTheme } from "./context/ThemeContext";
import { ConfigProvider } from "antd";

const App = () => {
  // const { theme } = useContext(ThemeContext);
  const { theme } = useTheme();

  return (
    // <div className={`App ${dark}`}>
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          {/* Protected route for authenticated users */}
          <Route
            path="/"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          {/* Route for sign up */}
          <Route path="/signup" element={<SignUp />} />
          {/* Route for login */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ConfigProvider>
    // </div>
  );
};

export default App;
