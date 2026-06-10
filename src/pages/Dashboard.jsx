import React, { useState, useEffect } from 'react';
import { 
  Users, 
  ThumbsUp, 
  ThumbsDown, 
  Minus,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import api from '../services/api';

const StatCard = ({ title, value, icon: Icon, colorClass, trend }) => (
  <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-full">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${colorClass}`}>
        <Icon size={24} className="text-white" />
      </div>
      {trend && (
        <span className={`text-sm font-medium flex items-center gap-1 ${trend > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
          {trend > 0 ? <TrendingUp size={16} /> : <TrendingUp size={16} className="rotate-180" />}
          {Math.abs(trend)}%
        </span>
      )}
    </div>
    <div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/dashboard/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-full"><div className="animate-pulse text-primary font-medium">Loading Dashboard...</div></div>;
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Reviews Analyzed" 
          value={stats?.total_reviews || 0} 
          icon={MessageSquare} 
          colorClass="bg-blue-500" 
          trend={+12.5}
        />
        <StatCard 
          title="Positive Sentiment" 
          value={stats?.positive_reviews || 0} 
          icon={ThumbsUp} 
          colorClass="bg-emerald-500" 
          trend={+5.2}
        />
        <StatCard 
          title="Negative Sentiment" 
          value={stats?.negative_reviews || 0} 
          icon={ThumbsDown} 
          colorClass="bg-red-500" 
          trend={-2.4}
        />
        <StatCard 
          title="Neutral Sentiment" 
          value={stats?.neutral_reviews || 0} 
          icon={Minus} 
          colorClass="bg-gray-400" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Analysis List */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-primary">Recent Analyses</h2>
          </div>
          <div className="space-y-4">
            {stats?.recent_analyses?.length > 0 ? (
              stats.recent_analyses.map((analysis) => (
                <div key={analysis.id} className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-gray-800 font-medium truncate pr-4">{analysis.text}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      analysis.sentiment === 'positive' ? 'bg-emerald-100 text-emerald-700' :
                      analysis.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {analysis.sentiment}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 flex justify-between">
                    <span>Confidence: {(analysis.confidence * 100).toFixed(1)}%</span>
                    <span>{new Date(analysis.created_at).toLocaleString()}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">No analyses found. Start analyzing some text!</div>
            )}
          </div>
        </div>

        {/* AI Confidence Metric */}
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-bold text-primary mb-2">Model Confidence</h2>
          <p className="text-sm text-gray-500 mb-8">Average AI prediction confidence score</p>
          
          <div className="relative w-48 h-48 flex items-center justify-center rounded-full border-8 border-gray-100">
            <div 
              className="absolute inset-0 rounded-full border-8 border-accent"
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% ${stats?.average_confidence * 100 || 0}%, 0 ${stats?.average_confidence * 100 || 0}%)`,
                transition: 'clip-path 1s ease-in-out'
              }}
            ></div>
            <div className="text-4xl font-extrabold text-primary">
              {stats?.average_confidence ? (stats.average_confidence * 100).toFixed(0) : 0}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
