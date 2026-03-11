import { BackButton } from "@/components/BackButton";
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
      <div className="backButton">
        <BackButton />
      </div>

      <ModulesHeader courseId={courseId} />

      <ModuleList modules={modules} />
    </section>
  );
}
