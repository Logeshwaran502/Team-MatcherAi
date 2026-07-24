import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  Target,
  Users,
  Briefcase,
  Clock,
  ArrowUpRight,
  Upload,
  GitCompare,
  Sparkles,
  ChevronRight,
  TrendingUp,
  BarChart2,
  Layers
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

const activityData = [
  { month: 'Jan', activity: 45, matches: 3 },
  { month: 'Feb', activity: 60, matches: 5 },
  { month: 'Mar', activity: 75, matches: 8 },
  { month: 'Apr', activity: 90, matches: 12 },
  { month: 'May', activity: 85, matches: 11 },
  { month: 'Jun', activity: 98, matches: 14 }
];

const skillRadarData = [
  { subject: 'Java', A: 90, fullMark: 100 },
  { subject: 'React', A: 82, fullMark: 100 },
  { subject: 'Node.js', A: 75, fullMark: 100 },
  { subject: 'MongoDB', A: 70, fullMark: 100 },
  { subject: 'Python', A: 60, fullMark: 100 },
  { subject: 'Git', A: 80, fullMark: 100 }
];

export default function DashboardPage() {
  const { user, selectedProject, sentRequests } = useApp();

  const stats = [
    { title: 'Resume Score', value: `${user.resumeScore}/100`, trend: '+6 pts', icon: Award, color: 'from-indigo-500 to-purple-500', link: '/resume-analysis' },
    { title: 'Project Readiness', value: `${user.projectReadiness}%`, trend: '+12%', icon: Target, color: 'from-cyan-500 to-blue-500', link: '/skill-gap' },
    { title: 'Skill Match', value: '92%', trend: 'High Synergy', icon: TrendingUp, color: 'from-emerald-500 to-teal-500', link: '/skill-proficiency' },
    { title: 'Recommended Teams', value: '14 Teams', trend: '4 Active', icon: Users, color: 'from-purple-500 to-pink-500', link: '/team-recommendations' },
    { title: 'Projects Joined', value: '3 Projects', trend: 'CyberGuard AI', icon: Briefcase, color: 'from-amber-500 to-orange-500', link: '/team-formation' },
    { title: 'Pending Requests', value: `${sentRequests.length + 2} Pending`, trend: 'Awaiting Response', icon: Clock, color: 'from-rose-500 to-pink-500', link: '/team-workspace' }
  ];

  const recentActivities = [
    { title: 'Teammate Request Sent to Arun Kumar', time: '15 mins ago', badge: 'Team Request', color: 'bg-indigo-500/20 text-indigo-400' },
    { title: 'Completed Resume Skill Extraction via NLP', time: '1 hour ago', badge: 'AI Analysis', color: 'bg-cyan-500/20 text-cyan-400' },
    { title: 'Skill Gap Analysis evaluated for AI Attendance System', time: '3 hours ago', badge: 'Gap Analysis', color: 'bg-purple-500/20 text-purple-400' },
    { title: 'Assigned Role: Full Stack Lead in CyberGuard AI Squad', time: '1 day ago', badge: 'Team Formation', color: 'bg-emerald-500/20 text-emerald-400' }
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Dashboard Overview" />

        <main className="p-6 space-y-6 max-w-7xl mx-auto w-full">
          
          {/* Greeting Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 via-slate-900/90 to-purple-950/40 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>AI Team Formation Platform</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Hello, {user.name} 👋
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Welcome back! Your resume score is <span className="text-cyan-400 font-bold">88/100</span>. You have <span className="text-indigo-400 font-bold">4 recommended teammates</span> ready to fill your project gaps.
              </p>
            </div>

            <div className="flex items-center gap-3 relative z-10 shrink-0">
              <Link
                to="/upload-resume"
                className="px-4 py-2.5 rounded-xl glass-card border-white/20 text-xs font-semibold text-white hover:bg-white/10 flex items-center gap-2"
              >
                <Upload className="w-4 h-4 text-indigo-400" />
                Update Resume
              </Link>
              <Link
                to="/skill-gap"
                className="gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/30"
              >
                <GitCompare className="w-4 h-4" />
                Run Gap Analysis
              </Link>
            </div>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((st, i) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={st.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={st.link}
                    className="block p-5 rounded-2xl glass-card glass-card-hover border-white/10 bg-slate-900/60 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">{st.title}</span>
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${st.color} p-0.5 shadow-md`}>
                        <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between">
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">{st.value}</h3>
                      <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-0.5">
                        {st.trend}
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Chart 1: Activity & Match Trends */}
            <div className="p-6 rounded-3xl glass-card border-white/10 bg-slate-900/70">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-indigo-400" /> Monthly Activity & Teammate Matches
                  </h3>
                  <p className="text-xs text-slate-400">Match score trajectory over 6 months</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
                  Updated Live
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData}>
                    <defs>
                      <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                    <YAxis stroke="#64748b" fontSize={11} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                    />
                    <Area type="monotone" dataKey="activity" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorActivity)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Skill Radar Distribution */}
            <div className="p-6 rounded-3xl glass-card border-white/10 bg-slate-900/70">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" /> Skill Distribution Radar
                  </h3>
                  <p className="text-xs text-slate-400">Visual breakdown of technical proficiency</p>
                </div>
                <Link to="/skill-proficiency" className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
                  Full View <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="h-64 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillRadarData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" fontSize={9} />
                    <Radar name="Proficiency" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* Recent Activity Stream */}
          <div className="p-6 rounded-3xl glass-card border-white/10 bg-slate-900/70">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">Recent System & AI Activities</h3>
              <Link to="/notifications" className="text-xs text-indigo-400 hover:underline font-semibold">
                View All Notifications
              </Link>
            </div>

            <div className="space-y-3">
              {recentActivities.map((act, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between gap-4 hover:border-white/15 transition-all text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${act.color}`}>
                      {act.badge}
                    </span>
                    <span className="font-medium text-slate-200">{act.title}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 shrink-0">{act.time}</span>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
