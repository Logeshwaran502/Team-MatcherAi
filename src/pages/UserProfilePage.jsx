import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Code2,
  Globe,
  Download,
  Award,
  Briefcase,
  GraduationCap,
  Save,
  Edit3,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function UserProfilePage() {
  const { user, setUser, addToast } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    title: user.title,
    github: user.github,
    linkedin: user.linkedin
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      ...formData
    }));
    setIsEditing(false);
    addToast('Profile Updated! ✨', 'Your profile details have been saved.', 'success');
  };

  const handleDownloadResume = () => {
    addToast('Downloading Resume PDF', 'TeamMatcher_AI_Resume_Logesh.pdf downloaded.', 'info');
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="User Profile & Resume" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Cover & Profile Header Card */}
          <div className="p-8 rounded-3xl glass-card border border-white/15 bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 shadow-2xl relative overflow-hidden space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-24 h-24 rounded-3xl object-cover ring-4 ring-indigo-500/40 shadow-2xl"
                />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{user.name}</h2>
                  <p className="text-sm font-semibold text-indigo-400 mt-0.5">{user.title}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono mt-2">
                    <span className="flex items-center gap-1"><Code2 className="w-3.5 h-3.5 text-slate-300" /> github.com/{user.github}</span>
                    <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-cyan-400" /> linkedin.com/in/{user.linkedin}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={handleDownloadResume}
                  className="px-5 py-2.5 rounded-xl glass-card border-white/20 text-xs font-bold text-white hover:bg-white/10 flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" /> Download AI Resume PDF
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/30"
                >
                  <Edit3 className="w-4 h-4" /> {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                </button>
              </div>
            </div>

            {/* Edit Profile Form */}
            {isEditing && (
              <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} onSubmit={handleSaveProfile} className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30 space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl glass-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Professional Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl glass-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">GitHub Handle</label>
                    <input
                      type="text"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl glass-input"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">LinkedIn Handle</label>
                    <input
                      type="text"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl glass-input"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="gradient-btn px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Changes
                  </button>
                </div>
              </motion.form>
            )}

          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <Award className="w-4 h-4 text-indigo-400" /> Extracted Skill Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {user.skills.map((s) => (
                  <span key={s.name} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {s.name} ({s.level}%)
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <Briefcase className="w-4 h-4 text-cyan-400" /> Experience & Roles
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                  <h4 className="font-bold text-white">Full Stack Intern @ TechCorp</h4>
                  <p className="text-slate-400 text-[11px]">2025 - Present • Built Java Microservices</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                  <h4 className="font-bold text-white">Lead Frontend Architect @ TeamMatcher</h4>
                  <p className="text-slate-400 text-[11px]">2026 • Designed React Glassmorphism UI</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <GraduationCap className="w-4 h-4 text-emerald-400" /> Education & Badges
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                  <h4 className="font-bold text-white">B.Tech Computer Science & AI</h4>
                  <p className="text-slate-400 text-[11px]">GPA: 3.9 / 4.0 • Expected 2026</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10">
                  <h4 className="font-bold text-white">AWS Cloud Practitioner</h4>
                  <p className="text-slate-400 text-[11px]">Verified Credential #AWS-99214</p>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
