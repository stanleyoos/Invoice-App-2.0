import React from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { IoIosAdd } from "react-icons/io"

export function CreateInvoice() {
  return (
    <Link href="/invoices/create">
      <Button variant="secondary">
        <IoIosAdd />
        Add invoice
      </Button>
    </Link>
  )
}

export function UpdateInvoice({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return <Link href={`/invoices/${id}/edit`}>{children}</Link>
}
