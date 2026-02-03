import styles from "./styles.module.css";

import UpdateCourseForm from "@/components/Forms/UpdateCourseForm";
import Link from "next/link";

type EditCoursePageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function EditCoursePage({ params }: EditCoursePageProps) {
  const { courseId } = await params;
  return (
    <div className={styles.content}>
      <Link className={styles.backLink} href={`/teacher/courses/${courseId}`}>
        Voltar
      </Link>

      <div className={styles.formBox}>
        <h2>Edite os dados do seu curso</h2>
        <UpdateCourseForm courseId={courseId} />
      </div>
    </div>
  );
}
