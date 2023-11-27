import React from "react"

const CustomerEditPage = ({ params }: { params: { id: string } }) => {
  const id = params.id
  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Edit Customer</h1>
      <h1 className=" text-xl text-center my-8 text-sky-500">with ID: {id}</h1>
    </>
  )
}

export default CustomerEditPage
