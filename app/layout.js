"use client";

import { Geist, Geist_Mono } from "next/font/google";
// import { GeistMono } from "geist/font/mono";
import { usePathname } from "next/navigation"; // Import usePathname
import "./globals.css";
import Navigation from "../components/Navigation";
import { AppProvider } from "./AppProvider";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";

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
      <AppProvider>
        <body>
          {!isAdminRoute && !isAccessDenied && <Navigation />}
          {/* Hide Navbar in admin routes */}
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
