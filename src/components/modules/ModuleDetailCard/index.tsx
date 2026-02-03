import { ModuleDetail } from "@/types/module";
import styles from "./styles.module.css";

type ModuleDetailCardProps = {
  module: ModuleDetail;
};

export default function ModuleDetailCard({ module }: ModuleDetailCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.courseInfo}>
          <span className={styles.courseTitle}>{module.course.title}</span>
          <span
            className={`${styles.courseStatus} ${
              module.course.status === "PUBLISHED"
                ? styles.published
                : styles.draft
            }`}
          >
            {module.course.status === "PUBLISHED" ? "Publicado" : "Rascunho"}
          </span>
        </div>

        <span className={styles.badge}>Módulo {module.position}</span>
      </header>

      <h2 className={styles.moduleTitle}>{module.title}</h2>

      <div className={styles.meta}>
        <span>
          Professor: <strong>{module.course.teacher.name}</strong>
        </span>
      </div>
    </article>
  );
}
