import { BackButton } from "@/components/BackButton";
import styles from "./styles.module.css";

import PurchaseCoursesCard from "@/components/purchase/PurchaseCoursesCard";
import { getMyPurchasedCourse } from "@/services/purchases/purchases";

export default async function MyCoursesPage() {
  const { purchases } = await getMyPurchasedCourse();

  return (
    <section className={styles.pageContainer}>
      <div className="backButton">
        <BackButton />
      </div>
      <h2 className={styles.title}>Meus Cursos</h2>
      <div className={styles.cardBox}>
        {purchases.map((purchase) => {
          return <PurchaseCoursesCard key={purchase.id} purchase={purchase} />;
        })}
      </div>
    </section>
  );
}
