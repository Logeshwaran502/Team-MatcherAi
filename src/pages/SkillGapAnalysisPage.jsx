import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  GitCompare,
  CheckCircle2,
  XCircle,
  Award,
  BookOpen,
  Clock,
  ExternalLink,
  Users,
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  Flame,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function SkillGapAnalysisPage() {
  const { selectedProject, user, initialProjects, setSelectedProject } = useApp();
  const navigate = useNavigate();

  // Extract user skill names in lowercase for matching
  const userSkillNames = user.skills.map((s) => s.name.toLowerCase());

  // Determine matching vs missing skills based on selected project
  const projectSkills = selectedProject ? selectedProject.requiredSkills : ['React', 'Node.js', 'MongoDB', 'Python', 'Machine Learning', 'Git'];

  const matchedSkills = projectSkills.filter((sk) => userSkillNames.includes(sk.toLowerCase()));
  const missingSkills = projectSkills.filter((sk) => !userSkillNames.includes(sk.toLowerCase()));

  // Calculated match percentage
  const matchPercentage = Math.round((matchedSkills.length / projectSkills.length) * 100);
  const readinessScore = 85;

  const learningRoadmap = [
    { title: 'Google ML Crash Course', provider: 'Google AI', duration: '1 Week', difficulty: 'Beginner', link: 'https://developers.google.com/machine-learning/crash-course' },
    { title: 'Kaggle Machine Learning Intro', provider: 'Kaggle', duration: '4 Days', difficulty: 'Practical', link: 'https://www.kaggle.com/learn' },
    { title: 'Coursera Machine Learning Specialization', provider: 'DeepLearning.AI', duration: '1.5 Weeks', difficulty: 'Advanced', link: 'https://www.coursera.org' }
  ];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Skill Gap Analysis AI" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Main Attraction Header */}
          <div className="p-6 rounded-3xl glass-card border border-cyan-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/60 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Sparkles className="w-48 h-48 text-cyan-400" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold mb-2">
                  <Zap className="w-3.5 h-3.5 fill-cyan-400" /> Core AI Feature • Real-Time Gap Intelligence
                </div>
                <h2 className="text-3xl font-extrabold text-white">Skill Gap Analysis</h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Target Project: <span className="text-cyan-400 font-bold">{selectedProject.title}</span> ({selectedProject.category})
                </p>
              </div>

              {/* Select Project Switcher */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-semibold shrink-0">Switch Target:</span>
                <select
                  value={selectedProject.id}
                  onChange={(e) => {
                    const p = initialProjects.find((x) => x.id === e.target.value);
                    if (p) setSelectedProject(p);
                  }}
                  className="glass-input px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  {initialProjects.map((p) => (
                    <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Dials & High-Level Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* AI Match Percentage Card */}
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-cyan-400" /> Overall Skill Match
                </span>
                <div className="text-5xl font-black text-white mt-2">
                  {matchPercentage}%
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  You possess <span className="text-emerald-400 font-bold">{matchedSkills.length}</span> of {projectSkills.length} required competencies.
                </p>
              </div>

              {/* Gauge Circle */}
              <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="46" stroke="currentColor" strokeWidth="10" className="text-slate-800" fill="transparent" />
                  <circle
                    cx="56"
                    cy="56"
                    r="46"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeDasharray={289}
                    strokeDashoffset={289 * (1 - matchPercentage / 100)}
                    strokeLinecap="round"
                    className="text-cyan-400 transition-all duration-1000"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-xl font-extrabold text-white">{matchPercentage}%</span>
                </div>
              </div>
            </div>

            {/* Project Readiness Score Card */}
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-indigo-400" /> Project Readiness Score
                </span>
                <div className="text-5xl font-black text-indigo-400 mt-2">
                  {readinessScore}%
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Calculated based on past project complexity & framework overlap.
                </p>
              </div>

              <div className="w-24 h-24 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-xl">
                <Flame className="w-12 h-12 animate-pulse" />
              </div>
            </div>

          </div>

          {/* Side-by-Side Comparison Table */}
          <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <GitCompare className="w-5 h-5 text-indigo-400" /> Requirements VS Resume Skills Comparison
                </h3>
                <p className="text-xs text-slate-400">Granular skill verification matrix</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Matched Skills Column */}
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Skills You Have ({matchedSkills.length})
                  </h4>
                </div>

                <div className="space-y-2">
                  {matchedSkills.map((sk) => (
                    <div
                      key={sk}
                      className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/20 flex items-center justify-between text-xs font-semibold text-white"
                    >
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400" /> {sk}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                        Verified ✔
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Missing Skills Column */}
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                <div className="flex items-center justify-between border-b border-rose-500/30 pb-2">
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Missing Skills ({missingSkills.length})
                  </h4>
                </div>

                <div className="space-y-2">
                  {missingSkills.length > 0 ? (
                    missingSkills.map((sk) => (
                      <div
                        key={sk}
                        className="p-3 rounded-xl bg-slate-900/80 border border-rose-500/20 flex items-center justify-between text-xs font-semibold text-white"
                      >
                        <span className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-rose-400" /> {sk}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono">
                          Gap ❌
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-emerald-400 italic">No missing skills! You are 100% matched for this project.</p>
                  )}
                </div>
              </div>

            </div>

            {/* Quick Teammate Match CTA Button */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Find Teammates with Missing Skills</h4>
                  <p className="text-[11px] text-slate-300">
                    AI can recommend teammates who specialize in <span className="text-rose-400 font-bold">{missingSkills.join(', ')}</span>.
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate('/team-recommendations')}
                className="gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shrink-0 shadow-lg shadow-indigo-500/30"
              >
                Find Recommended Teammates <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* AI Learning Roadmap */}
          <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" /> AI Personalised Learning Roadmap
                </h3>
                <p className="text-xs text-slate-400">Curated courses to bridge your missing skills</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/30 w-fit">
                <Clock className="w-4 h-4" /> Estimated Learning Time: 3 Weeks
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {learningRoadmap.map((course, idx) => (
                <div
                  key={course.title}
                  className="p-5 rounded-2xl glass-card border-white/10 bg-slate-950/60 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                        Step 0{idx + 1}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{course.provider}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white">{course.title}</h4>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-cyan-400" /> {course.duration}</span>
                      <span>• {course.difficulty}</span>
                    </div>
                  </div>

                  <a
                    href={course.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-cyan-300 flex items-center justify-center gap-2 transition-colors border border-white/10"
                  >
                    Start Course <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
