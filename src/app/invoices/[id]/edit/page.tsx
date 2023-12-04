import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data"
import { notFound } from "next/navigation"
import EditInvoiceForm from "../../../../components/ui/invoices/edit-form"
import React from "react"
import { IoMdArrowRoundBack } from "react-icons/io"
import Link from "next/link"

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
      <div className="flex justify-between">
        <Link href={`/invoices/${id}`} className="text-5xl flex items-center">
          <IoMdArrowRoundBack />
        </Link>
        <h1 className=" text-3xl md:text-6xl text-center my-8 text-sky-500">
          Update Invoice
        </h1>
        <div className="w-12"></div>
      </div>
      <EditInvoiceForm invoice={invoice} customers={customers} />
    </>
  )
}

export default InvoiceEditPage
