import React from "react"
import { fetchInvoiceById } from "@/app/lib/data"
import Link from "next/link"
import { IoMdArrowRoundBack } from "react-icons/io"
import { Button } from "@/components/ui/button"

const InvoicePage = async ({ params }: { params: { id: string } }) => {
  const invoice = await fetchInvoiceById(params.id)

  console.log(invoice)
  return (
    <>
      <div className="flex justify-between">
        <Link href={`/invoices`} className="text-5xl flex items-center">
          <IoMdArrowRoundBack />
        </Link>
        <h1 className=" text-4xl sm:text-6xl text-center my-8 text-sky-500">
          {invoice.title}
        </h1>
        <div className="w-12"></div>
      </div>

      <Link href={`/invoices/${invoice.id}/edit`}>
        <Button variant={"secondary"}>Edit</Button>
      </Link>
    </>
  )
}

export default InvoicePage
