import Link from "next/link";
import styles from "./styles.module.css";
import { CourseListItem } from "@/types/courses";
import Image from "next/image";

type ExploreCourseCardProps = {
  course: CourseListItem;
};

export default function ExploreCourseCard({ course }: ExploreCourseCardProps) {
  return (
    <div className={styles.card}>
      {course.imageUrl ? (
        <Image
          height={200}
          width={200}
          src={course.imageUrl}
          alt={course.title}
          className={styles.image}
        />
      ) : (
        <div className={styles.imagePlaceholder}>Sem imagem</div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>

        {course.description && (
          <p className={styles.description}>
            {course.description.length > 80
              ? course.description.slice(0, 80) + "..."
              : course.description}
          </p>
        )}

        <div className={styles.footer}>
          <span className={styles.price}>R$ {course.price.toFixed(2)}</span>

          <Link href={`explore/${course.id}`} className={styles.button}>
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
