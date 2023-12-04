import React from "react"
import { fetchCustomerById } from "@/app/lib/data"
import { EditPageTopNav } from "@/components/ui/TopPartNav"
import UpdateCustomerForm from "../../../../components/ui/customers/edit-form"

const CustomerEditPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const customer = await fetchCustomerById(id)
  return (
    <>
      <EditPageTopNav backHref={`/customers/${id}`} title="Update Customer" />
      <UpdateCustomerForm customer={customer} />
    </>
  )
}

export default CustomerEditPage
