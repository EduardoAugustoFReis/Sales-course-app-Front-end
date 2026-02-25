import styles from "./styles.module.css";

import ModuleList from "@/components/modules/ModuleList";
import ModulesHeader from "@/components/modules/ModulesHeader";
import { getTeacherModulesByCourse } from "@/services/modules/module";
import Link from "next/link";

type ModulesPageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function ModulesPage({ params }: ModulesPageProps) {
  const { courseId } = await params;
  const modules = await getTeacherModulesByCourse(courseId);

  return (
    <section className={styles.page}>

      <Link className={styles.link} href={`/teacher/courses/${courseId}`}>
        Voltar
      </Link>

      <ModulesHeader courseId={courseId} />

      <ModuleList modules={modules} />
    </section>
  );
}
