import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/layouts/nav-bar/nav-bar";
import { Footer } from "./components/layouts/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["600"],
});
const nunito = Nunito_Sans({
  subsets: ["latin"],
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
    <html lang="en" className={`${poppins.variable} ${nunito.variable} h-full w-full`}>
      <body className="relative w-full lg:flex lg:flex-col lg:h-screen">
        <NavBar />
        <main className="lg:flex-1 lg:overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
