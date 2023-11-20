"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { sql } from "@vercel/postgres"

const InvoiceSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(7, { message: "Title with at least 7 characters is required" }),
  customerId: z.string({
    invalid_type_error: "Please select a customer",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
})

export type State = {
  errors?: {
    customerId?: string[]
    amount?: string[]
    status?: string[]
    title?: string[]
  }
  message?: string | null
}

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true })

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod

  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
    title: formData.get("title"),
  })

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    }
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status, title } = validatedFields.data
  const amountInCents = amount * 100
  const date = new Date().toISOString().split("T")[0]
  //   new Date().toString()
  // Insert data into the database
  try {
    await sql`
    INSERT INTO invoices (customer_id, title, amount, status, date)
    VALUES (${customerId}, ${title}, ${amountInCents}, ${status}, ${date})
    `
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    }
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/invoices")
  redirect("/invoices")
}
