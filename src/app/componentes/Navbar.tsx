import Link from "next/link"
import React from "react"

const NavBar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
  ]
  return (
    <div className="flex  border-b p-5 mb-6  ">
      <div>Logo</div>
      <ul className="flex px-6">
        {links.map((link) => (
          <li className="px-3" key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
