import Link from "next/link"
import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const HomePage = () => {
  return (
    <div>
      <h1 className=" text-6xl text-sky-500 text-center my-28">
        Welcome to Invoice App
      </h1>
      <p className="text-center my-28 text-xl">
        This app will help you to manage your invoices and clients
      </p>
      <div className="flex  justify-center mt-auto">
        <Link
          target="_blank"
          href="https://github.com/stanleyoos?tab=repositories"
          className="mr-3 text-4xl"
        >
          <FaGithub />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/stanislawsarka/"
          className="ml-3 text-4xl"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  )
}

export default HomePage
