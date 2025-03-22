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
  description: "Khalid Khan Kakar – A skilled Frontend Developer specializing in React.js, Next.js, and modern web technologies. With expertise in building scalable web applications, Khalid has developed projects like a Stack Overflow clone, a social media web app, and an AI-powered chatbot. He excels in integrating AI models, optimizing performance, and implementing real-time features using tools like NextAuth, Drizzle ORM, PostgreSQL, and Firebase. Passionate about open-source contributions, MERN stack development, and cutting-edge web solutions. Explore Khalid’s work on GitHub and LinkedIn to see his latest innovations.",
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
