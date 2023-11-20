import React from "react"

const InvoiceStatus = ({ status }: { status: string }) => {
  if (status === "pending") {
    return (
      <>
        <p className="text-blue-500">Pending</p>
      </>
    )
  }

  if (status === "paid") {
    return (
      <>
        <p className="text-green-800">Paid</p>
      </>
    )
  }
}

export default InvoiceStatus
