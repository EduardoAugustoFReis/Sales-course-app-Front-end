import Link from "next/link";
import styles from "./styles.module.css";
import { getTeacherModulesById } from "@/services/modules/module";
import ModuleDetailCard from "@/components/modules/ModuleDetailCard";
import DeleteModule from "@/components/modules/DeleteModule";

type ModuleDetailPageProps = {
  params: Promise<{
    courseId: string;
    moduleId: string;
  }>;
};

export default async function ModuleDetailPage({
  params,
}: ModuleDetailPageProps) {
  const { courseId, moduleId } = await params;

  const moduleDetails = await getTeacherModulesById(courseId, moduleId);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Link
          href={`/teacher/courses/${courseId}/modules`}
          className={styles.backLink}
        >
          Voltar para módulos
        </Link>

        <Link
          href={`/teacher/courses/${courseId}/modules/${moduleId}/lessons`}
          className={styles.lessonsLink}
        >
          Ver lições
        </Link>
      </header>

      <div className={styles.cardWrapper}>
        <ModuleDetailCard module={moduleDetails} />
      </div>

      <div className={styles.actions}>
        <Link
          href={`/teacher/courses/${courseId}/modules/${moduleId}/edit`}
          className={styles.editButton}
        >
          Editar módulo
        </Link>

        <DeleteModule courseId={courseId} moduleId={moduleId} />
      </div>
    </section>
  );
}
