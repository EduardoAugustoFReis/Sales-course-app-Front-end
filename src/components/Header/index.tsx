import styles from "./styles.module.css";
import Link from "next/link";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Logo</h2>
      <nav className={styles.nav}>
        <Link href={`/admin`}>Compras</Link>
        <Link href={`/admin`}>Cursos</Link>
        <Link href={`/account`}>Minha conta </Link>
        <UserMenu />
      </nav>
    </header>
  );
}
