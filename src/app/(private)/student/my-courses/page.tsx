import { getMyPurchasedCourse } from "@/services/purchases/purchases"

export default async function MyCoursesPage () {
  const purchases = await getMyPurchasedCourse()
  
  return (
    <section>
      <h2>Meus Cursos</h2>
    </section>
  )
}