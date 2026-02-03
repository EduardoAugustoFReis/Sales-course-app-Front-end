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
      <Link className={styles.linkCourses} href={`/teacher/courses`}>
        Voltar
      </Link>
      <div className={styles.cardBox}>
        <CourseDetailCard course={course} />
      </div>
      <div className={styles.footer}>
        <Link
          className={styles.linkModule}
          href={`/teacher/courses/${courseId}/modules`}
        >
          Ver módulos deste curso
        </Link>
      </div>
    </section>
  );
}
