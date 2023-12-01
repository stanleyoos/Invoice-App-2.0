import React from "react"
import { fetchCustomers } from "../lib/data"
import Customer from "../../components/Customer"
import Link from "next/link"
import CreateCustomerButton from "../../components/ui/buttons/createButton"

const ClientsPage = async () => {
  const customers = await fetchCustomers()

  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Customers</h1>
      <div className="flex justify-center mb-9">
        <CreateCustomerButton href="/customers/create" name="Add customer" />
      </div>
      <div className="flex flex-wrap gap-5 justify-center ">
        {customers.map((customer) => (
          <Link key={customer.id} href={`/customers/${customer.id}/edit`}>
            <Customer customer={customer} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default ClientsPage
