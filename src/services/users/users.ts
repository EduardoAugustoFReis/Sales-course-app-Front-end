import { PaginatedUsers, UserListDetail } from "@/types/user";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL não definida");
}

export async function getUsers(): Promise<PaginatedUsers> {
  const token = (await cookies()).get("token")?.value;

  if (!token) throw new Error("Não autorizado");

  const response = await fetch(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Erro ao buscar usuários");

  return response.json();
}

export async function getUsersById(userId: string): Promise<UserListDetail> {
  const token = (await cookies()).get("token")?.value;

  if (!token) throw new Error("Não autorizado");

  const response = await fetch(`${API_URL}/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.log("STATUS:", response.status);
    const text = await response.text();
    console.log("BODY:", text);
    throw new Error("Erro ao buscar dados do usuário");
  }

  const user = await response.json();

  return user;
}
