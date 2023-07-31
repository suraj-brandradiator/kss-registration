import React, { useState } from "react";
import styles from "../styles/form.module.css";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const authenticateUser = (email, password) => {
    const validCredentials = {
      email: "admin@gmail.com",
      password: "Admin@123",
    };

    return (
      email === validCredentials.email && password === validCredentials.password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAuthenticated = authenticateUser(email, password);

    if (isAuthenticated) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["inner-container"]}>
          <label for="email" className={styles["label"]}>
            Email I'd :{" "}
          </label>
          <input
            className={styles["input-container"]}
            type="email"
            name="username"
            placeholder="email"
            required={true}
            value={email}
            onChange={handleEmailChange}
          />
          <label for="password" className={styles["label"]}>
            Password :{" "}
          </label>
          <input
            className={styles["input-container"]}
            type="password"
            name="password"
            placeholder="password"
            cvalue={password}
            onChange={handlePasswordChange}
          />
          <div className={styles["button-container"]}>
            <button type="submit" className={styles["button"]}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
