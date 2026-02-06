import Link from "next/link";
import styles from "./styles.module.css";
import { ILesson } from "@/types/lessons";

type LessonCardProps = {
  lesson: ILesson;
  courseId: string;
  moduleId: string;
};

export default function LessonCard({
  lesson,
  courseId,
  moduleId,
}: LessonCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.position}>#{lesson.position}</span>
        <h3 className={styles.title}>{lesson.title}</h3>
      </div>

      <div className={styles.meta}>
        <span>
          <strong>Duração: </strong> {lesson.duration} min
        </span>
      </div>

      <footer className={styles.footer}>
        <Link
          href={`/teacher/courses/${courseId}/modules/${moduleId}/lessons/${lesson.id}`}
          className={styles.link}
        >
          Ver detalhes →
        </Link>
      </footer>
    </article>
  );
}
