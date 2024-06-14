import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";
import { cx } from "../utils/index";

const raleway = Raleway({ subsets: ["latin"], display: "swap", variable: "--font-ra" });

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-ma" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          "font-ra bg-light dark:bg-dark"
        )}
      >
        {children}
      </body>
    </html>
  );
}
