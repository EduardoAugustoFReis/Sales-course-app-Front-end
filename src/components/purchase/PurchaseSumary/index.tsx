import Image from "next/image";
import styles from "./styles.module.css";
import { PublicCourseDetail } from "@/types/courses";

type PurchaseSummaryProps = {
  course: PublicCourseDetail;
};

export default function PurchaseSummary({ course }: PurchaseSummaryProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Resumo da compra</h3>

      {course.imageUrl && (
        <Image
          height={200}
          width={200}
          src={course.imageUrl}
          alt={course.title}
          className={styles.image}
        />
      )}

      <div className={styles.info}>
        <h4 className={styles.title}>{course.title}</h4>

        <span className={styles.teacher}>Professor: {course.teacher.name}</span>

        <div className={styles.meta}>
          <span>{course.stats.modules} módulos</span>
          <span>{course.stats.lessons} aulas</span>
          <span>{course.stats.duration} min</span>
        </div>
      </div>

      <div className={styles.priceBox}>
        <span>Total: </span>
        <strong>R$ {course.price.toFixed(2)}</strong>
      </div>
    </div>
  );
}
