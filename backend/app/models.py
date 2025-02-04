from pydantic import BaseModel

class ScrapedContent(BaseModel):
    url: str
    content: str
