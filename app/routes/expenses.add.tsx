import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { useNavigate, redirect, useActionData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { addExpense } from "~/utils/server";
import serverValidation from "~/utils/serverValidation";

export async function action({ request }) {
  const data = await request.formData();
  const title = data.get("title");
  const amount = Number.parseInt(data.get("amount"));
  const dateRaw = data.get("date");
  const dateFormatted = new Date(dateRaw);
  const expense = { title, amount, dateFormatted };
  try {
    const validationResult = serverValidation(expense);
    if (validationResult) throw new Error(validationResult);
  } catch (error) {
    return json({
      message: "Error submitting form.  Please try again",
    });
  }
  await addExpense(expense);
  return redirect("/expenses");
}

export default function ExpenseAdd() {
  const actionData = useActionData();

  const navigate = useNavigate();
  function onClose() {
    navigate("..");
  }

  return (
    <main>
      <Modal onClose={onClose}>
        <ExpenseForm />
        {actionData && <p>{actionData.message}</p>}
      </Modal>
    </main>
  );
}
