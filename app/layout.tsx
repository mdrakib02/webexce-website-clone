import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Webexce - Web Development & SEO for Local Businesses | Locksmith, Plumber, Cleaning Services",
  description:
    "Professional web development and SEO services for local businesses. Specialized in locksmith websites, plumber sites, cleaning services, and more. Get more calls from Google with our mobile-friendly, conversion-focused websites.",
  keywords:
    "web development, SEO, locksmith website, plumber website, cleaning services website, local business websites, mobile-friendly websites, emergency services websites",
  authors: [{ name: "Webexce" }],
  openGraph: {
    title: "Webexce - Web Development & SEO for Local Businesses",
    description:
      "Fast, mobile-friendly websites built to turn visitors into phone calls. Specialized in emergency services and local businesses.",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      { 
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}
// New link
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
