import type { Metadata } from "next"
import "./globals.css"
import Providers from "@/components/Providers"
import Navbar from "@/components/layout/Navbar/Navbar"
import Footer from "@/components/layout/Footer/Footer"

export const metadata: Metadata = {
  title: "Breaking News English — Free ESL Lessons",
  description:
    "Free ESL/EFL lessons based on real news stories. 3,629 lessons across 7 levels. Updated twice a week.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
