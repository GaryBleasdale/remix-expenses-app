const jsonData = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

export async function loader({ request }) {
  return jsonData;
}
