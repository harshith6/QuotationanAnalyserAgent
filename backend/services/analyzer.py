import google.generativeai as genai
import os
import json
from dotenv import load_dotenv

from dotenv import load_dotenv
from pathlib import Path

# Build path to .env file (backend/.env)
env_path = Path(__file__).parent.parent / '.env'
load_dotenv(dotenv_path=env_path)

# Configure API Key - ideally from env var
api_key = os.getenv("GEMINI_API_KEY")
if api_key:
    genai.configure(api_key=api_key)

async def analyze_quotations(quotations_text: list[str]) -> dict:
    if not api_key:
        return {
            "error": "API Key not configured. Please set GEMINI_API_KEY environment variable."
        }
        
    model = genai.GenerativeModel('gemini-2.5-flash-lite')
    
    prompt = f"""
    You are a procurement expert. I have {len(quotations_text)} quotation documents here.
    Please analyze each of them and provide a comparison report.
    
    For each quotation, extract:
    - Vendor Name
    - Total Price
    - Currency
    - Pros (bullet points)
    - Cons (bullet points)
    - A brief summary
    
    Then provide a final recommendation on which one is better and why.
    
    Output the result as valid JSON with this structure:
    {{
      "analyses": [
        {{
          "vendor_name": "...",
          "total_price": 1000.0,
          "currency": "USD",
          "pros": ["..."],
          "cons": ["..."],
          "summary": "..."
        }}
      ],
      "recommendation": "Vendor X is better because...",
      "reasoning": "..."
    }}
    
    Here are the documents text:
    
    """
    
    for i, text in enumerate(quotations_text):
        prompt += f"\n--- Document {i+1} ---\n{text}\n"
        
    try:
        response = model.generate_content(prompt, generation_config={"response_mime_type": "application/json"})
        return json.loads(response.text)
    except Exception as e:
        return {"error": str(e)}

