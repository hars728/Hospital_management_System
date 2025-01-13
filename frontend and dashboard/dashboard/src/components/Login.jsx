import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hospital-management-system-leq2.vercel.app/api/v1/user/login",
        { email, password, role: "Admin" },
        {
          withCredentials: true,  // Make sure credentials (cookies) are included with the request
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message); // Display success message
      setIsAuthenticated(true); // Set authentication status
      navigateTo("/"); // Redirect to home or dashboard page
      setEmail(""); // Reset email
      setPassword(""); // Reset password
      setConfirmPassword(""); // Reset confirm password
    } catch (error) {
      // Ensure proper error handling
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again."; // Fallback error message
      toast.error(errorMessage); // Display error message
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />; // If authenticated, redirect to home/dashboard
  }

  return (
    <>
      <section className="container form-component">
        <img src="/logo.png" alt="logo" className="logo" />
        <h1 className="form-title">WELCOME TO SatyaCare</h1>
        <p>Only Admins Are Allowed To Access These Resources!</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
