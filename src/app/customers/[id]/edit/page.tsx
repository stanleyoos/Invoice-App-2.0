import React from "react"
import { fetchCustomerById } from "@/app/lib/data"

const CustomerEditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const customer = await fetchCustomerById(id)
  return (
    <>
      <h1 className=" text-xl text-center my-8 ">Name: {customer.name}</h1>
      <h1 className=" text-xl text-center my-8 ">Email: {customer.email}</h1>
    </>
  )
}

export default CustomerEditPage
