"use client";

import deleteCourseAction from "@/actions/teacher/courses/delete-course";
import ButtonDelete from "@/components/ButtonDelete";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";

type DeleteCourseProps = {
  courseId: number;
};

type ActionState = {
  success: boolean;
  message?: string;
};

const initialState: ActionState = {
  success: false,
};

export default function DeleteCourse({ courseId }: DeleteCourseProps) {
  const actionWithCourseId = deleteCourseAction.bind(null, courseId);

  const [state, formAction] = useActionState(actionWithCourseId, initialState);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir este curso? Essa ação não pode ser desfeita.",
    );

    if (!confirmed) {
      event.preventDefault();
    }
  }

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <ButtonDelete title="Deletar Curso" />
      <FormError message={state.message} />
    </form>
  );
}
