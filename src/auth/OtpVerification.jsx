import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Styles from "../styles/auth/AuthForm.module.css";
import logo from "../assets/Logo.png"; // Import logo
import illustrator from "../assets/login/Illustrator.svg"; // Import illustration
import { useTheme } from "../context/ThemeContext";

const OtpVerification = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false); // Loading state for resending OT
  const { theme } = useTheme();
  const [otp, setOtp] = useState("");

  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const handleOtpSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/users/verify-otp`, {
        email: state.email,
        otp,
      });
      message.success(response.data.message);
      navigate("/login");
    } catch (error) {
      message.error(error.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResending(true);
    try {
      const response = await axios.post(`${API_URL}/api/users/resend-otp`, {
        email: state.email,
      });
      message.success(
        response.data.message || "OTP has been resent to your email."
      );
    } catch (error) {
      message.error(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResending(false);
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
            name="verifyOtp"
            onFinish={handleOtpSubmit}
            className={Styles.formContainer}
          >
            <h2 className={Styles.formTitle}>Enter OTP</h2>
            <Form.Item>
              <Input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                style={{ background: theme.component.input.backgroundColor }}
              />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                className={Styles.button_login}
                htmlType="submit"
                loading={loading}
              >
                Verify OTP
              </Button>
            </Form.Item>
            <p style={{ textAlign: "center", cursor: "pointer" }}>
              <span onClick={handleResendOtp} className={Styles.link}>
                {resending ? "Resending..." : "Resend OTP?"}
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
