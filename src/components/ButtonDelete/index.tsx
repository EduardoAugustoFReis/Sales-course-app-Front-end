import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import { useFormStatus } from "react-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export default function ButtonDelete({
  title,
  type = "submit",
  ...rest
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} type={type} {...rest}>
      {pending ? "Excluindo" : title}
    </button>
  );
}
