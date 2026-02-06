import styles from "./styles.module.css";
import CourseDetailCard from "@/components/courses/CourseDetailCard";
import { getCoursesById } from "@/services/courses/courses";
import Link from "next/link";

type DetailsCoursePageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function DetailsCoursePage({
  params,
}: DetailsCoursePageProps) {
  const { courseId } = await params;
  const course = await getCoursesById(courseId);

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Link className={styles.linkCourses} href={`/teacher/courses`}>
          Voltar
        </Link>

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
