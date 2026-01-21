"use client";

import styles from "./styles.module.css";

import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import { useActionState } from "react";
import updateUserDataAction from "@/actions/users/update-user-data";
import FormError from "@/components/Helper/FormError";
import FieldFormError from "@/components/Helper/FieldFormError";
import { FormState, UpdateAccountFields } from "@/types/form";

const initialState: FormState<UpdateAccountFields> = {
  success: false,
};

export default function AccountForm() {
  const [state, formAction] = useActionState(
    updateUserDataAction,
    initialState,
  );

  return (
    <div className={styles.content}>
      <h4>Atualize seus dados cadastrais caso queira</h4>
      <form className="form" action={formAction}>
        <Input
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite seu novo nome"
        />
        <FieldFormError message={state.fieldErrors?.name} />

        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu novo e-mail"
        />

        <FieldFormError message={state.fieldErrors?.email} />

        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua nova senha"
        />
        <FieldFormError message={state.fieldErrors?.password} />

        <ButtonSubmit title="Atualizar" />

        <FormError message={state.message} />
      </form>
    </div>
  );
}
