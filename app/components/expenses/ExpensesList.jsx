import ExpenseListItem from "./ExpenseListItem";
import { useNavigation } from "@remix-run/react";

function ExpensesList({ expenses }) {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <p>Loading...</p>}
      {navigation.state === "idle" && (
        <ol id="expenses-list">
          {expenses.map((expense) => (
            <li key={expense.id}>
              <ExpenseListItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
              />
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default ExpensesList;
