import styles from "./styles.module.css";
import { ILesson } from "@/types/lessons";
import ListItem from "./ListItem";

type LessonsListProps = {
  lessons: ILesson[];
};

export default function LessonsList({ lessons }: LessonsListProps) {
  if (lessons.length === 0) {
    return <p className={styles.empty}>Nenhuma aula criada ainda.</p>;
  }

  return (
    <ul className={styles.list}>
      {lessons.map((list) => (
        <ListItem key={list.id} lesson={list} />
      ))}
    </ul>
  );
}
