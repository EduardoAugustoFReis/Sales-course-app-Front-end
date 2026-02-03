import { IModule } from "@/types/module";
import styles from "./styles.module.css";
import ModuleItem from "./ModuleItem";

type Props = {
  modules: IModule[];
};

export default function ModuleList({ modules }: Props) {
  if (modules.length === 0) {
    return <p className={styles.empty}>Nenhum módulo criado ainda.</p>;
  }

  return (
    <ul className={styles.list}>
      {modules.map((module) => (
        <ModuleItem key={module.id} module={module} />
      ))}
    </ul>
  );
}
