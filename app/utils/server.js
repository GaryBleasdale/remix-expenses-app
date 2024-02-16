import prisma from "~/utils/prismaClient";

export async function addExpense({ title, amount, dateFormatted }) {
  try {
    await prisma.expense.create({
      data: {
        title: title,
        amount: amount,
        dateAdded: dateFormatted,
        date: new Date(),
      },
    });
    console.log("Created a new expense");
  } catch (error) {
    console.error("Error creating expense: ", error);
  }
}

export async function getExpenses() {
  const expenses = await prisma.expense.findMany();
  return expenses;
}
