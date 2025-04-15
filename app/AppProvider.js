import React, { useEffect, useState, createContext, useContext } from "react";

const appContext = createContext();

export function AppProvider({ children }) {
  const [portfolios, setPortfolios] = useState(null);
  const [featuredPortfolios, setFeaturedPortfolios] = useState(null);

  async function getPortfolios() {
    const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

    const res = await fetch(`${API_BASE_URL}/api/portfolios`, {
      cache: "no-store", // Avoid browser cache
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  useEffect(() => {
    const cachedData = localStorage.getItem("portfolios");

    if (cachedData) {
      const parsed = JSON.parse(cachedData);
      setPortfolios(parsed);
      setFeaturedPortfolios(parsed.slice(0, 3)); // Adjust filtering logic if needed
    }

    async function fetchDataAndCache() {
      try {
        const res = await getPortfolios();
        const allPortfolios = res.data;

        // Store in state
        setPortfolios(allPortfolios);
        setFeaturedPortfolios(allPortfolios.slice(0, 3));

        // Store in localStorage
        localStorage.setItem("portfolios", JSON.stringify(allPortfolios));
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      }
    }

    fetchDataAndCache();
  }, []);

  return (
    <appContext.Provider value={{ portfolios, featuredPortfolios }}>
      {children}
    </appContext.Provider>
  );
}

export const useAppContext = () => useContext(appContext);
