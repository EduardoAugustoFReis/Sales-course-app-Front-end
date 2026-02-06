import { getTeacherLessonsByModule } from "@/services/lessons/lesson";
import styles from "./styles.module.css";
import LessonsHeader from "@/components/lessons/LessonsHeader";
import LessonsList from "@/components/lessons/LessonsList";

type LessonsPageProps = {
  params: Promise<{ courseId: string; moduleId: string }>;
};

export default async function LessonsPage({ params }: LessonsPageProps) {
  const { courseId, moduleId } = await params;
  const lessons = await getTeacherLessonsByModule(courseId, moduleId);
  return (
    <section className={styles.page}>
     <LessonsHeader courseId={courseId} moduleId={moduleId}/>

     <LessonsList lessons={lessons.data}/>
    </section>
  );
}
