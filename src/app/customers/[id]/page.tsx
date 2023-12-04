import React from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"

const CustomerPage = () => {
  return (
    <>
      <h1 className=" text-3xl md:text-6xl text-center my-8 text-sky-500">
        Name
      </h1>
      <Card className="w-80 mx-auto">
        <CardHeader>
          <CardTitle className="mb-3">Email</CardTitle>
          <CardDescription>Edit - link to /id/edit</CardDescription>
        </CardHeader>
      </Card>

      <h1 className=" text-3xl md:text-6xl text-center my-8 text-sky-500">
        Invoice List by customer id
      </h1>
    </>
  )
}

export default CustomerPage
