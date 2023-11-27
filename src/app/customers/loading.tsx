import React from "react"
import { Skeleton } from "../../components/ui/skeleton"

const LoadingCustomers = () => {
  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Customers</h1>

      {/* add Skeleton when loading */}
      <div className="flex flex-wrap gap-5 justify-center">
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[220px] h-[100px] my-3 rounded" />
      </div>
    </>
  )
}

export default LoadingCustomers
