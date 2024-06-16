import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";
import { cx } from "../utils/index";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"], display: "swap", variable: "--font-ra" });

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-ma" });

export const metadata: Metadata = {
  title: "Achiomwa Blog",
  description: "Created by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          raleway.variable,
          manrope.variable,
          "font-ra bg-light"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
