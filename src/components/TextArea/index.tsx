import { TextareaHTMLAttributes } from "react";
import styles from "./styles.module.css";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  id: string;
};

export default function TextArea({ label, id, ...rest }: TextAreaProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      <textarea className={styles.textArea} name={id} id={id} {...rest} />
    </div>
  );
}
