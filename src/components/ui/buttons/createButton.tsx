import React from "react"
import Link from "next/link"
import { Button } from "../../../components/ui/button"
import { IoAdd } from "react-icons/io5"

const createButton = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href}>
      <Button variant="secondary">
        <IoAdd />
        {name}
      </Button>
    </Link>
  )
}

export default createButton
