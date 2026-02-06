"use client";

import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import { FormState, UpdateCourseFields } from "@/types/form";
import FieldFormError from "@/components/Helper/FieldFormError";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";
import updateLessonAction from "@/actions/teacher/lessons/update-lesson";

const initialState: FormState<UpdateCourseFields> = {
  success: false,
};

export default function UpdateLessonForm({
  courseId,
  moduleId,
  lessonId,
}: {
  courseId: string;
  moduleId: string;
  lessonId: string;
}) {
  const actionWithCourseId = updateLessonAction.bind(
    null,
    courseId,
    moduleId,
    lessonId,
  );
  const [state, formAction] = useActionState(actionWithCourseId, initialState);

  return (
    <form className="form" action={formAction}>
      <Input
        label="Título da Lição"
        type="text"
        id="title"
        placeholder="Digite o título da Lição"
      />

      <FieldFormError message={state.fieldErrors?.title} />

      <Input
        label="URL do vídeo"
        type="text"
        id="videoUrl"
        placeholder="Digite a URL do vídeo"
      />

      <FieldFormError message={state.fieldErrors?.videoUrl} />

      <Input
        label="Duração da lição em minutos"
        type="number"
        id="duration"
        placeholder="Digite a duração da lição em minutos"
      />

      <FieldFormError message={state.fieldErrors?.duration} />

      <ButtonSubmit title="Editar Lição" />

      <FormError message={state.message} />
    </form>
  );
}
