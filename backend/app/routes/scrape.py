@app.post("/scrape")
async def scrape_endpoint(request: ScrapeRequest, background_tasks: BackgroundTasks):
    """Trigger web scraping and store data asynchronously."""
    background_tasks.add_task(scrape_website, request.url)
    return {"message": "Scraping started, please wait."}