import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarMenu from "@/components/custom/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import Footer from "@/components/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DockAPI - Ai powerd unified cloud platform and API Hub",
  description: "DockAPI is a unified cloud platform and API Hub that provides a single interface to access all the APIs you need to build your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="icon" href="/dockapilogo.svg" type="image/svg+xml" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
        <NavbarMenu />
        {children}
        <Footer />
    </ThemeProvider>
      </body>
    </html>
  );
}
