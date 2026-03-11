import { BackButton } from "@/components/BackButton";
import styles from "./styles.module.css";

import UpdateCourseForm from "@/components/Forms/UpdateCourseForm";

type EditCoursePageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function EditCoursePage({ params }: EditCoursePageProps) {
  const { courseId } = await params;
  return (
    <div className={styles.content}>
      <div className="backButton">
        <BackButton />
      </div>

      <div className={styles.formBox}>
        <h2>Edite os dados do seu curso</h2>
        <UpdateCourseForm courseId={courseId} />
      </div>
    </div>
  );
}
