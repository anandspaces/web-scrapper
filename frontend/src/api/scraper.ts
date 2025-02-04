import axios from "axios";

export const scrapeWebsite = async (url: string) => {
  try {
    await axios.post("http://localhost:8000/scrape", { url });
    return "Scraping started, please wait!";
  } catch (error) {
    throw new Error("Error scraping website");
  }
};