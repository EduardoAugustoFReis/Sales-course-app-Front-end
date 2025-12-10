import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const token = (await cookies()).get("token")?.value;

  if (!token) return redirect("/login");

  let user;

  try {
    user = await api("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    // Token inválido ou expirado
    return redirect("/login");
  }

  return (
    <section>
      <div>
        <h3>Bem vindo! {user.name}</h3>
      </div>

      <main>{children}</main>
    </section>
  );
}
