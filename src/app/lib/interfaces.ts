export interface Invoice {
  id: string
  title: string
  amount: number
  date: string
  status: "pending" | "paid"
}
