import Link from "next/link";
import styles from "./styles.module.css";
import { BackButton } from "@/components/BackButton";

type LessonsHeaderHeaderProps = {
  courseId: string;
  moduleId: string;
};

export default function LessonsHeader({
  courseId,
  moduleId,
}: LessonsHeaderHeaderProps) {
  return (
    <header className={styles.header}>
     <BackButton />

      <h2>Lições do Módulo</h2>

      <Link
        href={`/teacher/courses/${courseId}/modules/${moduleId}/lessons/new`}
        className={styles.newButton}
      >
        Criar nova Lição
      </Link>
    </header>
  );
}
