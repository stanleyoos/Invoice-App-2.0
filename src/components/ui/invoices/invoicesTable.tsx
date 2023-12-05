import React from 'react'
import {amountFormat} from '../../../app/utils/format'
import Invoice from '@/components/Invoice'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../table"


const InvoicesTable = ({invoices, sum}: {invoices: any, sum: number}) => {
  return (
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
            {invoices.map((invoice:any) => (
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
  )
}

export default InvoicesTable