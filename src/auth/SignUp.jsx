import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate, Link } from "react-router-dom";
// import useStore from "../store/UseStore"; // Import the store
import Styles from "../styles/auth/AuthForm.module.css";
import logo from "../assets/Logo.png"; // Import logo
import illustrator from "../assets/login/Illustrator.svg"; // Import illustration
import { useTheme } from "../context/ThemeContext";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const { signup } = useStore(); // Get the signup function from the store
  const { theme } = useTheme();
  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/users/register`, values);
      message.success("Signup successful! OTP sent to your email.");

      navigate("/verify-otp", { state: { email: values.email } });
    } catch (error) {
      message.error(
        error.response?.data?.message || "An error occurred during signup"
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
            name="signUp"
            onFinish={onFinish}
            className={Styles.formContainer}
          >
            <h2 className={Styles.formTitle}>Sign Up</h2>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                placeholder="Name"
                style={{ background: theme.component.input.backgroundColor }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                type="email"
                placeholder="Email"
                style={{ background: theme.component.input.backgroundColor }}
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
                style={{ background: theme.component.input.backgroundColor }}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
                style={{ background: theme.component.input.backgroundColor }}
              />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                className={Styles.button_login}
                htmlType="submit"
                loading={loading}
              >
                Signup
              </Button>
            </Form.Item>
            <p style={{ textAlign: "center" }}>
              Already have an account?{" "}
              <Link to="/login" className={Styles.link}>
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
