import React from "react"
import { fetchCustomerById } from "@/app/lib/data"
import Link from "next/link"
import { IoMdArrowRoundBack } from "react-icons/io"

const CustomerEditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const customer = await fetchCustomerById(id)
  return (
    <>
      <div className="flex justify-between">
        <Link href={"/customers"} className="text-5xl flex items-center">
          <IoMdArrowRoundBack />
        </Link>
        <h1 className=" text-3xl md:text-6xl text-center my-8 text-sky-500">
          Update Customer
        </h1>
        <div className="w-12"></div>
      </div>
      <h1 className=" text-xl text-center my-8 text-sky-500">with ID: {id}</h1>
      <h1 className=" text-xl text-center my-8 text-sky-500">
        Name: {customer.name}
      </h1>
      <h1 className=" text-xl text-center my-8 text-sky-500">
        Email: {customer.email}
      </h1>
    </>
  )
}

export default CustomerEditPage
