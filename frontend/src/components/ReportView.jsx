import React from 'react';

const ReportView = ({ report, onBack }) => {
  const { analyses, recommendation, reasoning } = report;

  return (
    <div className="report-container">
      <h2>Comparison Report</h2>
      
      <div className="cards-grid">
        {analyses.map((item, idx) => (
          <div key={idx} className="analysis-card" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="card-header">
              <h3>{item.vendor_name}</h3>
              <div className="price-tag">
                <span className="currency">{item.currency}</span>
                <span className="amount">{item.total_price.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="card-body">
              <div className="section pros">
                <div className="section-title">Pros</div>
                <ul>
                  {item.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                </ul>
              </div>
              
              <div className="section cons">
                <div className="section-title">Cons</div>
                <ul>
                  {item.cons.map((con, i) => <li key={i}>{con}</li>)}
                </ul>
              </div>

              <div className="section summary">
                <div className="section-title">Summary</div>
                <p>{item.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="recommendation-box">
        <div className="recommendation-content">
          <div className="rec-label">Recommendation</div>
          <p className="highlight">{recommendation}</p>
          <p className="reasoning">{reasoning}</p>
        </div>
      </div>

      <button className="reset-btn" onClick={onBack}>
        Adjust Files / New Analysis
      </button>
    </div>
  );
};

export default ReportView;
