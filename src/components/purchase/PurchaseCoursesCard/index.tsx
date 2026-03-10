import Image from "next/image";
import styles from "./styles.module.css";
import { UserPurchase } from "@/types/purchase";
import Link from "next/link";

type PurchaseCoursesCardProps = {
  purchase: UserPurchase;
};

export default function PurchaseCoursesCard({
  purchase,
}: PurchaseCoursesCardProps) {
  const formattedDate = new Date(purchase.createdAt).toLocaleDateString(
    "pt-BR",
  );

  return (
    <div className={styles.card}>
      {purchase.course.imageUrl && (
        <Image
          src={purchase.course.imageUrl}
          alt={purchase.course.title}
          width={320}
          height={180}
          className={styles.image}
        />
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{purchase.course.title}</h3>

        <span className={styles.teacher}>
          Professor: {purchase.course.teacher.name}
        </span>

        <div className={styles.meta}>
          <span className={styles.status}>Status: {purchase.status}</span>

          <span className={styles.date}>Comprado em: {formattedDate}</span>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>R$ {purchase.price.toFixed(2)}</span>
          <Link
            className={styles.link}
            href={`my-courses/${purchase.course.id}`}
          >
            Ver conteúdo
          </Link>
        </div>
      </div>
    </div>
  );
}
