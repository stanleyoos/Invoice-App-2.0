import Link from "next/link"
import React from "react"
import { TbFileInvoice } from "react-icons/tb"
import Navlinks from "../components/Navlinks"
import { ModeToggle } from "@/components/ToggleTheme"

const NavBar = () => {
  return (
    <nav className="flex  border-b p-5 mb-6  ">
      <Link className="py-2 flex align-middle text-2xl" href="/">
        <TbFileInvoice />
      </Link>
      <Navlinks />

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default NavBar
