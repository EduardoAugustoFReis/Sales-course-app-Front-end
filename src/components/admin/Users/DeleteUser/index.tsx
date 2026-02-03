"use client";
import deleteUserAction from "@/actions/admin/delete-user";
import FormError from "@/components/Helper/FormError";
import { FormEvent, useActionState } from "react";
import Button from "../../../ButtonDelete";

type DeleteUserButtonProps = {
  userId: number;
};

type ActionState = {
  success: boolean;
  message?: string;
};

const initialState: ActionState = {
  success: false,
};

export default function DeleteUser({ userId }: DeleteUserButtonProps) {
  const [state, formAction] = useActionState(deleteUserAction, initialState);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) {
      e.preventDefault();
    }
  }

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="hidden" name="userId" value={userId} />
      
      <Button title="Excluir usuário"/>
      
      <FormError message={state.message} />
    </form>
  );
}
