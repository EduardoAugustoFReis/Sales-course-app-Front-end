import Link from "next/link";
import styles from "./styles.module.css";

import CreateModuleForm from "@/components/Forms/CreateModuleForm";

type NewModulePageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function NewModulePage({ params }: NewModulePageProps) {
  const { courseId } = await params;

  return (
    <section className={styles.content}>
      <Link className={styles.backLink} href={`/teacher/courses/${courseId}/modules`}>
        Voltar
      </Link>
      <div className={styles.formBox}>
        <h2>Criar módulo novo</h2>
        <CreateModuleForm courseId={courseId} />
      </div>
    </section>
  );
}
