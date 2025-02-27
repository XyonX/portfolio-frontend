"use client";
// app/admin/(protected)/layout.jsx
import { usePathname } from "next/navigation";

import Sidebar from "../../../components/admin/Sidebar";

export default function ProtectedLayout({ children }) {
  /*
  const cookieStore = cookies();
  const token = cookieStore.get("jwt_token")?.value;

  let user = null;
  if (token) {
    try {
      user = verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // Token is invalid; middleware should have redirected, but this is a fallback
    }
  }*/

  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <div className="admin-layout flex">
      {!isLoginPage && (
        <aside className="w-64 bg-gray-800 text-white">
          <Sidebar />
        </aside>
      )}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
