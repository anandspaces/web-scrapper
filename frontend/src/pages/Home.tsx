import Scraper from "../components/Scraper";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Web Scraper & Chatbot</h1>
      <Scraper />
      <Chat />
    </div>
  );
}
