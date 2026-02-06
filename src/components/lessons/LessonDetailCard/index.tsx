import { ILesson } from "@/types/lessons";
import styles from "./styles.module.css";

type LessonDetailCardProps = {
  lesson: ILesson;
  courseId: string;
  moduleId: string;
};

export default function LessonDetailCard({
  lesson,
}: LessonDetailCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.position}>Aula #{lesson.position}</span>
        <h2 className={styles.title}>{lesson.title}</h2>
      </header>

      <div className={styles.meta}>
        <span>Duração: {lesson.duration} min</span>
      </div>

      <div className={styles.video}>
        <strong>Vídeo</strong>
        <p>{lesson.videoUrl}</p>
      </div>
    </article>
  );
}
