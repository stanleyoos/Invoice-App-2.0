"use client"

import React from "react"
import { useFormState } from "react-dom"
import { Customer } from "../../../app/lib/interfaces"
import { updateCustomer } from "../../../app/lib/actions/customerActions"
import Link from "next/link"
import { Button } from "../button"

const UpdateCustomerForm = ({ customer }: { customer: Customer }) => {
  const initialState = { message: "", errors: {} }
  const updateCustomerWithId = updateCustomer.bind(null, customer.id)
  const [state, dispatch] = useFormState(updateCustomerWithId, initialState)
  return (
    <form action={dispatch} className="max-w-3xl mx-auto">
      <div className="rounded-md  p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Enter Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter the name"
                defaultValue={customer.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 "
                aria-describedby="name-error"
              />
            </div>
            {state.errors?.name ? (
              <div
                id="name-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.name.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Enter Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter the Email"
                defaultValue={customer.email}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 "
                aria-describedby="email-error"
              />
            </div>
            {state.errors?.email ? (
              <div
                id="title-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.email.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4 ">
        <Link href="/customers">
          <Button variant="secondary">Cancel</Button>
        </Link>
        <Button variant="secondary" type="submit">
          Update Customer
        </Button>
      </div>
    </form>
  )
}

export default UpdateCustomerForm
