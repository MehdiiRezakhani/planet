import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Planet",
  description: "Developed By Mehdi Rezakhani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
