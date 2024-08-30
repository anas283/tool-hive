import type { Metadata } from "next";
import { Instrument_Sans } from 'next/font/google'
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tools Hub",
  description: "Simplify Your Workflow with Our All-in-One Digital Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>{children}</body>
    </html>
  );
}
