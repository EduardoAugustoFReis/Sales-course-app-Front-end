import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type PrivateLayoutProps = {
  children: ReactNode;
};

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const token = (await cookies()).get("token")?.value;

  if (!token) redirect("/");

  const user = await getCurrentUser(token);

  if (!user) redirect("/");

  return <>{children}</>;
}
