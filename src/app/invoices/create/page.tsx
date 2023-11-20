import React from "react"
import Form from "../../../components/ui/invoices/create-form"
import { fetchCustomers } from "../../lib/data"

const CreateInvoicePage = async () => {
  const customers = await fetchCustomers()
  return (
    <main>
      <Form customers={customers} />
    </main>
  )
}
export default CreateInvoicePage
