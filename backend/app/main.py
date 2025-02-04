from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from app.scraper import scrape_website
from app.vectorstore import store_and_embed_content, query_llm
from app.database import init_db

# Initialize FastAPI
app = FastAPI()

# Ensure database is set up
init_db()

# Request models
class ScrapeRequest(BaseModel):
    url: str

class ChatRequest(BaseModel):
    query: str

# Routes
@app.post("/scrape")
async def scrape_endpoint(request: ScrapeRequest, background_tasks: BackgroundTasks):
    """Trigger web scraping and store data asynchronously."""
    background_tasks.add_task(scrape_website, request.url)
    return {"message": "Scraping started, please wait."}

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    """Query the chatbot using RAG-based retrieval."""
    response = query_llm(request.query)
    if response:
        return {"response": response}
    raise HTTPException(status_code=400, detail="No relevant information found.")
