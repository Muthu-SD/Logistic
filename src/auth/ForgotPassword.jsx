import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Styles from "../styles/auth/AuthForm.module.css";

import logo from "../assets/Logo.png"; // Import logo
import illustrator from "../assets/login/Illustrator.svg"; // Import illustration
import { useTheme } from "../context/ThemeContext";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  const handleOtpRequest = async (values) => {
    setLoading(true);
    try {
      setEmail(values.email);
      await axios.post(`${API_URL}/api/users/forgot-password`, {
        email: values.email,
      });
      message.success("Password reset OTP sent to your email.");
      setOtpSent(true);
    } catch (error) {
      message.error(error.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (values) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/users/reset-password`, {
        email,
        resetOtp: values.otp,
        newPassword: values.newPassword,
      });
      message.success("Password reset successfully!");
      // Navigate to login page after successful reset
      navigate("/login");
    } catch (error) {
      message.error(
        error.response?.data?.message || "Failed to reset password."
      );
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
            name="forgotPassword"
            onFinish={otpSent ? handleResetPassword : handleOtpRequest}
            className={Styles.formContainer}
          >
            <h2 className={Styles.formTitle}>
              {otpSent ? "Reset Password" : "Forgot Password"}
            </h2>
            {!otpSent && (
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Email"
                  style={{
                    background: theme.component.input.backgroundColor,
                  }}
                />
              </Form.Item>
            )}
            {otpSent && (
              <>
                <Form.Item
                  name="otp"
                  rules={[
                    {
                      required: true,
                      message: "Please input the OTP sent to your email!",
                    },
                  ]}
                >
                  <Input
                    placeholder="OTP"
                    style={{
                      background: theme.component.input.backgroundColor,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your new password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="New Password"
                    style={{
                      background: theme.component.input.backgroundColor,
                    }}
                  />
                </Form.Item>
              </>
            )}
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                className={Styles.button_login}
                htmlType="submit"
                loading={loading}
              >
                {otpSent ? "Reset Password" : "Send OTP"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
