import LoginForm from "@/components/Forms/LoginForm";
import styles from "./page.module.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="pageContainer">
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className="title">Bem vindo!</h1>
          <h2 className="subTitle">Faça o seu Login</h2>
        </header>

        <LoginForm />

        <footer className={styles.footer}>
          <Link href={`/signup`} className="linkForm">Não tem uma conta? crie já</Link>
        </footer>
      </main>
    </div>
  );
}
