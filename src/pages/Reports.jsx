import React from 'react';
import { Download, FileText, File as FileIcon } from 'lucide-react';

const Reports = () => {
  const handleExport = (type) => {
    alert(`Exporting report as ${type}... (Simulated)`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Generated Reports</h2>

      <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center">
        <FileText size={64} className="text-accent mb-6" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Export Analytics Data</h3>
        <p className="text-gray-500 mb-8 max-w-md">
          Download your comprehensive sentiment analysis reports for offline sharing or further processing in other BI tools.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => handleExport('CSV')}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-accent transition-colors w-48 shadow-sm group"
          >
            <FileIcon className="text-gray-400 group-hover:text-accent transition-colors" size={24} />
            <div className="text-left">
              <div className="font-bold text-gray-800">CSV Export</div>
              <div className="text-xs text-gray-500">Raw dataset</div>
            </div>
          </button>

          <button 
            onClick={() => handleExport('PDF')}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-red-500 transition-colors w-48 shadow-sm group"
          >
            <Download className="text-gray-400 group-hover:text-red-500 transition-colors" size={24} />
            <div className="text-left">
              <div className="font-bold text-gray-800">PDF Report</div>
              <div className="text-xs text-gray-500">Visual summary</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
