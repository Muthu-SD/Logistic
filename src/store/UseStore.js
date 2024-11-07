import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      otpVerified: false,
      otpSent: false,

      // Sign up function with OTP handling
      signup: (user, otp) => {
        if (user) {
          set({ user, otpSent: true, otpVerified: false });
        } else {
          console.error("Signup failed: User data is required");
        }
      },

      // OTP verification function
      verifyOtp: (inputOtp, actualOtp) => {
        if (inputOtp === actualOtp) {
          set({ isAuthenticated: true, otpVerified: true, otpSent: false });
          console.log("OTP verified successfully");
        } else {
          console.error("OTP verification failed: Incorrect OTP");
        }
      },

      // Login function
      login: (email, token) => {
        if (email && token) {
          localStorage.setItem("authToken", token); // Store the token
          set({ user: email, isAuthenticated: true });
        } else {
          console.error("Login failed: User data and token are required");
        }
      },

      // Logout function
      logout: () => {
        localStorage.removeItem("authToken"); // Clear token on logout
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
