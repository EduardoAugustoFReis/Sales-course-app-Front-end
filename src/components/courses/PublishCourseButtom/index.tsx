"use client";

import PublishCourseAction from "@/actions/teacher/courses/publish-course";
import ButtonSubmit from "@/components/Forms/ButtonSubmit";
import FormError from "@/components/Helper/FormError";
import { useActionState } from "react";

type PublishCourseProps = {
  courseId: string
}

type ActionState = {
  success: boolean;
  message?: string;
}

const initialState: ActionState = {
  success: false
}

export default function PublishCourseButtom({courseId}: PublishCourseProps) {
  const actionWithCourseId = PublishCourseAction.bind(null, courseId)
  const [state, formAction] = useActionState(actionWithCourseId, initialState);

  return (
    <form action={formAction}>
      <ButtonSubmit title="Publicar Curso" />
      <FormError message={state.message}/>
    </form>
  )
}