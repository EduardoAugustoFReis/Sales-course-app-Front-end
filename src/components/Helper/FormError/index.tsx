import styles from "./styles.module.css";

type FormErrorProps = {
  message?: string;
};

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className={styles.container}>
      <span className={styles.span}>{message}</span>
    </div>
  );
}
