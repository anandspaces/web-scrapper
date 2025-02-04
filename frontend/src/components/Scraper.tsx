import { useState } from "react";
import { scrapeWebsite } from "../api/scraper";

export default function Scraper() {
  const [url, setUrl] = useState("");

  const handleScrape = async () => {
    try {
      const message = await scrapeWebsite(url);
      alert(message);
    } catch (error) {
      alert("Error scraping website");
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-4 w-full max-w-md">
      <h2 className="text-lg font-semibold mb-2">Scrape a Website</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-2"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleScrape}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Scrape Website
      </button>
    </div>
  );
}