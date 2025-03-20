import React from "react";
import Post from "../Post/Post";
import Link from "next/link";

async function getPortfolios() {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Fallback for local dev

  const res = await fetch(`${API_BASE_URL}/api/portfolios`);

  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }
  return res.json();
}

const PortfolioList = async () => {
  const json = await getPortfolios();
  const Portfolios = json.data;

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-5">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Portfolios
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {Portfolios.map((item, index) => (
          <Link href={`/portfolios/${item.slug}`} key={item.id}>
            <Post post={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
