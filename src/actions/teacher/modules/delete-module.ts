"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionStateProps = {
  success: boolean;
  message?: string;
};

export default async function deleteModuleAction(
  courseId: string,
  moduleId: string,
  _: ActionStateProps,
  formData: FormData,
): Promise<ActionStateProps> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada",
    };
  }

  const response = await fetch(
    `${process.env.API_URL}/courses/${courseId}/modules/${moduleId}`,
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
      message: error.message ?? "Erro ao deletar módulo",
    };
  }

  revalidatePath(`/teacher/courses/${courseId}/modules`);

  redirect(`/teacher/courses/${courseId}/modules`);
}
