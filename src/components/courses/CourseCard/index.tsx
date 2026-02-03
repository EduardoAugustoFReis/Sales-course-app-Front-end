import { CourseListItem } from "@/types/courses";
import styles from "./styles.module.css";
import Link from "next/link";

type CourseCardProps = {
  course: CourseListItem;
};

const statusClassMap = {
  DRAFT: styles.draft,
  PUBLISHED: styles.published,
} as const;

export default function CourseCard({ course }: CourseCardProps) {
  return (
   <li className={styles.card}>
  <header className={styles.header}>
    <strong className={styles.title}>{course.title}</strong>

    <span className={`${styles.status} ${statusClassMap[course.status]}`}>
      <strong>Status</strong>: {course.status}
    </span>
  </header>

  <p className={styles.price}>
    {course.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}
  </p>

  <Link className={styles.link} href={`/teacher/courses/${course.id}`}>
    Ver detalhes →
  </Link>
</li>

  );
}
