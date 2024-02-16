import { Outlet, Link, useLoaderData, useNavigation } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import { FaPlus, FaDownload } from "react-icons/fa";
import { getExpenses } from "~/utils/server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

export async function loader() {
  const expenses = await getExpenses();
  return expenses;
}

export default function ExpensePage() {
  const navigation = useNavigation();
  const expenses = useLoaderData();

  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <a href="/raw">
            <FaDownload />
            Export Expenses
          </a>
          <Link to="./add">
            <FaPlus />
            Add Expense
          </Link>
        </section>

        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}
