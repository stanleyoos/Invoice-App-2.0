"use client"

import React from "react"
import classnames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Button } from "../components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi"

const Navlinks = () => {
  const pathname = usePathname()
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Invoices", href: "/invoices" },
    { name: "Customers", href: "/customers" },
  ]
  return (
    <>
      <ul className="md:flex px-3 lg:px-6 hidden">
        {links.map((link) => (
          <li className="px-2 lg:px-4 py-2" key={link.name}>
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
      <div className="md:hidden ml-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <GiHamburgerMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {links.map((link) => (
              <Link
                key={link.name}
                className={classnames(" hover:text-zinc-500 text-3xl", {
                  "font-bold": pathname === link.href,
                })}
                href={link.href}
              >
                <DropdownMenuItem>{link.name}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default Navlinks
