from pydantic import BaseModel
from typing import List, Optional

class QuotationAnalysis(BaseModel):
    vendor_name: str
    total_price: float
    currency: str
    pros: List[str]
    cons: List[str]
    summary: str

class ComparisonReport(BaseModel):
    analyses: List[QuotationAnalysis]
    recommendation: str
    reasoning: str
