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
} from "@/components/ui/table"
import { amountFormat } from "../utils/format"

const InvoicesPage = async () => {
  const invoices = await fetchInvoices()
  const [{ sum }] = await fetchTotalAmount()

  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Invoices</h1>
      {/* {invoices.map((invoice) => {
        return <Invoice key={invoice.id} invoice={invoice} />
      })} */}

      <Table className="max-w-3xl mx-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            {/* className="w-[100px]" */}
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
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
    </>
  )
}
export default InvoicesPage
