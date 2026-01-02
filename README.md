# Quotation Analysis Agent 🤖📄

> **Smart procurement decisions in seconds.**

The **Quotation Analysis Agent** is an AI-powered application designed to streamline the vendor selection process. By leveraging the power of **Google Gemini**, it analyzes multiple quotation files (PDF/Text) simultaneously, extracts critical data, and generates a side-by-side comparison report with a final recommendation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.9+-3776ab.svg)
![React](https://img.shields.io/badge/react-18.0.0-61dafb.svg)

## 🌟 Features

- **📂 Multi-File Upload**: Drag and drop multiple quotation documents (PDF, TXT) at once.
- **🧠 AI Analysis**: Automatically extracts Vendor Name, Total Price, Currency, Terms, and Notes.
- **⚖️ Smart Comparison**: Generates a comparative analysis highlighting specific **Pros & Cons** for each vendor.
- **🏆 Strategic Recommendation**: Provides an AI-generated recommendation on which vendor to choose and why.
- **🎨 Premium UI**: A modern, dark-themed interface designed for clarity and ease of use.

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite), Vanilla CSS (Glassmorphism Design)
- **Backend**: FastAPI (Python), Uvicorn
- **AI/ML**: Google Generative AI (Gemini Models)
- **Data Processing**: PyPDF (PDF Parsing)

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Python 3.9+
- A [Google Gemini API Key](https://aistudio.google.com/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/quotation-analysis-agent.git
    cd quotation-analysis-agent
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    pip install -r requirements.txt
    
    # Create .env file and add your API Key
    # contents of .env:
    # GEMINI_API_KEY=your_actual_api_key
    ```
    
    *Run the backend:*
    ```bash
    python -m uvicorn backend.main:app --reload
    ```

3.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    ```

    *Run the frontend:*
    ```bash
    npm run dev
    ```

4.  **Usage**
    - Open your browser at `http://localhost:5173`.
    - Drag and drop 2 or more quotation files.
    - Click **Analyze** and view the report!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
