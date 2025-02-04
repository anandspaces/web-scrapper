import sqlite3

def init_db():
    """Initializes the SQLite database for storing scraped content."""
    conn = sqlite3.connect("data/scraped_content.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS scraped_content (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT UNIQUE,
            content TEXT
        )
    """)
    conn.commit()
    conn.close()
