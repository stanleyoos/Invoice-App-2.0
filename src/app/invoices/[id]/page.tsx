import React from "react"
import { fetchCustomerById, fetchInvoiceById } from "@/app/lib/data"
import Link from "next/link"
import { IoMdArrowRoundBack, IoMdArrowForward } from "react-icons/io"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { dateFormat } from "@/app/utils/format"

const InvoicePage = async ({ params }: { params: { id: string } }) => {
  const invoice = await fetchInvoiceById(params.id)
  const customer = await fetchCustomerById(invoice.customer_id)

  console.log(customer)

  console.log(invoice)
  return (
    <>
      <div className="flex justify-between">
        <Link href={`/invoices`} className="text-5xl flex items-center">
          <IoMdArrowRoundBack />
        </Link>
        <h1 className=" text-4xl sm:text-6xl text-center my-8 text-sky-500">
          {invoice.title}
        </h1>
        <Link className="my-auto" href={`/invoices/${invoice.id}/edit`}>
          <Button variant={"secondary"}>Edit</Button>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Link href={`/customers/${invoice.customer_id}`}>
          <Card className="w-80">
            <CardHeader>
              <CardDescription>created for</CardDescription>
              <CardTitle className="flex justify-between">
                {customer.name}
                <IoMdArrowForward />
              </CardTitle>
            </CardHeader>
          </Card>
        </Link>
        <Card className="w-80">
          <CardHeader>
            <CardDescription>status</CardDescription>
            <CardTitle>{invoice.status}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-80">
          <CardHeader>
            <CardDescription>amount</CardDescription>
            <CardTitle>{invoice.amount} $</CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-80">
          <CardHeader>
            <CardDescription>date</CardDescription>
            <CardTitle>{dateFormat(invoice.date)}</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}

export default InvoicePage
