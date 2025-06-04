"use client";

import { Geist, Geist_Mono } from "next/font/google";
// import { GeistMono } from "geist/font/mono";
import { usePathname } from "next/navigation"; // Import usePathname
import "./globals.css";
import Navigation from "../components/Navigation";
import { AppProvider } from "./AppProvider";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import { SideNav } from "../components/new/SideNav";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "./ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Load Space Grotesk font
const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin"); // Check if it's an admin route
  const isAccessDenied = pathname.startsWith("/access-denied"); // Check if it's an admin route

  return (
    <html
      lang="en"
      className={cx("scroll-smooth", GeistMono.variable, spaceGrotesk.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <SideNav />
            <main className="flex-1 p-6 md:p-12 ml-0 md:ml-64 transition-all">
              <div className="max-w-5xl mx-auto">
                <Suspense>{children}</Suspense>
              </div>
            </main>
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
