import type { Metadata } from "next";
import { Instrument_Sans } from 'next/font/google'
import "./globals.css";
import Navbar from "./navbar";

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Toolhive: All-in-One Online Tools for Productivity & Workflow",
  description: "Boost productivity with Toolhive’s free online tools—tailwind gradient generator, password generator, word counter, color palette generator, note-taking, and more. Simplify your workflow with our easy-to-use toolkit.",
  keywords: "Toolhive, digital toolkit, tailwind gradient generator, password generator, word counter, Lorem Ipsum generator, to-do list, notes app, color palette generator, productivity tools, online tools",
  openGraph: {
    title: "Toolhive: All-in-One Online Tools for Productivity & Workflow",
    description: "Boost productivity with Toolhive’s free online tools—tailwind gradient generator, password generator, word counter, color palette generator, note-taking, and more. Simplify your workflow with our easy-to-use toolkit.",
    images: "/meta-image.png"
  },
  twitter: {
    title: "Toolhive: All-in-One Online Tools for Productivity & Workflow",
    description: "Boost productivity with Toolhive’s free online tools—tailwind gradient generator, password generator, word counter, color palette generator, note-taking, and more. Simplify your workflow with our easy-to-use toolkit.",
    images: "/meta-image.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
