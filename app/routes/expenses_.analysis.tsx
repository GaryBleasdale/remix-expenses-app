import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import type { LinksFunction } from "@remix-run/node";
import expensesCSS from "~/styles/expenses.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesCSS },
];

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
];

export default function Analysis() {
  return (
    <main>
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
      <Chart expenses={DUMMY_EXPENSES} />
    </main>
  );
}
