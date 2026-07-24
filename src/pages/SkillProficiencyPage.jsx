import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Sliders, CheckCircle2, Save, Sparkles, GitCompare, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function SkillProficiencyPage() {
  const { user, updateUserSkills } = useApp();
  const [activeTab, setActiveTab] = useState('All');
  const [editingSkills, setEditingSkills] = useState(user.skills);
  const [isEditing, setIsEditing] = useState(false);

  const categories = ['All', 'Languages', 'Frameworks', 'Databases', 'Tools', 'Soft Skills'];

  const filteredSkills = activeTab === 'All'
    ? editingSkills
    : editingSkills.filter((s) => s.category === activeTab);

  const handleSliderChange = (name, newLevel) => {
    setEditingSkills((prev) =>
      prev.map((s) => (s.name === name ? { ...s, level: parseInt(newLevel) } : s))
    );
  };

  const handleSave = () => {
    updateUserSkills(editingSkills);
    setIsEditing(false);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Skill Proficiency Dashboard" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Header Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                <BarChart3 className="w-4 h-4 text-cyan-400" /> Granular Competency Metrics
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">Skill Proficiency Scorecard</h2>
              <p className="text-xs text-slate-300 mt-1">
                Adjust sliders to test how skill level updates affect your Project Readiness score.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/30"
                >
                  <Save className="w-4 h-4" /> Save Skill Levels
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2.5 rounded-xl glass-card border-white/20 text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4 text-indigo-400" /> Edit / Adjust Skills
                </button>
              )}

              <Link
                to="/skill-gap"
                className="px-4 py-2.5 rounded-xl glass-card border-white/20 text-xs font-semibold text-white hover:bg-white/10 flex items-center gap-2"
              >
                <GitCompare className="w-4 h-4 text-cyan-400" /> Gap Analysis
              </Link>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'glass-card border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((sk) => {
              let colorGradient = 'from-indigo-500 to-purple-500';
              if (sk.level >= 85) colorGradient = 'from-emerald-500 to-cyan-500';
              else if (sk.level < 70) colorGradient = 'from-amber-500 to-rose-500';

              return (
                <motion.div
                  key={sk.name}
                  layout
                  className="p-5 rounded-2xl glass-card border-white/10 bg-slate-900/60 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">{sk.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-white/5 font-mono">
                        {sk.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-extrabold text-white">{sk.level}%</span>
                      {sk.level >= 85 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${colorGradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${sk.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Edit Slider Controls */}
                  {isEditing && (
                    <div className="pt-2 flex items-center gap-3">
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={sk.level}
                        onChange={(e) => handleSliderChange(sk.name, e.target.value)}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </main>
      </div>
    </div>
  );
}
