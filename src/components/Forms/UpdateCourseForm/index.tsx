"use client";

import Input from "@/components/Input";
import ButtonSubmit from "../ButtonSubmit";
import TextArea from "@/components/TextArea";
import { Select } from "@/components/Select";
import { useActionState } from "react";
import { FormState, UpdateCourseFields } from "@/types/form";
import FieldFormError from "@/components/Helper/FieldFormError";
import FormError from "@/components/Helper/FormError";
import updateCourseAction from "@/actions/teacher/courses/update-course";

const initialState: FormState<UpdateCourseFields> = {
  success: false,
};

export default function UpdateCourseForm({ courseId }: { courseId: string }) {
  const actionWithCourseId = updateCourseAction.bind(null, courseId);

  const [state, formAction] = useActionState(actionWithCourseId, initialState);
  return (
    <form className="form" action={formAction}>
      <Input
        label="Título do curso"
        type="text"
        id="title"
        placeholder="Digite o nome do curso"
      />

      <FieldFormError message={state.fieldErrors?.title} />

      <Input
        label="Preço do curso"
        type="number"
        id="price"
        placeholder="Digite o preço do curso"
      />

      <FieldFormError message={state.fieldErrors?.price} />

      <Input
        label="Url do curso"
        type="url"
        name="imageUrl"
        id="imageUrl"
        placeholder="URL da imagem de capa"
      />

      <FieldFormError message={state.fieldErrors?.imageUrl} />

      <TextArea label="Descrição do curso" id="description" />
      <FieldFormError message={state.fieldErrors?.description} />

      <Select
        label="Status do curso"
        id="status"
        name="status"
        required
        defaultValue={`DRAFT`}
        options={[
          { value: "DRAFT", label: "Rascunho" },
          { value: "PUBLISHED", label: "Publicado" },
        ]}
      />
      <FieldFormError message={state.fieldErrors?.status} />

      <ButtonSubmit title="Editar" />

      <FormError message={state.message} />
    </form>
  );
}
