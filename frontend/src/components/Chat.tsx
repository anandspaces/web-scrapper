import { useState } from "react";
import { queryChatbot } from "../api/chat";

export default function Chat() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    try {
      const answer = await queryChatbot(query);
      setResponse(answer);
    } catch (error) {
      setResponse("Error getting response");
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md w-full max-w-md">
      <h2 className="text-lg font-semibold mb-2">Ask the Chatbot</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-2"
        placeholder="Ask something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleChat}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Ask Chatbot
      </button>
      {response && (
        <div className="mt-4 p-2 border rounded bg-gray-50">
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
