import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
export const metadata: Metadata = {
  title: "Khalid",
  description: "Khalid is MERN stack and Nextjs developer",
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="">
      <Navbar />
      {/* <Chat /> */}
      {children}
      <Footer />
    </main>
  );
}
