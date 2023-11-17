import Link from "next/link"
import React from "react"
import { TbFileInvoice } from "react-icons/tb"
import classnames from "classnames"
import { ModeToggle } from "../components/ToggleTheme"

const NavBar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Invoices", href: "/invoices" },
    { name: "Dashboard", href: "/dashboard" },
  ]
  return (
    <nav className="flex  border-b p-5 mb-6  ">
      <Link className="py-2 flex align-middle text-2xl" href="/">
        <TbFileInvoice />
      </Link>

      <ul className="flex px-6">
        {links.map((link) => (
          <li className="px-3 py-2" key={link.name}>
            <Link
              className={classnames("hover:text-zinc-700 ")}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default NavBar
