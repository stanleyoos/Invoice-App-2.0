import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data"
import { notFound } from "next/navigation"
import EditInvoiceForm from "../../../../components/ui/invoices/edit-form"
import React from "react"
import { IoMdArrowRoundBack } from "react-icons/io"
import Link from "next/link"
import { EditPageTopNav } from "@/components/ui/TopPartNav"

const InvoiceEditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ])

  if (!invoice) {
    notFound()
  }

  return (
    <>
      <EditPageTopNav backHref={`/invoices/${id}`} title="Update Invoice" />
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </>
  )
}

export default InvoiceEditPage
