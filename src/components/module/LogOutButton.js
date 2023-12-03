"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "@/module/LogOutButton.module.css";

const LogOutButton = () => {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogOutButton;
