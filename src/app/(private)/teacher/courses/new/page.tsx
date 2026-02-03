import Link from "next/link";
import styles from "./styles.module.css";

import CreateCourseForm from "@/components/Forms/CreateCourseForm";

export default function NewCoursesPage() {
  return (
    <div className={styles.content}>
      <Link className={styles.backLink} href={`/teacher/courses`}>
        Voltar
      </Link>
      <div className={styles.formBox}>
        <h2>Crie seu curso</h2>
        <CreateCourseForm />
      </div>
    </div>
  );
}
