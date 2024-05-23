import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/layouts/nav-bar/nav-bar";
import { Footer } from "./components/layouts/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
  weight: ["600"],
});
const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Shivam Kumar",
  description: "Portfolio website for Shivam Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="sm:flex sm:flex-col sm:h-screen">
        <NavBar />
        <main className="min-h-screen sm:min-h-0 sm:flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
