import React, { useRef, useState } from 'react';

const UploadSection = ({ onAnalyze, loading }) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleRemove = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (files.length > 0) {
      onAnalyze(files);
    }
  };

  return (
    <div className="upload-container">
      <div 
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="icon">📄</div>
        <h3>Drag & Drop Quotation Files Here</h3>
        <p>or click to browse</p>
        <input 
          type="file" 
          multiple 
          onChange={handleFileChange} 
          ref={fileInputRef} 
          hidden 
        />
      </div>

      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <span>{file.name}</span>
              <button className="remove-btn" onClick={() => handleRemove(index)}>×</button>
            </div>
          ))}
        </div>
      )
      }

      <button 
        className="analyze-btn" 
        onClick={handleSubmit}
        disabled={files.length < 2 || loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Quotations'}
      </button>
      {files.length === 1 && <p className="hint">Please upload at least 2 files to compare.</p>}
    </div>
  );
};

export default UploadSection;
