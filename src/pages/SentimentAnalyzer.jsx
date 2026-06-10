import React, { useState } from 'react';
import { Send, Activity, Info } from 'lucide-react';
import api from '../services/api';

const SentimentAnalyzer = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/analyze/', { text });
      setResult(response.data);
    } catch (err) {
      setError('Failed to analyze text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="glass-card p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-primary mb-2">Analyze Sentiment</h2>
        <p className="text-gray-500 mb-6">Enter a customer review, comment, or any text to instantly detect its underlying sentiment using our NLP models.</p>
        
        {error && <div className="bg-red-50 text-red-500 p-4 rounded-xl mb-6">{error}</div>}

        <div className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all"
          />
          <div className="flex justify-end">
            <button
              onClick={handleAnalyze}
              disabled={loading || !text.trim()}
              className={`btn-primary flex items-center gap-2 px-6 py-3 rounded-xl ${loading || !text.trim() ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Analyzing...' : (
                <>
                  <Send size={18} /> Analyze Text
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Sentiment Result</h3>
            <div className={`text-4xl font-black uppercase tracking-wider mb-2 ${
              result.sentiment === 'positive' ? 'text-emerald-500' :
              result.sentiment === 'negative' ? 'text-red-500' :
              'text-gray-500'
            }`}>
              {result.sentiment}
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-500 mb-4 flex items-center gap-2">
              <Activity size={20} /> Confidence Score
            </h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-5xl font-bold text-primary">{(result.confidence * 100).toFixed(1)}</span>
              <span className="text-xl text-gray-400 mb-1">%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 mt-4">
              <div 
                className={`h-3 rounded-full ${
                  result.sentiment === 'positive' ? 'bg-emerald-500' :
                  result.sentiment === 'negative' ? 'bg-red-500' :
                  'bg-gray-400'
                }`} 
                style={{ width: `${result.confidence * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-3 flex items-center gap-1">
              <Info size={14} /> The probability that this classification is correct.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalyzer;
