import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Play,
  ArrowRight,
  FileText,
  GitCompare,
  Users,
  Target,
  Award,
  Zap,
  CheckCircle2,
  Star,
  Globe,
  Share2,
  Code2,
  Cpu,
  Layers,
  Search,
  Bot
} from 'lucide-react';
import Navbar from '../components/common/Navbar';

export default function LandingPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const features = [
    {
      icon: FileText,
      title: 'AI Resume Analysis',
      desc: 'Parses PDFs with NLP & LLM embeddings to automatically extract skills, tools, frameworks, and experience levels.'
    },
    {
      icon: GitCompare,
      title: 'Skill Gap Detection',
      desc: 'Head-to-head comparison of project requirements vs your resume to pinpoint exact missing technical competencies.'
    },
    {
      icon: Users,
      title: 'AI Team Matching',
      desc: 'Semantic vector similarity engine matches team members whose skills complete your project requirements.'
    },
    {
      icon: Award,
      title: 'Resume Scoring',
      desc: 'Get an instant 100-point AI quality score based on project relevance, technical depth, and industry standards.'
    },
    {
      icon: Target,
      title: 'Project Readiness Score',
      desc: 'Algorithmic readiness score forecasting your success percentage before starting any software project.'
    },
    {
      icon: Zap,
      title: 'Smart Recommendations',
      desc: 'AI-generated personalized learning roadmaps with curated course links and completion time estimates.'
    }
  ];

  const steps = [
    { num: '01', title: 'Upload Resume', desc: 'Drag and drop your PDF resume for instant AI parsing.' },
    { num: '02', title: 'AI Extracts Skills', desc: 'NLP algorithms extract technologies, frameworks, and soft skills.' },
    { num: '03', title: 'Resume Score Generated', desc: 'Receive your comprehensive resume score and proficiency metrics.' },
    { num: '04', title: 'Compare Requirements', desc: 'Select target projects and evaluate missing skill gaps.' },
    { num: '05', title: 'AI Finds Teammates', desc: 'Find complementary teammates tailored to fill missing gaps.' },
    { num: '06', title: 'Build Your Team', desc: 'Form your dream hackathon or enterprise project team with high synergy.' }
  ];

  const testimonials = [
    {
      quote: "TeamMatcher AI matched us in 2 minutes for HackMIT. We had 100% skill coverage and won 1st Place overall!",
      name: "Siddharth Rao",
      role: "Lead Full Stack Dev @ Meta",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
    },
    {
      quote: "The Skill Gap Analysis gave me a 3-week learning roadmap for PyTorch. I learned it, got recommended to an AI team, and shipped an MVP.",
      name: "Ananya Deshmukh",
      role: "AI Research Scholar",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
    },
    {
      quote: "Finally, a platform that feels like Vercel and Linear instead of clunky legacy job boards. Absolutely essential for hackathons.",
      name: "Vikram Malhotra",
      role: "Product Manager @ Stripe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-8 shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span>Next-Gen RAG & Semantic Team Formation AI v2.4</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight"
          >
            Build the Perfect Team with <span className="gradient-text">AI Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            AI-powered teammate recommendations using Resume Analysis, Skill Gap Detection, and RAG-based Semantic Matching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/dashboard"
              className="gradient-btn px-8 py-4 rounded-2xl text-base font-bold text-white flex items-center gap-3 shadow-2xl shadow-indigo-500/30"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setShowDemoModal(true)}
              className="px-8 py-4 rounded-2xl glass-card text-base font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-all flex items-center gap-3 border-white/15"
            >
              <Play className="w-5 h-5 text-cyan-400 fill-cyan-400" />
              Watch Interactive Demo
            </button>
          </motion.div>

          {/* Floating UI Hero Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 relative max-w-5xl mx-auto rounded-3xl glass-card border-white/15 p-4 sm:p-6 shadow-2xl shadow-indigo-950/50 bg-slate-900/80 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-xs text-slate-400 font-mono bg-slate-950/60 px-4 py-1 rounded-full border border-white/5">
                https://teammatcher.ai/skill-gap/ai-attendance-system
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Cpu className="w-4 h-4 text-indigo-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400">Resume Score</span>
                  <Award className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-3xl font-extrabold text-white">88 <span className="text-xs text-emerald-400 font-normal">/ 100</span></div>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-[88%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400">Project Match</span>
                  <Target className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-3xl font-extrabold text-cyan-400">83%</div>
                <p className="text-[11px] text-slate-400 mt-2">Target: AI Attendance System</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-400">AI Teammate Synergy</span>
                  <Users className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-3xl font-extrabold text-purple-400">95%</div>
                <p className="text-[11px] text-slate-400 mt-2">Recommended: Arun (ML Lead)</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden lg:flex items-center gap-3 p-4 rounded-2xl glass-card border border-indigo-500/40 bg-slate-900/90 shadow-2xl backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Skill Gap Resolved</p>
                <p className="text-[11px] text-slate-400">Arun Kumar fills Machine Learning gap</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Feature Cards Grid */}
      <section id="features" className="py-24 relative bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Architected for Speed & Accuracy</h2>
            <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">Supercharge your Team Formation with AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl glass-card glass-card-hover border-white/10 bg-slate-900/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-indigo-400 font-semibold gap-1">
                    Explore feature <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section id="how-it-works" className="py-24 bg-slate-900/60 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Seamless 6-Step Workflow</h2>
            <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">How TeamMatcher AI Works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-card border-white/10 bg-slate-950/70 relative overflow-hidden group hover:border-indigo-500/40 transition-all"
              >
                <div className="text-5xl font-black text-slate-800 group-hover:text-indigo-500/20 transition-colors absolute top-4 right-4">
                  {step.num}
                </div>
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-extrabold text-white">Loved by Hackers & Engineers Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl glass-card border-white/10 bg-slate-900/40 flex flex-col justify-between"
              >
                <p className="text-sm text-slate-300 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/40" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-slate-950 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-white">TeamMatcher AI</span>
            <span>© 2026 TeamMatcher Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><Code2 className="w-4 h-4" /> GitHub</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><Share2 className="w-4 h-4" /> Twitter</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1"><Globe className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
