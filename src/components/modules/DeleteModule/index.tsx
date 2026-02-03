"use client";

import deleteModuleAction from "@/actions/teacher/modules/delete-module";
import ButtonDelete from "@/components/ButtonDelete";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";

type DeleteModuleProps = {
  courseId: string;
  moduleId: string;
}

type ActionState = {
  success: boolean;
  message?: string;
}

const initialState: ActionState = {
  success: false
}

export default function DeleteModule({ courseId, moduleId }: DeleteModuleProps) {
  const actionWithCourseId = deleteModuleAction.bind(null, courseId, moduleId);

  const [state, formAction] = useActionState(actionWithCourseId, initialState);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir este módulo? Essa ação não pode ser desfeita.",
    );

    if (!confirmed) {
      event.preventDefault();
    }
  }

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <ButtonDelete title="Deletar Módulo" />
      <FormError message={state.message} />
    </form>
  );
}
