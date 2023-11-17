"use client"

import React from "react"
import classnames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlinks = () => {
  const pathname = usePathname()
  const links = [
    { name: "Home", href: "/" },
    { name: "Invoices", href: "/invoices" },
    { name: "Dashboard", href: "/dashboard" },
  ]
  return (
    <ul className="flex px-6">
      {links.map((link) => (
        <li className="px-3 py-2" key={link.name}>
          <Link
            className={classnames(" hover:text-zinc-500 ", {
              "font-bold": pathname === link.href,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navlinks
