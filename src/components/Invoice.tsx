import React from "react";
import { TableRow, TableCell } from "./ui/table";
import { amountFormat, dateFormat } from "@/app/utils/format";
import { IoMdInformationCircleOutline } from "react-icons/io";
import InvoiceStatus from "../components/ui/invoices/status";
import { ViewInvoice } from "./ui/invoices/buttons";

const Invoice = ({ invoice }: any) => {
  return (
    <TableRow key={invoice.invoice}>
      <TableCell className="font-medium">{invoice.title}</TableCell>
      <TableCell className="hidden sm:block">{invoice.name}</TableCell>
      <TableCell>
        <InvoiceStatus status={invoice.status} />
      </TableCell>
      <TableCell className="hidden md:block">
        {dateFormat(invoice.date)}
      </TableCell>
      <TableCell className="text-right ">
        {amountFormat(invoice.amount)}
      </TableCell>
      <TableCell className="text-right w-1">
        <ViewInvoice id={invoice.id}>
          <IoMdInformationCircleOutline className="text-xl ml-auto" />
        </ViewInvoice>
      </TableCell>
    </TableRow>
  );
};

export default Invoice;
