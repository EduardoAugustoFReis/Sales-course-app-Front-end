"use client";

import { signupAction } from "@/actions/auth/signup";
import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import { FormState, SignupFields } from "@/types/form";
import FieldFormError from "@/components/Helper/FieldFormError";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";

const initialState: FormState<SignupFields> = {
  success: false,
};

export default function SignupForm() {
  const [state, formAction] = useActionState(signupAction, initialState);

  return (
    <form action={formAction} className="form">
      <Input
        label="Nome"
        id="name"
        name="name"
        type="text"
        placeholder="Digite seu nome"
      />

      <FieldFormError message={state.fieldErrors?.name} />

      <Input
        label="E-mail"
        id="email"
        name="email"
        type="email"
        placeholder="Digite seu e-mail"
      />

      <FieldFormError message={state.fieldErrors?.email} />

      <Input
        label="Senha"
        id="password"
        name="password"
        type="password"
        placeholder="Digite sua senha"
      />

      <FieldFormError message={state.fieldErrors?.password} />

      <FormError message={state.message} />

      <ButtonSubmit title="Cadastrar" />
    </form>
  );
}
