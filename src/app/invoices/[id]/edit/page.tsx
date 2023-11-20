import React from "react"

const InvoiceEditPage = ({ params }: { params: { id: string } }) => {
  const id = params.id
  return <h1>Invoice with ID : {id}</h1>
}

export default InvoiceEditPage
