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
  const { userId } = auth()

  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    }
  }

  const { name, email } = validatedFields.data

  try {
    await sql`
    INSERT INTO customers (name, created_by, email)
    VALUES (${name}, ${userId}, ${email})
    `
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Customer.",
    }
  }

  revalidatePath("/customers")
  redirect("/customers")
}

export async function updateCustomer(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Customer.",
    }
  }

  const { name, email } = validatedFields.data

  try {
    await sql`
      UPDATE customers
      SET name = ${name}, email = ${email}
      WHERE id = ${id}
    `
  } catch (error) {
    return { message: "Database Error: Failed to Update Invoice." }
  }

  revalidatePath(`/customers/${id}`)
  redirect(`/customers/${id}`)
}

export async function deleteCustomer(id: string) {
  try {
    await sql`DELETE FROM customers WHERE id = ${id}`
  } catch (error) {
    return { message: "Database Error: Failed to Delete Customer." }
  }
  revalidatePath("/customers")
  redirect("/customers")
}
