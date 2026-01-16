"use server";

import { cookies } from "next/headers";

type PromoteToTeacherState = {
  success: boolean;
  message?: string;
};

export default async function promoteToTeacherAction(
  _: PromoteToTeacherState,
  formData: FormData
): Promise<PromoteToTeacherState> {
  const userId = formData.get("userId")?.toString();

  const token = (await cookies()).get("token")?.value;

  const API_URL = process.env.API_URL;

  const response = await fetch(
    `${API_URL}/users/${userId}/promote-to-teacher`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return {
      success: false,
      message: "Erro ao promover usuário",
    };
  }

  return { success: true };
}
