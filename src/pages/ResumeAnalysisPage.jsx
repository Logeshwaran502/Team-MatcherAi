import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  Sparkles,
  Code2,
  Database,
  Wrench,
  UserCheck,
  FolderKanban,
  FileCheck,
  Trophy,
  ArrowRight,
  BarChart,
  CheckCircle,
  GitCompare
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function ResumeAnalysisPage() {
  const { user } = useApp();

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'C++']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Code2,
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      skills: ['React', 'Node.js', 'Spring Boot', 'Express.js', 'Tailwind CSS']
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
    },
    {
      title: 'Tools & Cloud DevOps',
      icon: Wrench,
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Vite', 'AWS S3']
    },
    {
      title: 'Soft Skills & Leadership',
      icon: UserCheck,
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      skills: ['Communication', 'Problem Solving', 'Team Collaboration', 'Agile / Scrum']
    },
    {
      title: 'Featured Projects Extracted',
      icon: FolderKanban,
      color: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
      skills: ['AI Smart Attendance System', 'E-Commerce Microservices', 'TeamMatcher Frontend Platform']
    },
    {
      title: 'Certifications Verified',
      icon: FileCheck,
      color: 'border-teal-500/40 text-teal-400 bg-teal-500/10',
      skills: ['AWS Certified Cloud Practitioner', 'Oracle Certified Java SE 11 Developer']
    },
    {
      title: 'Achievements',
      icon: Trophy,
      color: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
      skills: ['Winner - Smart India Hackathon 2025', 'Top 5% LeetCode Problem Solver']
    }
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="AI Resume Analysis" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Top Score Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Resume Score Card */}
            <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-tr from-slate-900 via-indigo-950/40 to-slate-900 shadow-2xl flex items-center gap-6">
              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" className="text-slate-800" fill="transparent" />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 * (1 - user.resumeScore / 100)}
                    strokeLinecap="round"
                    className="text-indigo-500 transition-all duration-1000"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-white">{user.resumeScore}</span>
                  <span className="text-[9px] text-slate-400 font-mono">/ 100</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Overall AI Score
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Excellent Candidate Profile</h3>
                <p className="text-xs text-slate-400 mt-1">
                  High keyword density for Full Stack & Java frameworks. Ready for top-tier projects.
                </p>
              </div>
            </div>

            {/* Profile Completion Card */}
            <div className="p-6 rounded-3xl glass-card border-white/10 bg-slate-900/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400">Profile Completion</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-white">92%</div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full mt-3 overflow-hidden border border-white/5">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[92%]" />
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3">Add GitHub project metrics to reach 100% completion.</p>
            </div>

            {/* Experience Level Badge */}
            <div className="p-6 rounded-3xl glass-card border-white/10 bg-slate-900/70 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400">AI Verified Experience Level</span>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-4 py-1.5 rounded-xl font-bold text-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg">
                    Intermediate (2+ Yrs Equivalent)
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] text-slate-300">
                <span className="font-semibold text-cyan-400">AI Rationale:</span> Proven full-stack production delivery, multi-tier database schemas, and microservice integration.
              </div>
            </div>

          </div>

          {/* Quick Action Navigation Bar */}
          <div className="p-4 rounded-2xl glass-card border-white/10 bg-slate-900/40 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-300 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Want to see missing skills for target projects?
            </span>
            <div className="flex items-center gap-3">
              <Link
                to="/skill-proficiency"
                className="px-4 py-2 rounded-xl glass-card border-white/10 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-1.5"
              >
                <BarChart className="w-4 h-4 text-indigo-400" /> Skill Dashboard
              </Link>
              <Link
                to="/skill-gap"
                className="gradient-btn px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2"
              >
                <GitCompare className="w-4 h-4" /> Run Skill Gap Analysis <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Extracted Skills Categorized Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="p-6 rounded-3xl glass-card border-white/10 bg-slate-900/70 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Icon className="w-4 h-4 text-indigo-400" /> {cat.title}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">{cat.skills.length} Extracted</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border backdrop-blur-md shadow-sm transition-all hover:scale-105 ${cat.color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </main>
      </div>
    </div>
  );
}
