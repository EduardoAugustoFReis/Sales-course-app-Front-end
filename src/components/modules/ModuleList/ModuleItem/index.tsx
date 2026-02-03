import { IModule } from "@/types/module";
import styles from "./styles.module.css";
import Link from "next/link";

type Props = {
  module: IModule;
};

export default function ModuleItem({ module }: Props) {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <span className={styles.position}>{module.position}</span>
        <strong className={styles.title}>{module.title}</strong>
      </div>

      <div>
        <Link className={styles.link} href={`modules/${module.id}`}>
          Ver mais
        </Link>
      </div>
    </li>
  );
}
