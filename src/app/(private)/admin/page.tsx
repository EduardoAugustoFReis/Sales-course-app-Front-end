import RoleLayout from "../RoleLayout";
import { getUsers } from "@/services/users/users";
import { UsersTable } from "@/components/admin/Tables/UsersTable";
import styles from "./styles.module.css";

export default async function AdminPage() {
  const { data: users } = await getUsers();

  return (
    <RoleLayout allowedRole="ADMIN">
      <div className={styles.page}>
        <div className={styles.content}>
          <h2 className={styles.title}>Usuários</h2>

          <div className={styles.tableWrapper}>
            <UsersTable users={users} />
          </div>
        </div>
      </div>
    </RoleLayout>
  );
}
