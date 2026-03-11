import { BackButton } from "@/components/BackButton";
import styles from "./styles.module.css";
import CourseDetailCard from "@/components/courses/CourseDetailCard";
import PublishCourseButtom from "@/components/courses/PublishCourseButtom";
import { getTeacherCoursesById } from "@/services/courses/courses";
import Link from "next/link";

type DetailsCoursePageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function DetailsCoursePage({
  params,
}: DetailsCoursePageProps) {
  const { courseId } = await params;
  const course = await getTeacherCoursesById(courseId);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <BackButton />

        <PublishCourseButtom courseId={courseId}/>

        <Link
          className={styles.linkModule}
          href={`/teacher/courses/${courseId}/modules`}
        >
          Ver módulos
        </Link>
      </header>

      <div className={styles.cardBox}>
        <CourseDetailCard course={course} />
      </div>
    </section>
  );
}
