import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data"
import { notFound } from "next/navigation"
import EditInvoiceForm from "../../../../components/ui/invoices/edit-form"
import React from "react"

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
      <h1 className=" text-6xl text-center my-8 text-sky-500">
        Update Invoice
      </h1>
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </>
  )
}

export default InvoiceEditPage
