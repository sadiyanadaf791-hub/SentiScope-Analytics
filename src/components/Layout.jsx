import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  MessageSquareText, 
  Upload, 
  BarChart3, 
  CloudRain,
  FileText,
  UserCircle,
  Settings,
  LogOut
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, to, active }) => (
  <Link 
    to={to} 
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-primary text-white shadow-md' 
        : 'text-gray-500 hover:bg-gray-100 hover:text-primary'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </Link>
);

const Layout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
    { icon: MessageSquareText, label: 'Sentiment Analyzer', to: '/analyzer' },
    { icon: Upload, label: 'CSV Upload', to: '/upload' },
    { icon: BarChart3, label: 'Analytics', to: '/analytics' },
    { icon: CloudRain, label: 'Word Cloud', to: '/wordcloud' },
    { icon: FileText, label: 'Reports', to: '/reports' },
  ];

  const bottomItems = [
    { icon: UserCircle, label: 'Profile', to: '/profile' },
    { icon: Settings, label: 'Settings', to: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-gray-100">
            <div className="flex items-center gap-2 text-primary">
              <BarChart3 size={24} className="text-accent" />
              <span className="text-xl font-bold tracking-tight">SentiScope</span>
            </div>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <SidebarItem 
                key={item.to} 
                {...item} 
                active={location.pathname === item.to} 
              />
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-100 space-y-1">
          {bottomItems.map((item) => (
            <SidebarItem 
              key={item.to} 
              {...item} 
              active={location.pathname === item.to} 
            />
          ))}
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 glass-card">
          <h1 className="text-xl font-semibold text-gray-800 capitalize">
            {location.pathname.replace('/', '') || 'Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
              {user?.username?.[0]?.toUpperCase()}
            </div>
            <span className="font-medium text-gray-700 hidden sm:block">{user?.username}</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
