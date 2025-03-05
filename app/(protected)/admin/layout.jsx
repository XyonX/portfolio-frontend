// app/admin/(protected)/layout.jsx
"use client";
import { usePathname } from "next/navigation";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import { useState } from "react";

export default function ProtectedLayout({ children }) {
  const pathname = usePathname();
  // Treat both /admin and /admin/login as public pages (no Sidebar/Navbar)
  const isPublicPage = pathname === "/admin" || pathname === "/admin/login";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isPublicPage) return children;

  return (
    <div>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="pt-16 lg:ml-64">{children}</div>
    </div>
  );
}
