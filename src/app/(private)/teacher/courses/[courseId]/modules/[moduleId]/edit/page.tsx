import UpdateModuleForm from "@/components/Forms/UpdateModuleForm";
import styles from "./styles.module.css";
import Link from "next/link";
import { BackButton } from "@/components/BackButton";

type EditModulePageProps = {
  params: Promise<{ courseId: string; moduleId: string }>;
};

export default async function EditModulePage({ params }: EditModulePageProps) {
  const { courseId, moduleId } = await params;
  return (
    <section className={styles.content}>
      <div className="backButton">
        <BackButton />
      </div>
      <div className={styles.formBox}>
        <h2>Editar módulo</h2>
        <UpdateModuleForm courseId={courseId} moduleId={moduleId} />
      </div>
    </section>
  );
}
