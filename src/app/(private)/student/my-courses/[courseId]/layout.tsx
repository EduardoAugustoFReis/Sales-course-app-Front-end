import { getCourseContent } from "@/services/courses/courses";
import styles from "./styles.module.css";

import { ReactNode } from "react";
import Link from "next/link";
import { BackButton } from "@/components/BackButton";

type CourseLayoutProps = {
  children: ReactNode;
  params: Promise<{ courseId: string }>;
};

export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  const { courseId } = await params;
  const course = await getCourseContent(courseId);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.backButton}>
        <BackButton />
        </div>

        {course.modules.map((module) => {
          return (
            <div className={styles.module} key={module.id}>
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <div className={styles.lessonLists}>
                {module.lessons.map((lesson) => {
                  return (
                    <Link
                      key={lesson.id}
                      href={`/student/my-courses/${courseId}/${module.id}/lessons/${lesson.id}`}
                      className={styles.lessonItem}
                    >
                      {lesson.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
