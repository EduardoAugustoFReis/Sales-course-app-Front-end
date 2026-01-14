"use client";

import { loginAction } from "@/actions/login";
import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import { FormState } from "@/types/form";
import { LoginFields } from "@/types/auth";
import FormError from "@/components/Helper/FormError";
import FieldFormError from "@/components/Helper/FieldFormError";
import { useActionState } from "react";

const initialState: FormState<LoginFields> = {
  success: false,
};

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form className="form" action={formAction}>
      <Input
        label="E-mail:"
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu E-mail"
      />

      <FieldFormError message={state.fieldErrors?.email} />

      <Input
        label="Senha:"
        type="password"
        id="password"
        name="password"
        placeholder="Digite sua senha"
      />

      <FieldFormError message={state.fieldErrors?.password} />

      <FormError message={state.message} />

      <ButtonSubmit title="Logar" />
    </form>
  );
}
