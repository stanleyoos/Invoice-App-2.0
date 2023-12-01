import React from "react"
import Link from "next/link"
import { IoMdArrowRoundBack } from "react-icons/io"

const UpdateClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-between">
        <Link href={"/customers"} className="text-5xl flex items-center">
          <IoMdArrowRoundBack />
        </Link>
        <h1 className=" text-3xl md:text-6xl text-center my-8 text-sky-500">
          Update Customer
        </h1>
        <div className="w-12"></div>
      </div>
      {children}
    </>
  )
}

export default UpdateClientLayout
