// app/admin/page.jsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  try {
    verify(token, process.env.JWT_SECRET);
    console.log("token verification success");
    redirect("/admin/dashboard");
  } catch (err) {
    // If the error is due to redirect, re-throw it.
    if (err.message === "NEXT_REDIRECT") throw err;

    console.log("token verification failed", err);
    redirect("/admin/login");
  }
}
