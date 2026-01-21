import styles from "./styles.module.css";

import AccountForm from "@/components/Forms/AccountForm";

export default async function AccountPage() {

  return (
    <div className={styles.page}>
      <h2>Minha conta</h2>
      <AccountForm />
    </div>
  )
}