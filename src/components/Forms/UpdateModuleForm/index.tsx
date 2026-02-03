"use client";

import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import { FormState, UpdateModuleField } from "@/types/form";
import FieldFormError from "@/components/Helper/FieldFormError";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";
import updateModuleAction from "@/actions/teacher/modules/update-module";

const initialState: FormState<UpdateModuleField> = {
  success: false,
};

export default function UpdateModuleForm({ courseId, moduleId }: { courseId: string, moduleId: string }) {
  const actionWithCourseId = updateModuleAction.bind(null, courseId, moduleId);
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

      <ButtonSubmit title="Editar Módulo" />

      <FormError message={state.message} />
    </form>
  );
}
