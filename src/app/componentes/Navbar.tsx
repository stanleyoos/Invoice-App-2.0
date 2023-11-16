"use client"

import Link from "next/link"
import React from "react"
import { TbFileInvoice } from "react-icons/tb"
import { usePathname } from "next/navigation"
import classnames from "classnames"
import ToggleTheme from "./ToggleTheme"

const NavBar = () => {
  const pathname = usePathname()

  const links = [
    { name: "Home", href: "/" },
    { name: "Invoices", href: "/invoices" },
    { name: "Dashboard", href: "/dashboard" },
  ]
  return (
    <nav className="flex  border-b p-5 mb-6  ">
      <Link className="py-2 text-black flex align-middle text-2xl" href="/">
        <TbFileInvoice />
      </Link>

      <ul className="flex px-6">
        {links.map((link) => (
          <li className="px-3 py-2" key={link.name}>
            <Link
              className={classnames("hover:text-zinc-700 ", {
                "text-zinc-900": pathname === link.href,
                "text-zinc-500": pathname !== link.href,
              })}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ToggleTheme />
    </nav>
  )
}

export default NavBar
