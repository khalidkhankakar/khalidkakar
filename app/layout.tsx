import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import './prosemirror.css'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
});

const lobster = Lobster({
  subsets: ["latin"],
  variable: '--font-lobster',
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Khalid kakar",
  description: "Professional developer from Balochistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`dark ${inter.className} ${lobster.variable} bg-dark-3`} >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
