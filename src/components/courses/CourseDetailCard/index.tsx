import { CourseDetail } from "@/types/courses";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import DeleteCourse from "../DeleteCourse";

type CourseDetailCardProps = {
  course: CourseDetail;
};

const statusClassMap = {
  DRAFT: styles.draft,
  PUBLISHED: styles.published,
} as const;

export default function CourseDetailCard({ course }: CourseDetailCardProps) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>{course.title}</h1>
        <span className={`${styles.status} ${statusClassMap[course.status]}`}>
          {course.status}
        </span>
      </header>

      {course.imageUrl && (
        <Image
          src={course.imageUrl}
          alt={`Capa do curso ${course.title}`}
          width={800}
          height={400}
          className={styles.image}
          priority
        />
      )}

      <p className={styles.price}>
        {course.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      {course.description && (
        <p className={styles.description}>{course.description}</p>
      )}

      <div className={styles.sectionRow}>
        <p className={styles.meta}>
          Criado em {new Date(course.createdAt).toLocaleDateString("pt-BR")}
        </p>
        <p className={styles.meta}>Professor: {course.teacher.name}</p>
      </div>

      <footer className={`${styles.sectionRow} ${styles.footer}`}>
        <Link href={`${course.id}/edit`}>Editar curso</Link>
        <DeleteCourse courseId={course.id} />
      </footer> 
    </section>
  );
}
