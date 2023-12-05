import React from "react"
import { fetchFilteredInvoices, fetchTotalAmount } from "../lib/data"
import InvoicesTable from '../../components/ui/invoices/invoicesTable'
import CreateInvoiceButton from "../../components/ui/buttons/createButton"
import Search from "../../components/Search"

const InvoicesPage = async ({
  searchParams,
}: {
  searchParams: {
    query?: string
  }
}) => {
  const query = searchParams?.query || ""
  const invoices = await fetchFilteredInvoices(query)
  const [{ sum }] = await fetchTotalAmount()

  console.log(invoices)

  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Invoices</h1>
      <div className="flex justify-center mb-9">
        <CreateInvoiceButton href="/invoices/create" name="Add invoice" />
      </div>
      <Search placeholder="Search for invoices..." />
      {invoices.length == 0 ? (
        <>
          <h1 className=" text-2xl text-center mt-8 mb-4 text-sky-500">
            You do not have any invoices
          </h1>
          <h1 className=" text-lg text-center  ">
            Click Add invoice to create new one
          </h1>
        </>
      ) : (
        <InvoicesTable sum={sum} invoices={invoices} />
      )}
    </>
  )
}
export default InvoicesPage
