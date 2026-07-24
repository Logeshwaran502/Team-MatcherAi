import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  TrendingUp,
  CheckCircle2,
  Users,
  Briefcase,
  Sparkles,
  ArrowRight,
  UserCheck,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function TeamFormationPage() {
  const { activeTeam } = useApp();

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Team Formation & Synergy Engine" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Header Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Active Roster & Role Matrix
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">{activeTeam.name}</h2>
              <p className="text-xs text-slate-300 mt-1">
                Target Project: <span className="text-cyan-400 font-bold">{activeTeam.project}</span>
              </p>
            </div>

            <Link
              to="/team-workspace"
              className="gradient-btn px-6 py-3 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/30 shrink-0"
            >
              Open Team Workspace <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Overall Compatibility Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metric 1 */}
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Overall Team Score</span>
                <div className="text-4xl font-black text-white mt-2">{activeTeam.overallScore}%</div>
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ideal Skill Balance
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-extrabold text-xl shadow-xl">
                <Award className="w-8 h-8 text-indigo-400" />
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Success Prediction</span>
                <div className="text-4xl font-black text-cyan-400 mt-2">{activeTeam.successPrediction}%</div>
                <p className="text-xs text-slate-300 mt-1">Based on benchmark hackathons</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-extrabold text-xl shadow-xl">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Skill Coverage</span>
                <div className="text-4xl font-black text-emerald-400 mt-2">{activeTeam.coverage}%</div>
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 0 Missing Competencies
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold text-xl shadow-xl">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

          </div>

          {/* Members Breakdown Cards */}
          <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" /> Confirmed Team Roster ({activeTeam.members.length} Members)
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                All Requests Accepted
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeTeam.members.map((member, i) => (
                <div
                  key={member.name}
                  className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 flex items-center justify-between gap-4 hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-xl object-cover ring-2 ring-indigo-500/40"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-400">{member.role}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                    {member.status}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
