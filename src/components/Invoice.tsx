import React from "react"
import { TableRow, TableCell } from "./ui/table"
import { amountFormat, dateFormat } from "@/app/utils/format"
import { IoMdInformationCircleOutline } from "react-icons/io"

const Invoice = ({ invoice }: any) => {
  console.log(invoice)
  return (
    <>
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.title}</TableCell>
        <TableCell className="hidden sm:block">{invoice.name}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell className="hidden md:block">
          {dateFormat(invoice.date)}
        </TableCell>
        <TableCell className="text-right ">
          {amountFormat(invoice.amount)}
        </TableCell>
        <TableCell className="text-right w-1">
          <IoMdInformationCircleOutline className="text-xl ml-auto" />
        </TableCell>
      </TableRow>
    </>
  )
}

export default Invoice
