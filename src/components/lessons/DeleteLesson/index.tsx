"use client";

import deleteLessonAction from "@/actions/teacher/lessons/delete-lesson";
import ButtonDelete from "@/components/ButtonDelete";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";

type DeleteLessonProps = {
  courseId: string;
  moduleId: string;
  lessonId: string;
}

type ActionState = {
  success: boolean;
  message?: string;
}

const initialState: ActionState = {
  success: false
}

export default function DeleteLesson({ courseId, moduleId, lessonId }: DeleteLessonProps) {
  const actionWithCourseId = deleteLessonAction.bind(null, courseId, moduleId, lessonId);

  const [state, formAction] = useActionState(actionWithCourseId, initialState);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta lição? Essa ação não pode ser desfeita.",
    );

    if (!confirmed) {
      event.preventDefault();
    }
  }

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <ButtonDelete title="Deletar Lição" />
      <FormError message={state.message} />
    </form>
  );
}
