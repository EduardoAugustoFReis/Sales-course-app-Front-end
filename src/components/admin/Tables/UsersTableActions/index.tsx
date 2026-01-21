import styles from "./styles.module.css";

import { UserListDetail } from "@/types/user";
import Link from "next/link";

type UsersTableActionsProps = {
  user: UserListDetail;
};

export default function UsersTableActions({ user }: UsersTableActionsProps) {
  return (
    <div className={styles.action}>
      <Link href={`/admin/users/${user.id}`}>Ver mais</Link>
    </div>
  );
}