"use client"

import React from "react"
import { SignIn } from "@clerk/nextjs"
import { useTheme } from "next-themes"
import { dark } from "@clerk/themes"

const SignInPage = () => {
  const { theme } = useTheme()

  return (
    <div className="flex justify-center">
      <SignIn
        appearance={{
          baseTheme: theme == "light" ? undefined : dark,
        }}
      />
    </div>
  )
}

export default SignInPage
