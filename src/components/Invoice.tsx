import React from "react"

const Invoice = ({ invoice }: any) => {
  return (
    <>
      <div className="flex">
        <h1>{invoice?.title}</h1>
        <p className="ml-5">{invoice?.amount}</p>
        <p className="ml-5">{invoice?.status}</p>
        {/* <p className="ml-5">{invoice?.date}</p> */}
      </div>
    </>
  )
}

export default Invoice
