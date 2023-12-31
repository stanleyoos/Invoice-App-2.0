import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Container from "../components/Container"
import { ThemeProvider } from "../components/ThemeProvider"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Container>
              <main>
                <Navbar />
                {children}
                <div className="my-12"></div>
              </main>
            </Container>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
