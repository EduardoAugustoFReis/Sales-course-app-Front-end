import styles from "./styles.module.css";
import { UserListDetail } from "@/types/user";

type UserBasicInfoProps = {
  user: UserListDetail;
};

export default function UserBasicInfo({ user }: UserBasicInfoProps) {
  return (
    <div className={styles['user-card']}>
      <h3>Dados básicos</h3>

      <p>
        <strong>ID:</strong> {user.id}
      </p>

      <p>
        <strong>Função:</strong> {user.role}
      </p>

      <p>
        <strong>Criado em:</strong>{" "}
        {new Date(user.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
