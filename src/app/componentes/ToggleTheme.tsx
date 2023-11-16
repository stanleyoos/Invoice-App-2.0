"use client"

import React, { useState, useEffect } from "react"

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light")

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  //   useEffect(() => {
  //     const th = localStorage.getItem("data-theme")
  //     setTheme(th!)
  //   }, [])

  useEffect(() => {
    document.querySelector("html")!.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <input
      type="checkbox"
      value={theme}
      checked={theme !== "light"}
      className="toggle theme-controller ml-auto mt-1"
      onChange={handleThemeChange}
    />
  )
}

export default ToggleTheme
