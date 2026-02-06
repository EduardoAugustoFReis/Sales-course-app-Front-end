"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionState = {
  success: boolean;
  message?: string;
};

export default async function deleteLessonAction(
  courseId: string,
  moduleId: string,
  lessonId: string,
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada",
    };
  }

  const response = await fetch(
    `${process.env.API_URL}/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao deletar lição",
    };
  }

  revalidatePath(`/teacher/courses/${courseId}/modules/${moduleId}/lessons`);

  redirect(`/teacher/courses/${courseId}/modules/${moduleId}/lessons`);
}
