import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gregory Odiase - Software Engineer",
  description: "Portfolio website of Gregory Odiase, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100 text-black">
        {children}
      </body>
    </html>
  );
}
