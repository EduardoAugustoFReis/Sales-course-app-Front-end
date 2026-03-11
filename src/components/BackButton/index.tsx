"use client";
import styles from "./styles.module.css"
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button className={styles.backButton} onClick={() => router.back()}>
      Voltar
    </button>
  );
}