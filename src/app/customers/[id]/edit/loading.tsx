import React from "react"
import { Skeleton } from "../../../../components/ui/skeleton"

const LoadingEditCustomer = () => {
  return (
    <>
      <div className="flex flex-col items-center  ">
        <Skeleton className="w-[520px] h-[100px] my-3 rounded" />
        <Skeleton className="w-[520px] h-[100px] my-3 rounded" />
      </div>
    </>
  )
}

export default LoadingEditCustomer
