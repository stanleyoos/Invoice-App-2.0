import Link from "next/link"
import React from "react"
import { TbFileInvoice } from "react-icons/tb"
import Navlinks from "../components/Navlinks"
import { ModeToggle } from "@/components/ToggleTheme"
import { auth, UserButton } from "@clerk/nextjs"

const NavBar = () => {
  const { userId } = auth()

  console.log(userId)

  return (
    <nav className="flex  border-b p-5 mb-6  ">
      <Link className="py-2 flex align-middle text-2xl" href="/">
        <TbFileInvoice />
      </Link>
      <Navlinks />

      <div className="ml-auto flex items-center">
        {!userId && (
          <>
            <Link href="/sign-in" className="mr-4">
              Sign in
            </Link>
            <Link href="/sign-up" className="mr-4">
              Sign up
            </Link>
          </>
        )}
        <div className="mr-4">
          <UserButton afterSignOutUrl="/" />
        </div>

        <ModeToggle />
      </div>
    </nav>
  )
}

export default NavBar
