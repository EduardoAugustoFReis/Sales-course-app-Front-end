import LoginForm from "@/components/Forms/LoginForm";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="title">Bem vindo!</h1>
        <h2 className="subTitle">Faça o seu Login</h2>
        <LoginForm />
      </main>
    </div>
  );
}
