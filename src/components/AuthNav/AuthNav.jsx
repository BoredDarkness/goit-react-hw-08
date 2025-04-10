import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
