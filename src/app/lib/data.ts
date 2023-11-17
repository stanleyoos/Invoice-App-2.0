import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore } from "next/cache"
import { Invoice } from "./interfaces"

export async function fetchInvoices() {
  noStore()
  try {
    const data = await sql`
            SELECT invoices.amount, invoices.date, customers.name , invoices.status, invoices.title
            FROM invoices
            JOIN customers ON invoices.customer_id = customers.id
            ORDER BY DATE DESC
        `

    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch invoices.")
  }
}

export async function fetchTotalAmount() {
  noStore()
  try {
    const data = await sql`
      SELECT SUM(amount) 
      FROM invoices
    `

    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch total amount.")
  }
}
