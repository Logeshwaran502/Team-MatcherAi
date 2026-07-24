import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle2, Sparkles, FolderGit2, Users, Check, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function NotificationsPage() {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredNotifications = filter === 'all'
    ? notifications
    : notifications.filter((n) => n.type === filter);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Notification Feed" />

        <main className="p-6 max-w-4xl mx-auto w-full space-y-6">
          
          {/* Header Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-between gap-4 shadow-2xl">
            <div>
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                <Bell className="w-6 h-6 text-indigo-400" /> System Notifications
              </h2>
              <p className="text-xs text-slate-300 mt-1">Real-time alerts for teammate requests, resume scores, and project updates.</p>
            </div>

            <button
              onClick={markAllNotificationsAsRead}
              className="px-4 py-2 rounded-xl glass-card border-white/15 text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" /> Mark All Read
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-4 text-xs">
            {[
              { id: 'all', label: 'All Notifications' },
              { id: 'team', label: 'Team Invites' },
              { id: 'project', label: 'Projects' },
              { id: 'ai', label: 'AI Suggestions' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  filter === t.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'glass-card border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Notification Items List */}
          <div className="space-y-3">
            {filteredNotifications.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-4 rounded-2xl glass-card border transition-all flex items-start justify-between gap-4 ${
                  item.read
                    ? 'border-white/5 bg-slate-900/40 text-slate-400'
                    : 'border-indigo-500/40 bg-slate-900/90 text-white shadow-xl'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    {item.type === 'team' && <Users className="w-5 h-5" />}
                    {item.type === 'project' && <FolderGit2 className="w-5 h-5" />}
                    {item.type === 'ai' && <Sparkles className="w-5 h-5 text-cyan-400" />}
                    {item.type === 'system' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 mt-1">{item.message}</p>
                    <span className="text-[10px] text-slate-500 font-mono mt-2 block">{item.time}</span>
                  </div>
                </div>

                {!item.read && (
                  <button
                    onClick={() => markNotificationAsRead(item.id)}
                    className="text-xs text-indigo-400 hover:underline shrink-0"
                  >
                    Mark as Read
                  </button>
                )}
              </motion.div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
