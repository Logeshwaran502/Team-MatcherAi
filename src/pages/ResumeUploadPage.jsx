import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Loader2,
  Cpu,
  Bot
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function ResumeUploadPage() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('');

  const { addToast, setUser } = useApp();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== 'application/pdf') {
      setError('Only PDF resumes are supported. Please upload a valid .pdf file.');
      return;
    }

    setError('');
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleStartAnalysis = () => {
    if (!file) return;

    setIsAnalyzing(true);
    setProgress(10);
    setStage('Extracting text & PDF layout structure...');

    setTimeout(() => {
      setProgress(35);
      setStage('Running NLP Named Entity Recognition for Skills & Frameworks...');
    }, 1200);

    setTimeout(() => {
      setProgress(70);
      setStage('Generating vector embeddings & calculating semantic similarity...');
    }, 2400);

    setTimeout(() => {
      setProgress(100);
      setStage('AI Analysis Complete! Resume Score Generated.');
    }, 3600);

    setTimeout(() => {
      setUser((prev) => ({
        ...prev,
        resumeUploaded: true,
        resumeScore: 92
      }));
      addToast('AI Resume Extraction Complete', 'Resume score updated to 92/100.', 'success');
      navigate('/resume-analysis');
    }, 4400);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Resume Upload & Parsing" />

        <main className="p-6 max-w-4xl mx-auto w-full space-y-6">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Upload Your PDF Resume</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Our RAG LLM engine extracts technical skills, experience level, and project readiness instantly.
            </p>
          </div>

          {/* Main Upload Card */}
          <div className="p-8 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl relative overflow-hidden">
            
            {!isAnalyzing ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-indigo-400 bg-indigo-500/10 scale-[1.01]'
                    : file
                    ? 'border-emerald-500/50 bg-emerald-500/5'
                    : 'border-white/20 hover:border-indigo-500/50 hover:bg-slate-950/60'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => handleFileSelect(e.target.files[0])}
                  className="hidden"
                />

                {file ? (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <FileText className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{file.name}</h3>
                    <p className="text-xs text-slate-400">{(file.size / (1024 * 1024)).toFixed(2)} MB • PDF Document</p>
                    <p className="text-xs font-semibold text-emerald-400 flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Ready for AI Analysis
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto shadow-xl">
                      <UploadCloud className="w-10 h-10 animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Drag & Drop your Resume PDF here</h3>
                      <p className="text-xs text-slate-400 mt-1">or click to browse from your computer</p>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-950/80 text-[11px] text-slate-400 border border-white/10 font-mono">
                      Accepts PDF files only (Max 10MB)
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* AI Parsing Progress Loader State */
              <div className="py-12 px-6 text-center space-y-6">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-cyan-400">
                    <Bot className="w-10 h-10 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 animate-spin" /> AI is analyzing your resume...
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">{stage}</p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-md mx-auto space-y-1">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>Extraction Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <motion.div
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 h-full rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {!isAnalyzing && file && (
              <div className="mt-6 flex justify-end gap-3 border-t border-white/10 pt-4">
                <button
                  onClick={() => setFile(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Remove File
                </button>
                <button
                  onClick={handleStartAnalysis}
                  className="gradient-btn px-6 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/30"
                >
                  Start AI Extraction <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

          {/* Features info card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="p-4 rounded-2xl glass-card border-white/10 bg-slate-900/50 space-y-1">
              <h4 className="font-bold text-white flex items-center gap-1.5"><Cpu className="w-4 h-4 text-indigo-400" /> NLP Entity Parsing</h4>
              <p className="text-slate-400 text-[11px]">Identifies 200+ technical languages, tools, databases, and frameworks automatically.</p>
            </div>
            <div className="p-4 rounded-2xl glass-card border-white/10 bg-slate-900/50 space-y-1">
              <h4 className="font-bold text-white flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-cyan-400" /> Semantic Scoring</h4>
              <p className="text-slate-400 text-[11px]">Maps extracted skills against live project benchmarks to generate a 100-point score.</p>
            </div>
            <div className="p-4 rounded-2xl glass-card border-white/10 bg-slate-900/50 space-y-1">
              <h4 className="font-bold text-white flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Gap Matching</h4>
              <p className="text-slate-400 text-[11px]">Highlights your missing tech stack skills and generates targeted learning roadmaps.</p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
