import { loginAction } from "@/actions/login";

export default function LoginForm() {
  return (
    <form action={loginAction}>
      <input type="text" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
  );
}
