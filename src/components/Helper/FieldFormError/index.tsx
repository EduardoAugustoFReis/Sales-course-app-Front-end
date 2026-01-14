import styles from "./styles.module.css";

type FieldFormErrorProps = {
  message?: string;
};

export default function FieldFormError({ message }: FieldFormErrorProps) {
  if (!message) return null;

  return (
    <div className={styles.container}>
      <span className={styles.span}>{message}</span>
    </div>
  );
}
