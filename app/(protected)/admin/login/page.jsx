"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic validation
    if (!username || !password) {
      setError("Please enter both username and password");
      setIsSubmitting(false);
      return;
    }

    try {
      let API_BASE_URL =
        process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

      console.log(`${API_BASE_URL}/api/auth/login`);

      //to convert the password to hashed password
      //const hashedPassword = await bcrypt.hash("FrotherWhisker69#", 10); // Replace with desired password

      // Send login request to API endpoint
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // ✅ Important: Allows cookies to be sent/received
      });

      console.log(res.ok);

      if (res.ok) {
        // Redirect to admin dashboard on success
        router.push("/admin/dashboard");
      } else {
        const data = await res.json();
        console.log(data);
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-primary-bg">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary-text mb-6">
          Sign in to Admin Panel
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-secondary-text"
            >
              username
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-secondary-text"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-accent-border rounded-md shadow-sm focus:outline-none focus:ring-accent-text focus:border-accent-text"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary-btn text-light-text py-2 px-4 rounded-md hover:bg-primary-btn-hover focus:outline-none focus:ring-2 focus:ring-accent-text focus:ring-offset-2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
