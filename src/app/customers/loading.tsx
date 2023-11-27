import React from "react"
import { Skeleton } from "../../components/ui/skeleton"

const LoadingCustomers = () => {
  return (
    <>
      <h1 className=" text-6xl text-center my-8 text-sky-500">Customers</h1>

      {/* add Skeleton when loading */}
      <div className="flex flex-col items-center  ">
        <Skeleton className="w-[500px] h-[40px] my-3 rounded-full" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded-full" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded-full" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded-full" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded-full" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded-full" />
        <Skeleton className="w-[500px] h-[40px] my-3 rounded-full" />
      </div>
    </>
  )
}

export default LoadingCustomers
