// import { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [url, setUrl] = useState("");
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleScrape = async () => {
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:8000/scrape", { url });
//       alert("Scraping started, please wait!");
//     } catch (error) {
//       alert("Error scraping website");
//     }
//     setLoading(false);
//   };

//   const handleChat = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:8000/chat", { query });
//       setResponse(res.data.response);
//     } catch (error) {
//       setResponse("Error getting response");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <h1 className="text-xl font-bold text-center mb-4">Web Scraper & Chatbot</h1>
//         <input
//           type="text"
//           className="w-full p-2 border rounded mb-2"
//           placeholder="Enter website URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//         />
//         <button
//           onClick={handleScrape}
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           disabled={loading}
//         >
//           Scrape Website
//         </button>

//         <input
//           type="text"
//           className="w-full p-2 border rounded my-2"
//           placeholder="Ask something about the scraped content"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button
//           onClick={handleChat}
//           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
//           disabled={loading}
//         >
//           Ask Chatbot
//         </button>

//         {response && (
//           <div className="mt-4 p-2 border rounded bg-gray-50">
//             <strong>Response:</strong>
//             <p>{response}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import Home from "./pages/Home";

export default function App() {
  return <Home />;
}
