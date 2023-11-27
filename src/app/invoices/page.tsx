import React from "react"
import { fetchFilteredInvoices, fetchTotalAmount } from "../lib/data"
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
import Search from "../../components/Search"

const InvoicesPage = async ({
  searchParams,
}: {
  searchParams: {
    query?: string
  }
}) => {
  const query = searchParams?.query || ""
  const invoices = await fetchFilteredInvoices(query)
  const [{ sum }] = await fetchTotalAmount()

  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Invoices</h1>
      <div className="flex justify-center mb-9">
        <CreateInvoice />
      </div>
      <Search placeholder="Search for invoices..." />
      {invoices.length == 0 ? (
        <>
          <h1 className=" text-2xl text-center mt-8 mb-4 text-sky-500">
            You do not have any invoices
          </h1>
          <h1 className=" text-lg text-center  ">
            Click Add invoice to create new one
          </h1>
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
