import React from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import { fetchCustomerById, fetchInvoicesByCustomer } from "@/app/lib/data"
import { TopPartNav } from "@/components/ui/TopPartNav"
import InvoicesTable from "@/components/ui/invoices/invoicesTable"

const CustomerPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const customer = await fetchCustomerById(id)
  const invoicesByCustomer = await fetchInvoicesByCustomer(id)
  const sum = invoicesByCustomer.reduce((acc, curr) => acc += curr.amount  , 0)

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

      
      {invoicesByCustomer.length == 0 ? (<h1 className=" sm:text-3xl text-xl mb-10  text-center my-8 ">
        You do not have any invoices for this customer
      </h1>) : (<>
        <h1 className=" text-xl sm:text-3xl mb-10  text-center my-8 ">
        Invoice List by Customer
      </h1>
        <InvoicesTable invoices={invoicesByCustomer} sum={sum} />
      </>)}
    </>
  )
}

export default CustomerPage
