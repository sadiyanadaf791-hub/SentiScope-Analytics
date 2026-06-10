import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Calendar, Activity } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-primary mb-6">User Profile</h2>

      <div className="glass-card overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-r from-primary to-secondary h-32"></div>
        <div className="px-8 pb-8 relative">
          <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-4xl font-bold text-accent absolute -top-12">
            {user?.username?.[0]?.toUpperCase()}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800">{user?.username}</h3>
            <p className="text-gray-500 flex items-center gap-2 mt-1">
              <Mail size={16} /> {user?.email}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                <Calendar size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Member Since</div>
                <div className="font-medium text-gray-800">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Just now'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl">
                <Activity size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Account Status</div>
                <div className="font-medium text-emerald-600">Active - Pro Plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
