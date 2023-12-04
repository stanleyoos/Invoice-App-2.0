import React from "react"
import { fetchCustomers } from "../lib/data"
import Customer from "../../components/Customer"
import Link from "next/link"
import CreateCustomerButton from "../../components/ui/buttons/createButton"

const CustomersPage = async () => {
  const customers = await fetchCustomers()

  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Customers</h1>
      <div className="flex justify-center mb-9">
        <CreateCustomerButton href="/customers/create" name="Add customer" />
      </div>
      {customers.length == 0 ? (
        <>
          <h1 className=" text-2xl text-center mt-8 mb-4 text-sky-500">
            You do not have any customers
          </h1>
          <h1 className=" text-lg text-center  ">
            Click Add customer to create new one
          </h1>
        </>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center ">
          {customers.map((customer) => (
            <Link key={customer.id} href={`/customers/${customer.id}`}>
              <Customer customer={customer} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default CustomersPage
