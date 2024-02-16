import Modal from "~/components/util/Modal";
import ExpenseListItem from "~/components/expenses/ExpenseListItem";
import { useNavigate, useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
];

export async function loader({ params }: LoaderFunctionArgs) {
  const currentId = params.id;
  const expense = DUMMY_EXPENSES.find((expense) => expense.id === currentId);
  return expense;
}

export default function ExpenseDetails() {
  const navigate = useNavigate();
  const { id, title, amount } = useLoaderData();
  function onClose() {
    navigate("..");
  }
  return (
    <Modal onClose={onClose}>
      <ExpenseListItem title={title} amount={amount} id={id} />
    </Modal>
  );
}
