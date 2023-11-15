import React from "react"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl flex flex-col mx-auto justify-center">
      {children}
    </div>
  )
}
export default Container
