import styles from "./styles.module.css";
import Link from "next/link";
import { PublicCourseDetail } from "@/types/courses";

type CourseDetailsCardProps = {
  course: PublicCourseDetail;
};

export default function CourseDetailsCard({ course }: CourseDetailsCardProps) {
  return (
    <div className={styles.card}>
      {course.imageUrl && (
        <img
          src={course.imageUrl}
          alt={course.title}
          className={styles.image}
        />
      )}

      <div className={styles.content}>
        <h1 className={styles.title}>{course.title}</h1>

        <span className={styles.teacher}>Professor: {course.teacher.name}</span>

        {course.description && (
          <p className={styles.description}>{course.description}</p>
        )}

        <div className={styles.stats}>
          <span>{course.stats.modules} módulos</span>
          <span>{course.stats.lessons} aulas</span>
          <span>{course.stats.duration} min</span>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>R$ {course.price.toFixed(2)}</span>

          <Link href={`${course.id}/purchase`} className="button">
            Comprar curso
          </Link>
        </div>
      </div>
    </div>
  );
}
