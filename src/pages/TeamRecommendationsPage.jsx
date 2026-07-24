import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Sparkles,
  Code2,
  Globe,
  CheckCircle2,
  Send,
  Eye,
  Award,
  ArrowRight,
  ShieldCheck,
  UserPlus
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function TeamRecommendationsPage() {
  const { initialRecommendedTeammates, sentRequests, sendTeammateRequest, selectedProject } = useApp();
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="AI Teammate Recommendations" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Header Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Vector Similarity Engine
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">Recommended Teammates</h2>
              <p className="text-xs text-slate-300 mt-1">
                Matched to complete your project requirements for <span className="text-cyan-400 font-bold">{selectedProject.title}</span>.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                4 Matches Found
              </span>
            </div>
          </div>

          {/* Candidate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialRecommendedTeammates.map((candidate, idx) => {
              const isSent = sentRequests.includes(candidate.id);

              return (
                <motion.div
                  key={candidate.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl glass-card glass-card-hover border-white/15 bg-slate-900/80 flex flex-col justify-between space-y-6"
                >
                  {/* Top Candidate Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500/40 shadow-xl"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {candidate.name}
                        </h3>
                        <p className="text-xs font-semibold text-indigo-400">{candidate.role}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{candidate.experience}</p>
                      </div>
                    </div>

                    {/* Compatibility Badge */}
                    <div className="flex flex-col items-end">
                      <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-extrabold text-xs shadow-lg">
                        {candidate.compatibility}% Match
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono mt-1">Synergy Score</span>
                    </div>
                  </div>

                  {/* AI Rationale Box */}
                  <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-slate-200">
                    <span className="font-bold text-cyan-400 block mb-0.5">AI Rationale:</span>
                    <p className="text-[11px] text-slate-300">{candidate.matchReason}</p>
                  </div>

                  {/* Candidate Skills */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Primary Skills:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {candidate.skills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-950/80 border border-white/10 text-cyan-300"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Handles & Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                      <span className="flex items-center gap-1"><Code2 className="w-3.5 h-3.5 text-slate-300" /> {candidate.github}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedCandidate(candidate)}
                        className="p-2.5 rounded-xl glass-card border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all text-xs font-semibold flex items-center gap-1"
                        title="View Profile"
                      >
                        <Eye className="w-4 h-4 text-cyan-400" />
                        <span className="hidden sm:inline">Profile</span>
                      </button>

                      <button
                        onClick={() => sendTeammateRequest(candidate)}
                        disabled={isSent}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                          isSent
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-default'
                            : 'gradient-btn text-white shadow-lg shadow-indigo-500/30'
                        }`}
                      >
                        {isSent ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" /> Request Sent
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4" /> Send Request
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Profile Details Modal */}
          {selectedCandidate && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-lg w-full p-6 rounded-3xl glass-card border border-white/20 bg-slate-900/95 shadow-2xl space-y-6 relative"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedCandidate.avatar}
                      alt={selectedCandidate.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500/50"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedCandidate.name}</h3>
                      <p className="text-xs text-indigo-400 font-semibold">{selectedCandidate.role}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{selectedCandidate.experience}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCandidate(null)}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10 text-xs">
                    <span className="font-bold text-cyan-400">Match Compatibility: {selectedCandidate.compatibility}%</span>
                    <p className="text-slate-300 mt-1">{selectedCandidate.matchReason}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-300 mb-2">Verified Skill Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCandidate.skills.map((s) => (
                        <span key={s} className="px-3 py-1 rounded-lg text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedCandidate(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      sendTeammateRequest(selectedCandidate);
                      setSelectedCandidate(null);
                    }}
                    className="gradient-btn px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" /> Invite Teammate
                  </button>
                </div>
              </motion.div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
