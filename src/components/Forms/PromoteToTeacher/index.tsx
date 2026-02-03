"use client";
import styles from "./styles.module.css";
import { useActionState } from "react";
import promoteToTeacherAction from "@/actions/admin/promote-to-teacher";
import FormError from "@/components/Helper/FormError";

type ActionState = {
  success: boolean;
  message?: string;
};

const initialState: ActionState = {
  success: false,
};

export default function PromoteToTeacher({ userId }: { userId: number }) {
  const [state, formAction] = useActionState(
    promoteToTeacherAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="userId" value={userId} />

      <button type="submit" className={styles.button}>
        Promover a professor
      </button>

      <FormError message={state.message} />
    </form>
  );
}
