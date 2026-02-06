import Link from "next/link";
import styles from "./styles.module.css";

import CreateLessonForm from "@/components/Forms/CreateLessonForm";

type NewLessonsPageProps = {
  params: Promise<{ courseId: string; moduleId: string }>;
};

export default async function NewLessonsPage({ params }: NewLessonsPageProps) {
  const { courseId, moduleId } = await params;
  return (
    <section className={styles.content}>
      <Link
        className={styles.backLink}
        href={`/teacher/courses/${courseId}/modules/${moduleId}/lessons`}
      >
        Voltar
      </Link>

      <div className={styles.formBox}>
        <h2>Criar lições</h2>
        <CreateLessonForm courseId={courseId} moduleId={moduleId} />
      </div>
    </section>
  );
}
