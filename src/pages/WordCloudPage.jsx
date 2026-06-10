import React, { useState, useEffect } from 'react';
import { CloudRain } from 'lucide-react';
import api from '../services/api';

const WordCloudPage = () => {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const response = await api.get('/analyze/wordcloud');
        setKeywords(response.data);
      } catch (error) {
        console.error('Failed to fetch keywords', error);
      } finally {
        setLoading(false);
      }
    };
    fetchKeywords();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-full"><div className="animate-pulse text-primary font-medium">Extracting Keywords...</div></div>;
  }

  const maxVal = Math.max(...keywords.map(k => k.value), 1);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Keyword Intelligence</h2>
      </div>

      <div className="glass-card p-10 rounded-2xl min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">
        {keywords.length === 0 ? (
          <div className="text-center text-gray-500">
            <CloudRain size={48} className="mx-auto text-gray-300 mb-4" />
            <p>Not enough data to generate word cloud.</p>
            <p className="text-sm">Try analyzing more text or uploading a CSV dataset.</p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-4 p-8 w-full h-full content-center">
            {keywords.map((word, i) => {
              // Calculate relative size between 1rem and 4rem
              const size = 1 + (word.value / maxVal) * 3;
              // Alternate colors
              const colors = ['text-primary', 'text-accent', 'text-blue-500', 'text-purple-500', 'text-gray-500'];
              const color = colors[i % colors.length];
              
              return (
                <span 
                  key={i} 
                  className={`font-bold inline-block hover:scale-110 transition-transform cursor-pointer ${color}`}
                  style={{ fontSize: `${size}rem`, opacity: 0.7 + (word.value / maxVal) * 0.3 }}
                  title={`Occurrences: ${word.value}`}
                >
                  {word.text}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {keywords.length > 0 && (
        <div className="glass-card p-6 rounded-2xl mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Top Trending Terms</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.slice(0, 10).map((k, i) => (
              <div key={i} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg flex items-center gap-3">
                <span className="font-semibold text-gray-700">{k.text}</span>
                <span className="bg-white px-2 py-1 rounded text-xs font-bold text-accent shadow-sm">{k.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WordCloudPage;
