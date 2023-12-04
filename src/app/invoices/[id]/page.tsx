import React from "react"
import { fetchCustomerById, fetchInvoiceById } from "@/app/lib/data"
import Link from "next/link"
import { IoMdArrowForward } from "react-icons/io"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { dateFormat } from "@/app/utils/format"
import { TopPartNav } from "../../../components/ui/TopPartNav"

const InvoicePage = async ({ params }: { params: { id: string } }) => {
  const invoice = await fetchInvoiceById(params.id)
  const customer = await fetchCustomerById(invoice.customer_id)

  return (
    <>
      <TopPartNav
        backHref={`/invoices`}
        editHref={`/invoices/${invoice.id}/edit`}
        title={invoice.title}
      />

      <div className="flex flex-col items-center gap-5">
        <Link href={`/customers/${invoice.customer_id}`}>
          <Card className="w-80">
            <CardHeader>
              <CardDescription>invoice for</CardDescription>
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
