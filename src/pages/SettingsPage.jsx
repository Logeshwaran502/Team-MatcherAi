import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Settings as SettingsIcon,
  Moon,
  Sun,
  Bell,
  Globe,
  Shield,
  Key,
  LogOut,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function SettingsPage() {
  const { theme, toggleTheme, addToast } = useApp();
  const navigate = useNavigate();

  const [notifSettings, setNotifSettings] = useState({
    emailAlerts: true,
    teamInvites: true,
    aiSuggestions: true
  });

  const [twoFactor, setTwoFactor] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleSaveSettings = () => {
    addToast('Settings Saved', 'Your system preferences have been updated.', 'success');
  };

  const handleLogout = () => {
    addToast('Logged Out', 'You have been signed out safely.', 'info');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Account & System Settings" />

        <main className="p-6 max-w-4xl mx-auto w-full space-y-6">
          
          {/* Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-between gap-4 shadow-2xl">
            <div>
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                <SettingsIcon className="w-6 h-6 text-indigo-400" /> Platform Settings
              </h2>
              <p className="text-xs text-slate-300 mt-1">Manage themes, notification preferences, security, and account settings.</p>
            </div>

            <button
              onClick={handleSaveSettings}
              className="gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg shadow-indigo-500/30 shrink-0"
            >
              Save Settings
            </button>
          </div>

          {/* Setting Section 1: Appearance & Theme */}
          <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              {theme === 'dark' ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-400" />} Theme & Appearance
            </h3>

            <div className="flex items-center justify-between text-xs">
              <div>
                <h4 className="font-bold text-white">Active Theme Mode</h4>
                <p className="text-slate-400 mt-0.5">Toggle between dark mode glassmorphism and clean light mode.</p>
              </div>

              <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded-xl glass-card border-white/20 text-xs font-bold text-white hover:bg-white/10 flex items-center gap-2"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" /> Switch to Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-400" /> Switch to Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Setting Section 2: Notifications */}
          <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Bell className="w-4 h-4 text-cyan-400" /> Notification Preferences
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-white/10">
                <div>
                  <h4 className="font-bold text-white">Email Digest & Teammate Alerts</h4>
                  <p className="text-slate-400">Receive email alerts when candidates accept team invitations.</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifSettings.emailAlerts}
                  onChange={(e) => setNotifSettings({ ...notifSettings, emailAlerts: e.target.checked })}
                  className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-white/10">
                <div>
                  <h4 className="font-bold text-white">AI Skill Gap Recommendations</h4>
                  <p className="text-slate-400">Get notified when new learning roadmaps match your missing skills.</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifSettings.aiSuggestions}
                  onChange={(e) => setNotifSettings({ ...notifSettings, aiSuggestions: e.target.checked })}
                  className="w-4 h-4 accent-indigo-500 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Setting Section 3: Language & Localization */}
          <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Globe className="w-4 h-4 text-emerald-400" /> Language & Regional Settings
            </h3>

            <div className="flex items-center justify-between text-xs">
              <div>
                <h4 className="font-bold text-white">Display Language</h4>
                <p className="text-slate-400 mt-0.5">Select preferred language for AI analysis reports.</p>
              </div>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="glass-input px-4 py-2 rounded-xl text-xs font-semibold"
              >
                <option value="English" className="bg-slate-900">English (US)</option>
                <option value="Spanish" className="bg-slate-900">Español</option>
                <option value="French" className="bg-slate-900">Français</option>
                <option value="German" className="bg-slate-900">Deutsch</option>
              </select>
            </div>
          </div>

          {/* Setting Section 4: Security & Logout */}
          <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Shield className="w-4 h-4 text-rose-400" /> Security & Session Management
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-white/10">
                <div>
                  <h4 className="font-bold text-white">Two-Factor Authentication (2FA)</h4>
                  <p className="text-slate-400">Add an extra layer of security using Google Authenticator.</p>
                </div>
                <button
                  onClick={() => {
                    setTwoFactor(!twoFactor);
                    addToast(twoFactor ? '2FA Disabled' : '2FA Enabled', 'Two-Factor security state updated.', 'info');
                  }}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    twoFactor ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-white/5 text-slate-300'
                  }`}
                >
                  {twoFactor ? 'Enabled ✔' : 'Enable 2FA'}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <span className="text-slate-400">Sign out of active TeamMatcher session</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 text-xs font-bold flex items-center gap-2 transition-all"
                >
                  <LogOut className="w-4 h-4" /> Log Out
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
