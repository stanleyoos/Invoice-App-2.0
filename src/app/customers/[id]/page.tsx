import React from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { fetchCustomerById } from "@/app/lib/data"
import TopPartNav from "@/components/ui/TopPartNav"

const CustomerPage = async ({ params }: { params: { id: string } }) => {
  const customer = await fetchCustomerById(params.id)

  return (
    <>
      <TopPartNav
        backHref={`/customers`}
        editHref={`/customers/${customer.id}/edit`}
        title={customer.name}
      />
      <Card className="w-80 mx-auto">
        <CardHeader>
          <CardDescription>mail</CardDescription>
          <CardTitle className="mb-3">{customer.email}</CardTitle>
        </CardHeader>
      </Card>

      <h1 className=" text-3xl  text-center my-8 ">
        Invoice List by customer id
      </h1>
    </>
  )
}

export default CustomerPage
