"use client";

import { useActionState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import promoteToTeacherAction from "@/actions/admin/promote-to-teacher";
import FormError from "@/components/Helper/FormError";

type ActionState = {
  success: boolean;
  message?: string;
};

const initialState: ActionState = {
  success: false,
};

export default function PromoteToTeacher({ userId }: { userId: number }) {
  const [state, formAction] = useActionState(
    promoteToTeacherAction,
    initialState
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="userId" value={userId} />

      <ButtonSubmit title="Promover a professor" />

      <FormError message={state.message} />
    </form>
  );
}
