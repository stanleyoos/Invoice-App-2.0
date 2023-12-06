export interface Invoice {
  id: string;
  name: string;
  amount: number;
  date: string;
  status: "pending" | "paid";
  title: string;
  customer_id: string;
}

export interface Customer {
  id: string;
  createdBy: string;
  name: string;
  email: string;
  // address_id: string
}

export type CustomerField = Omit<Customer, "email">;

export interface Address {
  id: string;
  country: string;
  city: string;
  street: string;
}
