import React from "react"
import { fetchInvoices, fetchTotalAmount } from "../lib/data"
import Invoice from "../../components/Invoice"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import { amountFormat } from "../utils/format"
import { CreateInvoice } from "../../components/ui/invoices/buttons"
import { auth } from "@clerk/nextjs"

const InvoicesPage = async () => {
  const { userId } = auth()
  const invoices = await fetchInvoices(userId!)
  const [{ sum }] = await fetchTotalAmount()

  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Invoices</h1>
      <div className="flex justify-center mb-9">
        <CreateInvoice />
      </div>
      {invoices.length == 0 ? (
        <>
          <h1 className=" text-4xl text-center my-8 text-sky-500">Invoices</h1>
        </>
      ) : (
        <Table className="max-w-3xl mx-auto ">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="">Title</TableHead>
              <TableHead className="hidden sm:block ">Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:block">Date</TableHead>
              <TableHead className="text-right ">Amount</TableHead>
              <TableHead className="w-1"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <Invoice key={invoice.id} invoice={invoice} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{amountFormat(sum)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </>
  )
}
export default InvoicesPage
