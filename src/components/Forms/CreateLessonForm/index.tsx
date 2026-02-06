"use client";

import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import { CreateLessonField, FormState } from "@/types/form";
import FieldFormError from "@/components/Helper/FieldFormError";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";
import createLessonAction from "@/actions/teacher/lessons/create-lesson";

const initialState: FormState<CreateLessonField> = {
  success: false,
};

export default function CreateLessonForm({
  courseId,
  moduleId,
}: {
  courseId: string;
  moduleId: string;
}) {
  const actionWithCourseId = createLessonAction.bind(null, courseId, moduleId);
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
        label="Duração da lição"
        type="number"
        id="duration"
        placeholder="Digite a duração da lição em minutos"
      />

      <FieldFormError message={state.fieldErrors?.duration} />

      <ButtonSubmit title="Criar Lição" />

      <FormError message={state.message} />
    </form>
  );
}
