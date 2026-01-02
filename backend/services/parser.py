import io
from pypdf import PdfReader
from fastapi import UploadFile

async def extract_text_from_file(file: UploadFile) -> str:
    content = await file.read()
    filename = file.filename.lower()
    
    text = ""
    
    if filename.endswith(".pdf"):
        try:
            pdf = PdfReader(io.BytesIO(content))
            for page in pdf.pages:
                text += page.extract_text() + "\n"
        except Exception as e:
            text = f"Error reading PDF: {e}"
    else:
        # Assume text/plain or similar
        try:
            text = content.decode("utf-8")
        except:
            text = content.decode("latin-1")
            
    return text
