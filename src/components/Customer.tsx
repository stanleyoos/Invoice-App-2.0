import React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Customer as CustomerInterface } from "@/app/lib/interfaces"

const Customer = ({ customer }: { customer: CustomerInterface }) => {
  return (
    <Card className="w-60">
      <CardHeader>
        <CardTitle>{customer.name}</CardTitle>
        <CardDescription>{customer.email}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default Customer
