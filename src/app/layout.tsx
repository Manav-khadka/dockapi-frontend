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

// SEO + Open Graph Metadata
export const metadata: Metadata = {
  title: "DockAPI - AI-powered Unified Cloud Platform and API Hub",
  description:
    "DockAPI is an AI-powered unified cloud platform and API Hub that provides a single interface to access, deploy, and manage APIs and Docker-based projects.",
  keywords:
    "DockAPI, Docker, API Hub, Cloud Platform, API Deployment, AI-powered Cloud, Unified API Management, Microservices, Cloud APIs, API Gateway",
  authors: [{ name: "Manav Khadka", url: "https://manavkhadka.com.np" }],
  creator: "Manav Khadka",
  metadataBase: new URL("https://dockapi.vercel.app"), // or your custom domain
  openGraph: {
    title: "DockAPI - AI-powered Unified Cloud Platform and API Hub",
    description:
      "DockAPI is a unified cloud platform and API Hub designed to simplify the deployment, scaling, and management of Docker-based projects and APIs.",
    url: "https://dockapi.vercel.app", // your domain
    siteName: "DockAPI",
    images: [
      {
        url: "https://dockapi.vercel.app/preview.png", // Update with your OG image
        width: 1200,
        height: 630,
        alt: "DockAPI Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DockAPI - AI-powered Unified Cloud Platform and API Hub",
    description:
      "DockAPI simplifies the deployment, scaling, and management of APIs and Docker-based projects.",
    images: ["https://dockapi.vercel.app/preview.png"], // Your preview image
    creator: "@manavkhadka", // optional: your Twitter handle
  },
  icons: {
    icon: "/dockapilogo.svg", // inside /public/
    shortcut: "/dockapilogo.svg",
    apple: "/dockapilogo.svg",
  },
  themeColor: "#000000",
  manifest: "/site.webmanifest", // optional, if you add PWA support
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon fallback if metadata.icons doesn't work */}
        <link rel="icon" href="/dockapilogo.svg" type="image/svg+xml" />
        {/* Optional: preload fonts or any other assets */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
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
