import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Countries",
  description: "Search your favorite country",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen dark:bg-[#202D36] bg-[#FAFAFA]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
