import UpdateModuleForm from "@/components/Forms/UpdateModuleForm";
import styles from "./styles.module.css";
import Link from "next/link";

type EditModulePageProps = {
  params: Promise<{ courseId: string; moduleId: string }>;
};

export default async function EditModulePage({ params }: EditModulePageProps) {
  const { courseId, moduleId } = await params;
  return (
    <section className={styles.content}>
      <Link
        className={styles.backLink}
        href={`/teacher/courses/${courseId}/modules/${moduleId}`}
      >
        Voltar
      </Link>
      <div className={styles.formBox}>
        <h2>Editar módulo</h2>
        <UpdateModuleForm courseId={courseId} moduleId={moduleId} />
      </div>
    </section>
  );
}
