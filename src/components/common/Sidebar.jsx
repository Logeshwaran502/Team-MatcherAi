import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Upload,
  FileSearch,
  BarChart3,
  FolderGit2,
  GitCompare,
  Users,
  ShieldCheck,
  Briefcase,
  Sparkles,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Cpu
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { notifications, user } = useApp();
  const navigate = useNavigate();

  const unreadCount = notifications.filter((n) => !n.read).length;

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Resume Upload', icon: Upload, path: '/upload-resume' },
    { label: 'AI Resume Analysis', icon: FileSearch, path: '/resume-analysis' },
    { label: 'Skill Proficiency', icon: BarChart3, path: '/skill-proficiency' },
    { label: 'Project Requirements', icon: FolderGit2, path: '/projects' },
    { label: 'Skill Gap Analysis', icon: GitCompare, path: '/skill-gap', badge: 'Highlight' },
    { label: 'AI Recommendations', icon: Users, path: '/team-recommendations' },
    { label: 'Team Formation', icon: ShieldCheck, path: '/team-formation' },
    { label: 'Team Workspace', icon: Briefcase, path: '/team-workspace' },
    { label: 'AI Insights', icon: Sparkles, path: '/ai-insights' },
    { label: 'Notifications', icon: Bell, path: '/notifications', count: unreadCount },
    { label: 'User Profile', icon: User, path: '/profile' },
    { label: 'Settings', icon: Settings, path: '/settings' }
  ];

  return (
    <aside
      className={`relative z-30 flex flex-col border-r border-white/10 bg-slate-950/80 backdrop-blur-2xl transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-7 z-40 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-slate-300 hover:text-white transition-colors"
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Brand Header */}
      <div className="flex h-16 items-center gap-3 px-5 border-b border-white/10">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          {!collapsed && (
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-1">
              TeamMatcher <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">AI</span>
            </span>
          )}
        </Link>
      </div>

      {/* Nav Menu */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/20 text-white border border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`
              }
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </div>

              {!collapsed && (
                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  )}
                  {item.count > 0 && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-rose-500 text-white">
                      {item.count}
                    </span>
                  )}
                </div>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* User Footer */}
      <div className="p-3 border-t border-white/10">
        <div className={`flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-white/5 ${collapsed ? 'justify-center' : ''}`}>
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-lg object-cover ring-2 ring-indigo-500/30"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">{user.name}</p>
              <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
            </div>
          )}
          {!collapsed && (
            <button
              onClick={() => navigate('/login')}
              className="text-slate-400 hover:text-rose-400 transition-colors p-1"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
