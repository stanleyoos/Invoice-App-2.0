import React from "react"
import { TableRow, TableCell } from "./ui/table"

const Invoice = ({ invoice }: any) => {
  return (
    <>
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.title}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{String(invoice.date)}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    </>
  )
}

export default Invoice
