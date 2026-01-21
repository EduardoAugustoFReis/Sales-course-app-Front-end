import styles from "./styles.module.css";
import PromoteToTeacher from "@/components/Forms/PromoteToTeacher";
import { UserListDetail } from "@/types/user";
import DeleteUser from "../DeleteUser";

type UserActionsProps = {
  user: UserListDetail;
};

export default function UserActions({ user }: UserActionsProps) {
  if (user.role !== "STUDENT") return null;

  return (
    <div className={styles['user-actions']}>
      <PromoteToTeacher userId={user.id} />
      <DeleteUser userId={user.id}/>
    </div>
  );
}
