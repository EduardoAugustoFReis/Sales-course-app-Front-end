import Link from "next/link";
import styles from "./styles.module.css";

import CreateModuleForm from "@/components/Forms/CreateModuleForm";
import { BackButton } from "@/components/BackButton";

type NewModulePageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function NewModulePage({ params }: NewModulePageProps) {
  const { courseId } = await params;

  return (
    <section className={styles.content}>
      <div className="backButton">
        <BackButton />
      </div>

      <div className={styles.formBox}>
        <h2>Criar módulo novo</h2>
        <CreateModuleForm courseId={courseId} />
      </div>
    </section>
  );
}
