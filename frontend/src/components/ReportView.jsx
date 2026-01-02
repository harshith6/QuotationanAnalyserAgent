import React from 'react';

const ReportView = ({ report }) => {
  const { analyses, recommendation, reasoning } = report;

  return (
    <div className="report-container">
      <h2>Comparison Report</h2>
      
      <div className="cards-grid">
        {analyses.map((item, idx) => (
          <div key={idx} className="analysis-card">
            <h3>{item.vendor_name}</h3>
            <div className="price-tag">
              {item.currency} {item.total_price.toLocaleString()}
            </div>
            
            <div className="section">
              <h4>Pros</h4>
              <ul>
                {item.pros.map((pro, i) => <li key={i}>{pro}</li>)}
              </ul>
            </div>
            
            <div className="section">
              <h4>Cons</h4>
              <ul>
                {item.cons.map((con, i) => <li key={i}>{con}</li>)}
              </ul>
            </div>

            <p className="summary">{item.summary}</p>
          </div>
        ))}
      </div>

      <div className="recommendation-box">
        <h3>AI Recommendation</h3>
        <p className="highlight">{recommendation}</p>
        <p className="reasoning">{reasoning}</p>
      </div>

      <button className="reset-btn" onClick={() => window.location.reload()}>Analyze New Files</button>
    </div>
  );
};

export default ReportView;
