import { getStudentLesson } from "@/services/lessons/lesson";
import styles from "./styles.module.css"; 

type LessonDetailsPageProps = {
  params: Promise<{ courseId: string; moduleId: string; lessonId: string }>;
};

export default async function LessonDetailsPage({
  params,
}: LessonDetailsPageProps) {
  const { courseId, moduleId, lessonId } = await params;

  const lesson = await getStudentLesson(courseId, moduleId, lessonId);

  return (
    <div className={styles.lessonContainer}>
      <h1 className={styles.lessonTitle}>{lesson.title}</h1>

      <p className={styles.lessonDuration}>
        Duração: {lesson.duration} min
      </p>

      {lesson.videoUrl && (
        <div className={styles.videoWrapper}>
          <video
            src={lesson.videoUrl}
            controls
            className={styles.videoPlayer}
          />
        </div>
      )}

      <div className={styles.lessonContent}>
      </div>
    </div>
  );
}