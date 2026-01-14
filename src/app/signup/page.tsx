import SignupForm from "@/components/Forms/SignupForm";
import styles from "./page.module.css";
import Link from "next/link";

export default function PageSignup() {
  return (
    <div className="pageContainer">
      <main className={styles.main}>
        <header className={styles.header}>
          <h2 className={styles.title}>Cria sua conta</h2>
        </header>

        <SignupForm />

        <footer className={styles.footer}>
          <Link href={`/`} className="linkForm">
            Já tem uma conta? faça o login
          </Link>
        </footer>
      </main>
    </div>
  );
}
