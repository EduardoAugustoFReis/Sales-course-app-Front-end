"use server";

import { FormState, PurchaseCourseField } from "@/types/form";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PurchaseCourseAction(
  courseId: string,
  _: FormState<PurchaseCourseField>,
  formData: FormData,
): Promise<FormState<PurchaseCourseField>> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return {
      success: false,
      message: "Sessão expirada, faça o login novamente",
    };
  }

  const API_URL = process.env.API_URL;

  const cardNumber = formData.get("cardNumber")?.toString().trim();
  const holderName = formData.get("holderName")?.toString().trim();
  const expMonth = formData.get("expMonth")?.toString().trim();
  const expYear = formData.get("expYear")?.toString().trim();
  const cvv = formData.get("cvv")?.toString().trim();

  if (!cardNumber || !holderName || !expMonth || !expYear || !cvv) {
    return {
      success: false,
      message: "Todos os campos são obrigatórios",
    };
  }

  const payload = {
    courseId: Number(courseId),
    cardNumber,
    holderName,
    expMonth,
    expYear,
    cvv,
  };

  if (cardNumber.length < 16) {
    return {
      success: false,
      message: "Número do cartão inválido",
    };
  }

  if (cvv.length < 3) {
    return {
      success: false,
      message: "CVV inválido",
    };
  }

  const response = await fetch(`${API_URL}/purchases/course/${courseId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    return {
      success: false,
      message: error.message ?? "Erro ao comprar curso",
    };
  }

  revalidatePath("/student");
  redirect("/student");
}
