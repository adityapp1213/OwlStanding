import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import favicon from "@/assets/favicon.ico";

const handlee = localFont({
  src: "../assets/fonts/Handlee-Regular.ttf",
  variable: "--font-handlee",
  weight: "400",
  style: "normal",
  display: "swap",
});

const palatino = localFont({
  src: "../assets/fonts/Palatino/palr45w.ttf",
  variable: "--font-palatino",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OwlStanding | Join our waitlist",
  description: "Join the OwlStanding waitlist and get early access.",
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
};

import { LoadingScreen } from "@/components/loading-screen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${handlee.variable} ${palatino.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-muted">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
