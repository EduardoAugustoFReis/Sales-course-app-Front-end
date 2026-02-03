"use client";

import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import { CreateModuleField, FormState } from "@/types/form";
import FieldFormError from "@/components/Helper/FieldFormError";
import FormError from "@/components/Helper/FormError";
import createModuleAction from "@/actions/teacher/modules/create-module";
import { useActionState } from "react";

const initialState: FormState<CreateModuleField> = {
  success: false,
};

export default function CreateModuleForm({ courseId }: { courseId: string }) {
  const actionWithCourseId = createModuleAction.bind(null, courseId);
  const [state, formAction] = useActionState(actionWithCourseId, initialState);

  return (
    <form className="form" action={formAction}>
      <Input
        label="Título do módulo"
        type="text"
        id="title"
        placeholder="Digite o título do Módulo"
      />

      <FieldFormError message={state.fieldErrors?.title} />

      <ButtonSubmit title="Criar Módulo" />

      <FormError message={state.message} />
    </form>
  );
}
