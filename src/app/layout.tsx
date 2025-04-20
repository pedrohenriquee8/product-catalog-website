import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Living Space Studio - Discover our curated selection of furniture pieces",
  description:
    "Discover our curated selection of furniture pieces crafted to make any space feel like home. From chairs and sofas to lamps and tables, find the perfect pieces to complete your living space.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
