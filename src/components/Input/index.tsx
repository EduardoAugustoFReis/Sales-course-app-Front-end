import styles from "./styles.module.css";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export default function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} name={id} id={id} {...rest} />
    </div>
  );
}
