const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    createdBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    createdBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
    name: "Lee Robinson",
    email: "lee@robinson.com",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    createdBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
    name: "Hector Simpson",
    email: "hector@simpson.com",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    createdBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
    name: "Steven Tey",
    email: "steven@tey.com",
  },
]

const invoices = [
  {
    customer_id: customers[0].id,
    title: "Invoice #1",
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
    addedBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
  },
  {
    customer_id: customers[1].id,
    title: "Tech stuff",
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
    addedBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
  },
  {
    customer_id: customers[2].id,
    title: "Office",
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
    addedBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
  },
  {
    customer_id: customers[3].id,
    title: "Games",
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
    addedBy: "user_2YXNvmqwaDRHloVNzoWt3d2scFf",
  },
]

module.exports = { invoices, customers }
