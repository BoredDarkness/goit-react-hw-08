import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.userMenu}>
      <span className={styles.username}>Welcome, {user.name}</span>
      <button className={styles.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
