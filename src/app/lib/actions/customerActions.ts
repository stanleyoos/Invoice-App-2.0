"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { sql } from "@vercel/postgres"
import { auth } from "@clerk/nextjs"

const CustomerSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(7, { message: "Name with at least 7 characters is required" }),
  email: z.string().email(),
})

export type State = {
  errors?: {
    name?: string[]
    email?: string[]
  }
  message?: string | null
}

const CreateCustomer = CustomerSchema.omit({ id: true })

export async function createCustomer(prevState: State, formData: FormData) {
  // Validate form using Zod

  //const { userId } = auth()

  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  })

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    }
  }

  // Prepare data for insertion into the database
  const { name, email } = validatedFields.data

  //   new Date().toString()
  // Insert data into the database
  try {
    await sql`
    INSERT INTO customers (name, email)
    VALUES (${name}, ${email})
    `
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Customer.",
    }
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/customers")
  redirect("/customers")
}

// const UpdateInvoice = InvoiceSchema.omit({ id: true, date: true })

// export async function updateInvoice(
//   id: string,
//   prevState: State,
//   formData: FormData
// ) {
//   const validatedFields = UpdateInvoice.safeParse({
//     customerId: formData.get("customerId"),
//     title: formData.get("title"),
//     amount: formData.get("amount"),
//     status: formData.get("status"),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Update Invoice.",
//     }
//   }

//   const { customerId, title, amount, status } = validatedFields.data
//   const amountInCents = amount * 100

//   try {
//     await sql`
//       UPDATE invoices
//       SET customer_id = ${customerId}, title = ${title}, amount = ${amountInCents}, status = ${status}
//       WHERE id = ${id}
//     `
//   } catch (error) {
//     return { message: "Database Error: Failed to Update Invoice." }
//   }

//   revalidatePath("/invoices")
//   redirect("/invoices")
// }

// export async function deleteInvoice(id: string) {
//   try {
//     await sql`DELETE FROM invoices WHERE id = ${id}`
//   } catch (error) {
//     return { message: "Database Error: Failed to Delete Invoice." }
//   }
//   revalidatePath("/invoices")
//   redirect("/invoices")
// }
