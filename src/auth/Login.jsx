// src/components/Login.js
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
import useStore from "../store/UseStore";
import Styles from "../styles/auth/AuthForm.module.css";
import logo from "../assets/Logo.png"; // Import logo
import illustrator from "../assets/login/Illustrator.svg"; // Import illustration
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [loading, setLoading] = useState(false);
  const { login } = useStore();
  const { theme } = useTheme();
  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/users/login`, {
        email: values.email,
        password: values.password,
      });

      // Extract token, user, and message from the response data
      const { token, user, message: Message } = response.data;
      // Save token to localStorage and update login state
      // localStorage.setItem("authToken", token);
      login(user.email, token);

      message.success(Message);
      navigate("/"); // Navigate to the dashboard
    } catch (error) {
      message.error(error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Styles.pageWrapper}>
      <div className={Styles.imageFormWrapper}>
        <div className={Styles.imageSection}>
          {/* <div className={Styles.logoSection}> */}
          <center>
            {" "}
            {/*--- to make logo image center this center tag is used ---*/}
            <img src={logo} alt="Logo" className={Styles.logo} />
          </center>
          {/* </div>  */}
          <img
            src={illustrator}
            alt="Illustrator"
            className={Styles.illustrator}
          />
        </div>
        <div className={Styles.formWrapper}>
          <Form
            name="login"
            onFinish={onFinish}
            className={Styles.formContainer}
          >
            <h2 className={Styles.formTitle}>Login</h2>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                type="email"
                placeholder="Email"
                style={{
                  background: theme.component.input.backgroundColor,
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                style={{
                  background: theme.component.input.backgroundColor,
                }}
              />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                className={Styles.button_login}
                htmlType="submit"
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
            <p style={{ textAlign: "center" }}>
              <Link to="/forgot-password" className={Styles.link}>
                Forgot Password?
              </Link>
            </p>
            <p style={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <Link to="/signup" className={Styles.link}>
                Sign Up
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
