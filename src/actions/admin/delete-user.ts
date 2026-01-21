"use server";

import { cookies } from "next/headers";

type DeleteUserActionState = {
  success: boolean;
  message?: string;
};

export default async function deleteUserAction(
  _: DeleteUserActionState,
  formData: FormData,
): Promise<DeleteUserActionState> {
  const userId = formData.get("userId")?.toString();

  const token = (await cookies()).get("token")?.value;

  const API_URL = process.env.API_URL;

  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return {
      success: false,
      message: "Erro ao deletar usuário.",
    };
  }

  return { success: true };
}
