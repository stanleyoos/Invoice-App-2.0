import React from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { IoTrashBin } from "react-icons/io5"
import { deleteInvoice } from "@/app/lib/actions/invoiceActions"

export function UpdateInvoice({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return <Link href={`/invoices/${id}/edit`}>{children}</Link>
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id)
  return (
    <form action={deleteInvoiceWithId}>
      <Button variant="secondary">
        Delete
        <IoTrashBin className="w-5" />
      </Button>
    </form>
  )
}
