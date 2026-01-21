"use client";
import styles from "./styles.module.css";
import { logoutAction } from "@/actions/auth/logout";

export default function UserMenu() {
  return (
    <form action={logoutAction}>
      <button className={styles.button} type="submit">Logout</button>
    </form>
  );
}
