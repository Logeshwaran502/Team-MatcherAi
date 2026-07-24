import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FolderGit2, Users, Cpu, GitCompare, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function ProjectRequirementsPage() {
  const { initialProjects, setSelectedProject, addToast } = useApp();
  const navigate = useNavigate();

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    addToast('Project Selected 🎯', `Skill Gap Analysis loaded for ${project.title}.`, 'info');
    navigate('/skill-gap');
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Project Requirements Catalog" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Header Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                <FolderGit2 className="w-4 h-4 text-cyan-400" /> Active Hackathon & Project Catalog
              </div>
              <h2 className="text-2xl font-extrabold text-white mt-1">Target Project Requirements</h2>
              <p className="text-xs text-slate-300 mt-1">
                Select any software architecture requirement to evaluate your skill gaps and find matching teammates.
              </p>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl glass-card glass-card-hover border-white/15 bg-slate-900/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30 shrink-0">
                      {project.difficulty}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4 text-cyan-400" /> {project.teamSize}</span>
                    <span className="flex items-center gap-1"><Cpu className="w-4 h-4 text-indigo-400" /> RAG Verified</span>
                  </div>

                  {/* Skill Badges */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Required Tech Stack:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.requiredSkills.map((sk) => (
                        <span
                          key={sk}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-950/80 border border-white/10 text-cyan-300"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Open Roles: {project.recommendedRoles.slice(0, 2).join(', ')}</span>
                  <button
                    onClick={() => handleSelectProject(project)}
                    className="gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/25"
                  >
                    Analyze My Resume <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
