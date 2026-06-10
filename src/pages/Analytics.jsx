import React, { useState, useEffect } from 'react';
import { 
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line
} from 'recharts';
import api from '../services/api';

const COLORS = ['#10B981', '#EF4444', '#9CA3AF'];

const Analytics = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/dashboard/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Failed to fetch analytics', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-full"><div className="animate-pulse text-primary font-medium">Loading Analytics...</div></div>;
  }

  const pieData = [
    { name: 'Positive', value: stats?.positive_reviews || 0 },
    { name: 'Negative', value: stats?.negative_reviews || 0 },
    { name: 'Neutral', value: stats?.neutral_reviews || 0 },
  ];

  // Dummy trend data since we don't have historical grouping in this simple backend yet
  const trendData = [
    { name: 'Jan', Positive: 400, Negative: 240, Neutral: 100 },
    { name: 'Feb', Positive: 300, Negative: 139, Neutral: 200 },
    { name: 'Mar', Positive: 200, Negative: 800, Neutral: 150 },
    { name: 'Apr', Positive: 278, Negative: 390, Neutral: 100 },
    { name: 'May', Positive: 189, Negative: 480, Neutral: 80 },
    { name: 'Jun', Positive: 239, Negative: 380, Neutral: 120 },
    { name: 'Jul', Positive: Math.max(100, stats?.positive_reviews || 0), Negative: stats?.negative_reviews || 0, Neutral: stats?.neutral_reviews || 0 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Sentiment Analytics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Distribution Pie Chart */}
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Sentiment Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Volume Bar Chart */}
        <div className="glass-card p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Review Volume (Monthly)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <RechartsTooltip cursor={{fill: '#F3F4F6'}} />
                <Legend />
                <Bar dataKey="Positive" stackId="a" fill="#10B981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Neutral" stackId="a" fill="#9CA3AF" />
                <Bar dataKey="Negative" stackId="a" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Trend Line Chart */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Sentiment Trends Over Time</h3>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <RechartsTooltip />
                <Legend />
                <Line type="monotone" dataKey="Positive" stroke="#10B981" strokeWidth={3} dot={{r: 4}} activeDot={{r: 8}} />
                <Line type="monotone" dataKey="Negative" stroke="#EF4444" strokeWidth={3} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
