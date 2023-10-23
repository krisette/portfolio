import "./globals.css";
import type { Metadata } from "next";
import { NavBar } from "./components/navbar";

export const metadata: Metadata = {
  title: "krisette odegard",
  description: "krisette odegard's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-onBackground">
      <body className="h-screen flex flex-col">
        <NavBar />
        <main className="w-full  mx-auto px-4 lg:max-w-7xl md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
