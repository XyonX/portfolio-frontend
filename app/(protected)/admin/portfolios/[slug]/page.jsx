"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EditPortfolioForm from "./EditPortfolioForm"; // Import the form component

export default function EditPortfolioPage() {
  const { slug } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    async function fetchPortfolio() {
      const res = await fetch(`/api/portfolios/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setPortfolio(data);
      } else {
        console.error("Failed to fetch portfolio data");
      }
    }

    if (slug) fetchPortfolio();
  }, [slug]);

  if (!portfolio) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Edit Portfolio</h1>
      <EditPortfolioForm portfolio={portfolio} />
    </div>
  );
}
