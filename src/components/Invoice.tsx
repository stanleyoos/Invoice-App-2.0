import React from "react"
import { TableRow, TableCell } from "./ui/table"
import { amountFormat, dateFormat } from "@/app/utils/format"

const Invoice = ({ invoice }: any) => {
  return (
    <>
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.title}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{dateFormat(invoice.date)}</TableCell>
        <TableCell className="text-right">
          {amountFormat(invoice.amount)}
        </TableCell>
      </TableRow>
    </>
  )
}

export default Invoice
