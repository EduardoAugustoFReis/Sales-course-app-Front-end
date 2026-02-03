import Header from "@/components/Header";
import { getCurrentUser } from "@/services/auth/getCurrentUser";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type PrivateLayoutProps = {
  children: ReactNode;
};

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const user = await getCurrentUser();

  if (!user) redirect("/");

  return (
    <>
      <Header />
      {children}
    </>
  );
}
