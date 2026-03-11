import { BackButton } from "@/components/BackButton";
import styles from "./styles.module.css";
import CourseDetailsCard from "@/components/explore/CourseDetailsCard";
import { getPublicCourseById } from "@/services/courses/courses";
import Link from "next/link";

type CourseDetailsPageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { courseId } = await params;

  const course = await getPublicCourseById(courseId);

  return (
    <section className={styles.pageContainer}>
      <div className={styles.header}>
        <BackButton />
      </div>
      <CourseDetailsCard course={course} />
    </section>
  );
}
