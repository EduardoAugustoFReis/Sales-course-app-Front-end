import UpdateLessonForm from "@/components/Forms/UpdateLessonForm";
import styles from "./styles.module.css";

import Link from "next/link";

type EditLessonsPageProps = {
  params: Promise<{ courseId: string; moduleId: string; lessonId: string }>;
};

export default async function EditLessonsPage({
  params,
}: EditLessonsPageProps) {
  const { courseId, moduleId, lessonId } = await params;
  return (
    <section className={styles.content}>
      <Link
        className={styles.backLink}
        href={`/teacher/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`}
      >
        Voltar
      </Link>
      <div className={styles.formBox}>
        <h2>Editar módulo</h2>
        <UpdateLessonForm
          courseId={courseId}
          moduleId={moduleId}
          lessonId={lessonId}
        />
      </div>
    </section>
  );
}
