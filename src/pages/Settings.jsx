import React from 'react';
import { Moon, Sun, Bell, Lock, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-primary font-medium rounded-xl shadow-sm border border-gray-100">
            <Globe size={20} /> General
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 font-medium rounded-xl transition-colors">
            <Lock size={20} /> Security
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 font-medium rounded-xl transition-colors">
            <Bell size={20} /> Notifications
          </button>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-100 pb-4">Theme Preferences</h3>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-800">Interface Theme</div>
                <div className="text-sm text-gray-500">Select your preferred color theme</div>
              </div>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-primary font-medium">
                  <Sun size={16} /> Light
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-primary rounded-lg font-medium transition-colors">
                  <Moon size={16} /> Dark
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-100 pb-4">Account Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">Marketing Emails</div>
                  <div className="text-sm text-gray-500">Receive product updates and offers</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">Weekly Reports</div>
                  <div className="text-sm text-gray-500">Receive weekly sentiment summaries</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
