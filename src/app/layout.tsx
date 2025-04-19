import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProDrive Motors",
  description:
    "ProDrive Motors is a car dealership that specializes in high-performance vehicles, offering a curated selection of luxury and sports cars for enthusiasts and collectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
