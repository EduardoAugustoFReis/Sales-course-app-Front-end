import styles from "./styles.module.css";
import Link from "next/link";
import { ILesson } from "@/types/lessons";

type ListItemProps = {
  lesson: ILesson;
};

export default function ListItem({ lesson }: ListItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.position}>{lesson.position}</span>
        <strong className={styles.title}>{lesson.title}</strong>
      </div>

      <div>
        <Link className={styles.link} href={`lessons/${lesson.id}`}>
          Ver mais
        </Link>
      </div>
    </li>
  );
}
