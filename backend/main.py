from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Quotation Analysis Agent")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all. refine for production.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Quotation Analysis Agent API is running"}

from fastapi import UploadFile, File, HTTPException
from typing import List
from backend.services.parser import extract_text_from_file
from backend.services.analyzer import analyze_quotations
from backend.models import ComparisonReport

@app.post("/analyze", response_model=ComparisonReport)
async def analyze_files(files: List[UploadFile] = File(...)):
    if len(files) < 2:
        raise HTTPException(status_code=400, detail="Please upload at least 2 files for comparison.")
        
    texts = []
    for file in files:
        text = await extract_text_from_file(file)
        texts.append(text)
        
    analysis_result = await analyze_quotations(texts)
    
    if "error" in analysis_result:
        raise HTTPException(status_code=500, detail=analysis_result["error"])
        
    return analysis_result
