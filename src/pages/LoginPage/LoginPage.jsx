import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
