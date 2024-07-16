import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Xử lý đăng ký ở đây
    navigate("/login");
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupForm}>
        <h2 className={styles.title}>Register System</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              className={styles.input}
              placeholder="Enter Fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="rePassword" className={styles.label}>
              Confirm Password:
            </label>
            <input
              type="password"
              id="rePassword"
              className={styles.input}
              placeholder="Confirm Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="birthday" className={styles.label}>
              Birthday:
            </label>
            <input
              type="date"
              id="birthday"
              className={styles.input}
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={styles.registerButton}
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
