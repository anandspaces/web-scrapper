@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    """Query the chatbot using RAG-based retrieval."""
    response = query_llm(request.query)
    if response:
        return {"response": response}
    raise HTTPException(status_code=400, detail="No relevant information found.")