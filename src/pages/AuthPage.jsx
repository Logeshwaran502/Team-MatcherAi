import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cpu, Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Logesh',
    email: 'logesh@teammatcher.ai',
    password: '••••••••'
  });

  const { setUser, addToast } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      name: isRegister ? formData.name : prev.name,
      email: formData.email
    }));

    addToast(
      isRegister ? 'Account Created! 🎉' : 'Welcome Back! 👋',
      `Logged in successfully as ${formData.email}`,
      'success'
    );

    navigate('/dashboard');
  };

  const handleGoogleSignIn = () => {
    addToast('Google Auth Success', 'Signed in with Google Account', 'success');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glowing shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full glass-card border border-white/15 bg-slate-900/80 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl relative z-10"
      >
        {/* Logo Header */}
        <div className="text-center mb-8">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-0.5 mb-3 shadow-lg shadow-indigo-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Cpu className="w-6 h-6 text-indigo-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {isRegister ? 'Create Your Account' : 'Welcome Back to TeamMatcher'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isRegister ? 'Join the next-gen AI team formation network' : 'Sign in to access your AI resume analysis & dashboard'}
          </p>
        </div>

        {/* Auth Toggle Tabs */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-slate-950/60 rounded-xl border border-white/10 mb-6 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setIsRegister(false)}
            className={`py-2 rounded-lg transition-all ${
              !isRegister ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(true)}
            className={`py-2 rounded-lg transition-all ${
              isRegister ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Logesh"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="logesh@teammatcher.ai"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl glass-input text-xs"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full gradient-btn py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 mt-2"
          >
            {isRegister ? 'Create Free Account' : 'Sign In to Dashboard'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[11px] text-slate-400 uppercase font-mono">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2.5 px-4 rounded-xl glass-card border-white/15 bg-slate-950/60 hover:bg-slate-900 transition-all text-xs font-semibold text-slate-200 flex items-center justify-center gap-3"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.3 7.31 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2.0 10.04.0 12s.46 3.8 1.27 5.42l4.01-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Bottom Helper */}
        <p className="text-[11px] text-center text-slate-400 mt-6">
          By signing in, you agree to our{' '}
          <a href="#" className="text-indigo-400 hover:underline">Terms of Service</a> &{' '}
          <a href="#" className="text-indigo-400 hover:underline">Privacy Policy</a>
        </p>
      </motion.div>
    </div>
  );
}
