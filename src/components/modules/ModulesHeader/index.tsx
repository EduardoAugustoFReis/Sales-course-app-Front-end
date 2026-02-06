import Link from "next/link";
import styles from "./styles.module.css";

type ModulesHeaderProps = {
  courseId: string;
};

export default function ModulesHeader({ courseId }: ModulesHeaderProps) {
  return (
    <header className={styles.header}>
      <h2>Módulos do curso</h2>

      <Link
        href={`/teacher/courses/${courseId}/modules/new`}
        className={styles.newButton}
      >
        Criar novo módulo
      </Link>
    </header>
  );
}
