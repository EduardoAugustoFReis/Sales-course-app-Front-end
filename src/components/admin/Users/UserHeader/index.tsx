import styles from "./styles.module.css";
import Link from "next/link";
import { UserListDetail } from "@/types/user";

type UserHeaderProps = {
  user: UserListDetail;
};

export default function UserHeader({ user }: UserHeaderProps) {
  return (
    <div className={styles['user-header']}>
      <Link href="/admin">← Voltar</Link>

      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <span className={styles['user-role']}>{user.role}</span>
    </div>
  );
}
