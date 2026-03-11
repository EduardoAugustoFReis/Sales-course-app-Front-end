import styles from "./styles.module.css";
import { UserListDetail } from "@/types/user";
import { BackButton } from "@/components/BackButton";

type UserHeaderProps = {
  user: UserListDetail;
};

export default function UserHeader({ user }: UserHeaderProps) {
  return (
    <div className={styles['user-header']}>
      <BackButton />

      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <span className={styles["user-role"]}>{user.role}</span>
    </div>
  );
}
