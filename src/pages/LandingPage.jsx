import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, MessageSquareText, Zap, Shield, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-primary">
          <BarChart3 size={28} className="text-accent" />
          <span className="text-2xl font-bold tracking-tight">SentiScope</span>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="btn-secondary">Login</Link>
          <Link to="/register" className="btn-primary">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight mb-6">
          Customer Feedback Intelligence Platform
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          Transform raw feedback into actionable business insights. Analyze sentiment, discover trends, and make data-driven decisions with our powerful ML-driven analytics suite.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register" className="bg-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-secondary transition flex items-center justify-center gap-2">
            Start Analyzing Now <ChevronRight size={20} />
          </Link>
          <Link to="#features" className="btn-secondary px-8 py-4 text-lg">
            View Features
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-gray-500 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50M+</div>
              <div className="text-gray-500 font-medium">Reviews Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">Real-time</div>
              <div className="text-gray-500 font-medium">Processing Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Enterprise-Grade Analytics</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Everything you need to understand your customers at scale, built with modern AI technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-accent mb-6">
              <MessageSquareText size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Sentiment Analysis</h3>
            <p className="text-gray-500 leading-relaxed">Automatically categorize feedback into positive, negative, and neutral sentiments with our advanced ML models.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Real-time Processing</h3>
            <p className="text-gray-500 leading-relaxed">Process bulk CSV uploads in seconds and get instant visual feedback through interactive dashboards.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-6">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Secure & Reliable</h3>
            <p className="text-gray-500 leading-relaxed">Your data is secured with enterprise-grade encryption and isolated tenant architecture.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BarChart3 size={24} className="text-accent" />
            <span className="text-xl font-bold tracking-tight">SentiScope</span>
          </div>
          <p className="text-gray-400 mb-6">© 2026 SentiScope Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
