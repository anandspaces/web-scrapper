import axios from "axios";

export const queryChatbot = async (query: string) => {
  try {
    const res = await axios.post("http://localhost:8000/chat", { query });
    return res.data.response;
  } catch (error) {
    throw new Error("Error getting response");
  }
};
