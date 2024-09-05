import type { Metadata } from "next";
import { Instrument_Sans } from 'next/font/google'
import "./globals.css";
import Navbar from "./navbar";

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Toolhive",
  description: "Simplify Your Workflow with Our All-in-One Digital Toolkit",
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
