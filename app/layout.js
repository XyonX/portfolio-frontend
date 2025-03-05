"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation"; // Import usePathname
import "./globals.css";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin"); // Check if it's an admin route
  const isAccessDenied = pathname.startsWith("/access-denied"); // Check if it's an admin route

  return (
    <html lang="en">
      <body>
        {!isAdminRoute && !isAccessDenied && <Navigation />}{" "}
        {/* Hide Navbar in admin routes */}
        {children}
      </body>
    </html>
  );
}
