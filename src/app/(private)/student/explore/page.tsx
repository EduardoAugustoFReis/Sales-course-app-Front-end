import styles from "./styles.module.css";

import ExploreCourseCard from "@/components/explore/CoursesCard";
import { getPublicCourse } from "@/services/courses/courses";
import Link from "next/link";

export default async function ExplorePage() {
  const courses = await getPublicCourse();

  return (
    <section className={styles.page}>
      <section className={styles.header}>
        <Link href={`/student`}>Voltar</Link>
        <h2>Explore nossos cursos</h2>
        <p>
          Descubra conteúdos criados para acelerar sua carreira e desenvolver
          novas habilidades.
        </p>
      </section>

      <section className={styles.list}>
        {courses.data.length > 0 ? (
          courses.data.map((course) => (
            <ExploreCourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className={styles.empty}>Nenhum curso disponível no momento.</p>
        )}
      </section>
    </section>
  );
}
