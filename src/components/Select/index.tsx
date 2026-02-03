import { SelectHTMLAttributes } from "react";
import styles from "./styles.module.css";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
  options: SelectOption[];
};

export function Select({ label, id, options, ...rest }: SelectProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>

      <select id={id} name={id} className={styles.select} {...rest}>
        {options.map((option) => (
          <option
            className={styles.option}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
