// app/admin/(protected)/layout.jsx
"use client";
import { usePathname } from "next/navigation";
import Sidebar from "../../../components/admin/Sidebar";
import Navbar from "../../../components/admin/Navbar";
import { useState } from "react";

export default function ProtectedLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (isLoginPage) return children;

  return (
    // <div className="flex h-screen bg-gray-100">
    //   <Sidebar />
    //   <div className="flex-1 flex flex-col overflow-hidden">
    //     <Navbar />
    //     <main className="flex-1 overflow-x-hidden overflow-y-auto">
    //       <div className="container mx-auto px-6 py-8">{children}</div>
    //     </main>
    //   </div>
    // </div>
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
