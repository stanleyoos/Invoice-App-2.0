import React from "react"
import { Skeleton } from "../../components/ui/skeleton"

const LoadingInvoices = () => {
  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Invoices</h1>

      {/* add Skeleton when loading */}
      <div className="flex flex-col items-center  ">
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded" />
      </div>
    </>
  )
}

export default LoadingInvoices
