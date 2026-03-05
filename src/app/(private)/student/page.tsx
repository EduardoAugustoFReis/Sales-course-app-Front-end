import RoleLayout from "../RoleLayout";
import Link from "next/link";
import styles from "./styles.module.css";

export default function StudentPage() {
  return (
    <RoleLayout allowedRole="STUDENT">
      <div className={styles.container}>
        <h2 className={styles.title}>Bem-Vindo</h2>
        <p className={styles.subtitle}>
          O que você deseja fazer hoje?
        </p>

        <div className={styles.actions}>
          <Link href="student/my-courses" className={styles.cardButtonMyCourses}>
            Meus cursos
          </Link>

          <Link href="student/explore" className={styles.cardButtonMyExplorer}>
            Explorar cursos
          </Link>
        </div>
      </div>
    </RoleLayout>
  );
}