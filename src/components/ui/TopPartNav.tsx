import React from "react"
import Link from "next/link"
import { IoMdArrowRoundBack, IoMdArrowForward } from "react-icons/io"
import { Button } from "./button"

const TopPartNav = ({
  backHref,
  title,
  editHref,
}: {
  backHref: string
  title: string
  editHref: string
}) => {
  return (
    <div className="flex justify-between">
      <Link href={backHref} className="text-5xl flex items-center">
        <IoMdArrowRoundBack />
      </Link>
      <h1 className=" text-4xl sm:text-6xl text-center my-8 text-sky-500">
        {title}
      </h1>
      <Link className="my-auto" href={editHref}>
        <Button variant={"secondary"}>Edit</Button>
      </Link>
    </div>
  )
}

export default TopPartNav
