import React, { useState, useRef } from 'react';
import { UploadCloud, File as FileIcon, CheckCircle, AlertCircle } from 'lucide-react';
import api from '../services/api';

const CsvUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.name.endsWith('.csv')) {
      setFile(selected);
      setError('');
      setResult(null);
    } else {
      setFile(null);
      setError('Please select a valid CSV file.');
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError('');
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/upload/csv', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to upload and process file.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass-card p-10 rounded-2xl text-center border-dashed border-2 border-gray-200">
        <h2 className="text-2xl font-bold text-primary mb-4">Bulk Analysis via CSV</h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Upload a dataset of customer reviews or comments. The CSV must contain a column named "text" or "review".
        </p>

        <div className="flex flex-col items-center justify-center">
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          
          {!file ? (
            <button 
              onClick={() => fileInputRef.current.click()}
              className="flex flex-col items-center justify-center w-64 h-64 border-2 border-dashed border-accent bg-emerald-50 rounded-2xl cursor-pointer hover:bg-emerald-100 transition-colors"
            >
              <UploadCloud size={48} className="text-accent mb-4" />
              <span className="font-medium text-emerald-800">Browse Files</span>
              <span className="text-xs text-emerald-600 mt-2">Supports .CSV up to 5MB</span>
            </button>
          ) : (
            <div className="flex flex-col items-center w-full max-w-sm">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl w-full mb-6 border border-gray-200">
                <FileIcon size={32} className="text-blue-500" />
                <div className="flex-1 text-left truncate">
                  <p className="font-medium text-gray-800 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
                <button 
                  onClick={() => setFile(null)} 
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  ✕
                </button>
              </div>
              <button
                onClick={handleUpload}
                disabled={loading}
                className={`btn-primary w-full py-4 text-lg rounded-xl flex justify-center items-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing Dataset...' : 'Start Analysis'}
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-8 flex items-center justify-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl">
            <AlertCircle size={20} /> {error}
          </div>
        )}

        {result && (
          <div className="mt-8 flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 p-4 rounded-xl border border-emerald-100 animate-in fade-in">
            <CheckCircle size={24} /> 
            <span className="font-medium">{result.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CsvUpload;
