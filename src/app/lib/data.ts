import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore } from "next/cache"
import { Customer, CustomerField, Invoice } from "./interfaces"
import { auth } from "@clerk/nextjs"

export async function fetchFilteredInvoices(query: string) {
  noStore()
  const { userId } = auth()
  try {
    const data = await sql`
            SELECT invoices.id, invoices.amount, invoices.date, customers.name , invoices.status, invoices.title
            FROM invoices
            JOIN customers ON invoices.customer_id = customers.id
            WHERE invoices.added_by = ${userId} AND (
                customers.name ILIKE ${`%${query}%`} OR
                customers.email ILIKE ${`%${query}%`} OR
                invoices.title ILIKE ${`%${query}%`} OR
                invoices.date::text ILIKE ${`%${query}%`} OR
                invoices.status ILIKE ${`%${query}%`}
            )
            ORDER BY DATE DESC
            `

    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch invoices.")
  }
}

export async function fetchInvoiceById(id: string) {
  noStore()
  try {
    const data = await sql<Invoice>`
      SELECT * FROM INVOICES
      WHERE INVOICES.ID = ${id} 
    `
    const res = data.rows.map((invoice) => ({
      ...invoice,

      amount: invoice.amount / 100,
    }))

    return res[0]
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch invoice by id.")
  }
}

export async function fetchCustomerById(id: string) {
  noStore()
  try {
    const data = await sql<Customer>`
      SELECT * FROM CUSTOMERS
      WHERE CUSTOMERS.ID = ${id} 
    `

    return data.rows[0]
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch invoice by id.")
  }
}

export async function fetchCustomers() {
  noStore()

  try {
    const data = await sql<Customer>`
    SELECT
    id,
    name,
    email
  FROM customers
  ORDER BY name ASC`

    const customers = data.rows
    return customers
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch all customers.")
  }
}

export async function fetchTotalAmount() {
  noStore()
  const { userId } = auth()
  try {
    const data = await sql`
      SELECT SUM(amount) 
      FROM invoices
      WHERE invoices.added_by = ${userId}
    `
    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch total amount.")
  }
}
