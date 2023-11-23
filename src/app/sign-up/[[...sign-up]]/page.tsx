"use client"

import React from "react"
import { SignUp } from "@clerk/nextjs"
import { useTheme } from "next-themes"
import { dark } from "@clerk/themes"

const SignUpPage = () => {
  const { theme } = useTheme()

  return (
    <>
      <div className="flex justify-center">
        <SignUp
          appearance={{
            baseTheme: theme == "light" ? undefined : dark,
          }}
        />
      </div>
    </>
  )
}

export default SignUpPage
