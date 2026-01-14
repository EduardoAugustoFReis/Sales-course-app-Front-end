import { useFormStatus } from "react-dom";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export default function ButtonSubmit({
  title,
  type = "submit",
  ...rest
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button className={`button`} type={type} {...rest}>
      {pending ? "Carregando..." : title}
    </button>
  );
}
