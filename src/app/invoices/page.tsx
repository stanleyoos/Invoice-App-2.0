import React from "react"
import { fetchInvoices } from "../lib/data"
import Invoice from "../../components/Invoice"

const InvoicesPage = async () => {
  const invoices = await fetchInvoices()

  return (
    <>
      <h1 className=" text-6xl text-sky-500">Invoices</h1>
      {invoices.map((invoice) => {
        return <Invoice key={invoice.id} invoice={invoice} />
      })}
    </>
  )
}
export default InvoicesPage
