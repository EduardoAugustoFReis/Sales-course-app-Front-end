import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export async function getCurrentUser(): Promise<IUser | null> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return null;
  }

  const res = await fetch(`${process.env.API_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json() as Promise<IUser>;
}
