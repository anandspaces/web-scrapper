import requests
from bs4 import BeautifulSoup
import sqlite3
from app.vectorstore import store_and_embed_content

def scrape_website(url: str):
    """Scrapes the given URL and stores its content in the database."""
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        text = soup.get_text(separator=" ", strip=True)
        
        # Store in database
        conn = sqlite3.connect("data/scraped_content.db")
        cursor = conn.cursor()
        cursor.execute("INSERT OR REPLACE INTO scraped_content (url, content) VALUES (?, ?)", (url, text))
        conn.commit()
        conn.close()

        # Store in vector database
        store_and_embed_content(url, text)
    else:
        raise Exception("Failed to scrape website.")
