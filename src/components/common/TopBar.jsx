import React, { useState } from 'react';
import { Search, Bell, Sun, Moon, Sparkles, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ title = 'Dashboard' }) {
  const { theme, toggleTheme, notifications, markAllNotificationsAsRead, user } = useApp();
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const navigate = useNavigate();

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-white/10 bg-slate-950/70 px-6 backdrop-blur-xl">
      
      {/* Title & Search Bar */}
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          {title}
        </h1>

        <div className="relative hidden md:block w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects, skills, teammates..."
            className="w-full pl-9 pr-4 py-1.5 rounded-xl glass-input text-xs"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        
        {/* AI Assistant Quick Status */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>AI Assistant Ready</span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifMenu(!showNotifMenu)}
            className="relative p-2 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-slate-950 animate-ping" />
            )}
          </button>

          {showNotifMenu && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl glass-card border border-white/15 bg-slate-900/95 p-4 shadow-2xl z-50">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">Notifications</h3>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllNotificationsAsRead}
                    className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" /> Mark all read
                  </button>
                )}
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {notifications.slice(0, 4).map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      setShowNotifMenu(false);
                      navigate('/notifications');
                    }}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      n.read
                        ? 'bg-slate-900/40 border-white/5 text-slate-400'
                        : 'bg-indigo-950/40 border-indigo-500/30 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">{n.title}</span>
                      <span className="text-[10px] text-slate-400">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">{n.message}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setShowNotifMenu(false);
                  navigate('/notifications');
                }}
                className="w-full mt-3 pt-2 text-center text-xs text-indigo-400 hover:text-indigo-300 font-medium border-t border-white/10"
              >
                View all notifications →
              </button>
            </div>
          )}
        </div>

        {/* User Avatar Menu */}
        <div
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 cursor-pointer pl-2 border-l border-white/10"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-xl object-cover ring-2 ring-indigo-500/40 hover:scale-105 transition-transform"
          />
        </div>

      </div>

    </header>
  );
}
