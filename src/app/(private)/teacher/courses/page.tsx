import styles from "./styles.module.css";

import CourseCard from "@/components/courses/CourseCard";
import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { getTeacherCourses } from "@/services/courses/courses";
import Link from "next/link";

export default async function CoursesPage() {
  const courses = await getTeacherCourses();
  const user = await getCurrentUser();
  return (
    <section className={styles.page}>
      <header className={styles.header}>

        <h2>Bem vindo {user?.name}</h2>
        
        <div className={styles.yourCoursesAndNewBox}>
          <h3>Seus cursos</h3>
          <Link className={styles.newCourseLink} href="courses/new">
            Criar novo curso
          </Link>
        </div>

      </header>

      {courses.data.length === 0 ? (
        <p className={styles.empty}>Nenhum curso criado ainda</p>
      ) : (
        <ul className={styles.list}>
          {courses.data.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </ul>
      )}
    </section>
  );
}
