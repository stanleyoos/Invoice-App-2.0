import React from "react"
import { fetchCustomers } from "../lib/data"
import Customer from "../../components/Customer"

const ClientsPage = async () => {
  const customers = await fetchCustomers()

  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Customers</h1>
      <div className="flex flex-wrap">
        {customers.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </div>
    </>
  )
}

export default ClientsPage
