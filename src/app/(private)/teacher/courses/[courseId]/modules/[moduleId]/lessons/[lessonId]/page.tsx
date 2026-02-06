import LessonDetailCard from "@/components/lessons/LessonDetailCard";
import styles from "./styles.module.css";

import { getTeacherLessonsById } from "@/services/lessons/lesson";
import Link from "next/link";
import DeleteLesson from "@/components/lessons/DeleteLesson";

type LessonsDetailsPageProps = {
  params: Promise<{ courseId: string; moduleId: string; lessonId: string }>;
};

export default async function LessonsDetailsPage({
  params,
}: LessonsDetailsPageProps) {
  const { courseId, moduleId, lessonId } = await params;
  const lesson = await getTeacherLessonsById(courseId, moduleId, lessonId);
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Link
          href={`/teacher/courses/${courseId}/modules`}
          className={styles.backLink}
        >
          Voltar para Lições
        </Link>
      </header>
      <div className={styles.cardWrapper}>
        <LessonDetailCard
          lesson={lesson}
          courseId={courseId}
          moduleId={moduleId}
        />
      </div>

      <div className={styles.actions}>
        <Link
          href={`/teacher/courses/${courseId}/modules/${moduleId}/lessons/${lesson.id}/edit`}
          className="button"
        >
          Editar
        </Link>

        <DeleteLesson
          courseId={courseId}
          moduleId={moduleId}
          lessonId={lesson.id}
        />
      </div>
    </section>
  );
}
