import chromadb
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import OpenAI

def store_and_embed_content(url: str, content: str):
    """Stores and embeds scraped content into ChromaDB for retrieval."""
    client = chromadb.PersistentClient(path="data/chroma")
    collection = client.get_or_create_collection(name="scraped_content")
    embeddings = OpenAIEmbeddings().embed_query(content)
    collection.add(ids=[url], embeddings=[embeddings], metadatas=[{"url": url, "content": content}])

def query_llm(query: str):
    """Queries the chatbot with RAG-based retrieval."""
    client = chromadb.PersistentClient(path="data/chroma")
    collection = client.get_or_create_collection(name="scraped_content")
    search_results = collection.query(query_texts=[query], n_results=1)

    if search_results and search_results["documents"]:
        relevant_content = search_results["documents"][0]
        llm = OpenAI()
        response = llm(relevant_content + "\n\n" + query)
        return response
    return None
