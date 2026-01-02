import React, { useState } from 'react';
import './index.css';
import UploadSection from './components/UploadSection';
import ReportView from './components/ReportView';
import { analyzeFiles } from './api';

function App() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (files) => {
    setLoading(true);
    setError('');
    try {
      const result = await analyzeFiles(files);
      setReport(result);
    } catch (err) {
      setError(err.message || 'An error occurred during analysis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Quotation Analysis AI</h1>
        <p>Smart procurement decisions in seconds</p>
      </header>

      <main>
        {error && <div className="error-banner">{error}</div>}
        
        {report ? (
          <ReportView report={report} />
        ) : (
          <UploadSection onAnalyze={handleAnalyze} loading={loading} />
        )}
      </main>
    </div>
  );
}

export default App;
