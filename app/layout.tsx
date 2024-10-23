import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const bellefair = localFont({
  src: "./fonts/Bellefair-Regular.ttf",
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "Marcin MIchał Marszałek",
  description: "Abstractions Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bellefair.variable}>
        {children}
      </body>
    </html>
  );
}
