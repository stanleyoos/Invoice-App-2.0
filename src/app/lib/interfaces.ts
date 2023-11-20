export interface Invoice {
  id: string
  title: string
  amount: number
  date: string
  status: "pending" | "paid"
  customer_id: string
}

export interface Customer {
  id: string
  name: string
  email: string
  // address_id: string
}

export type CustomerField = Omit<Customer, "email">

export interface Address {
  id: string
  country: string
  city: string
  street: string
}
