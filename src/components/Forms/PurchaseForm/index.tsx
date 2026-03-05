"use client";
import PurchaseCourseAction from "@/actions/purchase/purchase-course";
import Input from "@/components/Input";
import { FormState, PurchaseCourseField } from "@/types/form";
import { useActionState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import FormError from "@/components/Helper/FormError";
import FieldFormError from "@/components/Helper/FieldFormError";

type PurchaseFormProps = {
  courseId: string;
};

const initialState: FormState<PurchaseCourseField> = {
  success: false,
};

export default function PurchaseForm({ courseId }: PurchaseFormProps) {
  const formActionWithCourseId = PurchaseCourseAction.bind(null, courseId);
  const [state, formAction] = useActionState(
    formActionWithCourseId,
    initialState,
  );

  return (
    <form className="form" action={formAction}>
      <Input
        id="cardNumber"
        label="Número do cartão"
        placeholder="0000000000000000"
        inputMode="numeric"
      />
      <FieldFormError message={state.fieldErrors?.cardNumber} />

      <Input
        id="holderName"
        label="Titular do cartão"
        placeholder="Digite o nome do titular do cartão"
      />
      <FieldFormError message={state.fieldErrors?.holderName} />

      <Input
        id="expMonth"
        label="Mês que expira"
        placeholder="MM"
        inputMode="numeric"
      />
      <FieldFormError message={state.fieldErrors?.expMonth} />

      <Input
        id="expYear"
        label="Ano que expira"
        placeholder="AAAA"
        inputMode="numeric"
      />
      <FieldFormError message={state.fieldErrors?.expYear} />

      <Input
        id="cvv"
        label="Código de segurança"
        placeholder="123"
        inputMode="numeric"
        type="password"
      />

      <FieldFormError message={state.fieldErrors?.cvv} />

      <ButtonSubmit title="Comprar" />

      <FormError message={state.message} />
    </form>
  );
}
