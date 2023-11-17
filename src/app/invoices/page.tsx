import React from "react"
import { fetchInvoices } from "../lib/data"
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

const InvoicesPage = async () => {
  const invoices = await fetchInvoices()

  return (
    <>
      <h1 className=" text-6xl text-sky-500">Invoices</h1>
      {/* {invoices.map((invoice) => {
        return <Invoice key={invoice.id} invoice={invoice} />
      })} */}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
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
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}
export default InvoicesPage
