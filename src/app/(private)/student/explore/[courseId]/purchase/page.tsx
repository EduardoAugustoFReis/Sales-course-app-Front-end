import styles from "./styles.module.css";
import PurchaseForm from "@/components/Forms/PurchaseForm";
import PurchaseSummary from "@/components/purchase/PurchaseSumary";
import { getPublicCourseById } from "@/services/courses/courses";
import Link from "next/link";

type PurchasePageProps = {
  params: Promise<{ courseId: string }>;
};

export default async function PurchasePage({ params }: PurchasePageProps) {
  const { courseId } = await params;
  const course = await getPublicCourseById(courseId);
  return (
    <section className={styles.pageContainer}>
      <header className={styles.header}>
          <Link href={`/student/explore/${courseId}`}>Voltar</Link>
          <h2>Compra do curso</h2>
      </header>
      <div className={styles.actionBox}>
      <PurchaseForm courseId={courseId} />
      <PurchaseSummary course={course} />
      </div>
    </section>
  );
}
