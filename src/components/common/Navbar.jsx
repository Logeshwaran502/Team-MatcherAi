import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Moon, Sun, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme } = useApp();
  const location = useLocation();

  const isAuthOrApp = location.pathname.startsWith('/dashboard') || 
                      location.pathname.startsWith('/login') || 
                      location.pathname.startsWith('/register');

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl border-b border-white/10 bg-slate-950/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              TeamMatcher <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">AI</span>
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <Link to="/projects" className="hover:text-white transition-colors">Browse Projects</Link>
          <Link to="/skill-gap" className="hover:text-white transition-colors flex items-center gap-1">
            Skill Gap AI <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {!isAuthOrApp && (
            <>
              <Link
                to="/login"
                className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/dashboard"
                className="gradient-btn px-5 py-2 rounded-xl text-sm font-semibold text-white flex items-center gap-2"
              >
                Launch Platform
                <ArrowRight className="w-4 h-4" />
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}
