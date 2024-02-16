export default function serverValidation({ title, amount, dateFormatted }) {
  const validationErrors = {};

  if (!title) {
    validationErrors.title = "Title is required";
    return validationErrors;
  }
  if (!amount || amount < 0) {
    validationErrors.amount = "Amount is required";
    return validationErrors;
  }
  if (!dateFormatted) {
    validationErrors.dateFormatted = "Date is required";
    return validationErrors;
  }
}
