import { MyPurchasedCourses } from "@/types/purchase";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL não definida");
}

export async function getMyPurchasedCourse(): Promise<MyPurchasedCourses[]> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  const response = await fetch(`${API_URL}/purchases/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar cursos comprados");
  }

  return response.json();
}