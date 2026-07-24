import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  FileText,
  Kanban,
  Calendar,
  Clock,
  Send,
  Plus,
  Paperclip,
  CheckCircle2,
  Download,
  Video,
  Bot,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/common/Sidebar';
import TopBar from '../components/common/TopBar';

export default function TeamWorkspacePage() {
  const { activeTeam, user } = useApp();
  const [activeTab, setActiveTab] = useState('tasks');

  // Chat State
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Arun Kumar', role: 'AI / ML Specialist', text: 'Hey team! I just trained the initial MobileNet V2 model for facial recognition. Loss is down to 0.04.', time: '10:14 AM' },
    { id: 2, sender: 'Priya Sharma', role: 'Node.js Dev', text: 'Awesome! I finished setting up MongoDB schemas for logging attendance timestamps.', time: '10:18 AM' },
    { id: 3, sender: 'Logesh (You)', role: 'Frontend Lead', text: 'Great work! I am connecting the React dashboard with your API endpoints now.', time: '10:22 AM' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Kanban Tasks State
  const [tasks, setTasks] = useState([
    { id: 't1', title: 'Setup React + Vite Frontend', status: 'Done', assignee: 'Logesh' },
    { id: 't2', title: 'Train OpenCV Anti-Spoofing Model', status: 'In Progress', assignee: 'Arun' },
    { id: 't3', title: 'Configure JWT Auth & Microservices', status: 'In Progress', assignee: 'Priya' },
    { id: 't4', title: 'Deploy Docker Container to AWS', status: 'To Do', assignee: 'Rahul' }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // Shared Files List
  const sharedFiles = [
    { name: 'AI_Attendance_Architecture_v2.pdf', size: '4.2 MB', author: 'Arun Kumar', date: 'Today' },
    { name: 'dataset_embeddings_face.json', size: '18.5 MB', author: 'Arun Kumar', date: 'Yesterday' },
    { name: 'api_swagger_documentation.json', size: '1.1 MB', author: 'Priya Sharma', date: '2 days ago' }
  ];

  // Meetings Schedule
  const meetings = [
    { title: 'Daily Architecture Standup', time: '04:00 PM Today', link: 'https://meet.google.com/abc-defg-hij' },
    { title: 'Sprint Review & Demo', time: '06:00 PM Tomorrow', link: 'https://meet.google.com/xyz-uvwx-rst' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: `${user.name} (You)`,
        role: 'Frontend Lead',
        text: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setChatInput('');
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: `t-${Date.now()}`,
        title: newTaskTitle,
        status: 'To Do',
        assignee: 'Logesh'
      }
    ]);
    setNewTaskTitle('');
  };

  const handleMoveTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <TopBar title="Team Workspace Hub" />

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          
          {/* Header Workspace Banner */}
          <div className="p-6 rounded-3xl glass-card border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xl">
            <div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Live Collaboration Hub
              </span>
              <h2 className="text-2xl font-extrabold text-white mt-1">{activeTeam.name}</h2>
              <p className="text-xs text-slate-300">Project: {activeTeam.project}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                ● 4 Members Online
              </span>
            </div>
          </div>

          {/* Module Nav Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
            {[
              { id: 'tasks', label: 'Task Board', icon: Kanban },
              { id: 'chat', label: 'Team Chat', icon: MessageSquare },
              { id: 'files', label: 'Shared Files', icon: FileText },
              { id: 'meetings', label: 'Meeting Schedule', icon: Calendar },
              { id: 'timeline', label: 'Progress Timeline', icon: Activity }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'glass-card border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* MODULE 1: TASK BOARD (KANBAN) */}
          {activeTab === 'tasks' && (
            <div className="space-y-6">
              {/* Add Task Form */}
              <form onSubmit={handleAddTask} className="flex gap-2 max-w-md">
                <input
                  type="text"
                  placeholder="Create new sprint task..."
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl glass-input text-xs"
                />
                <button
                  type="submit"
                  className="gradient-btn px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1 shrink-0"
                >
                  <Plus className="w-4 h-4" /> Add Task
                </button>
              </form>

              {/* Kanban Columns */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {['To Do', 'In Progress', 'Review', 'Done'].map((status) => {
                  const colTasks = tasks.filter((t) => t.status === status);
                  return (
                    <div
                      key={status}
                      className="p-4 rounded-2xl glass-card border-white/10 bg-slate-900/60 flex flex-col justify-between min-h-[340px]"
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider">{status}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400">
                            {colTasks.length}
                          </span>
                        </div>

                        <div className="space-y-3">
                          {colTasks.map((t) => (
                            <div
                              key={t.id}
                              className="p-3 rounded-xl bg-slate-950/80 border border-white/10 space-y-2 text-xs"
                            >
                              <p className="font-semibold text-white">{t.title}</p>
                              <div className="flex items-center justify-between text-[10px] text-slate-400">
                                <span>Assignee: {t.assignee}</span>
                                {status !== 'Done' && (
                                  <button
                                    onClick={() => handleMoveTask(t.id, status === 'To Do' ? 'In Progress' : 'Done')}
                                    className="text-cyan-400 hover:underline"
                                  >
                                    Move →
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* MODULE 2: CHAT */}
          {activeTab === 'chat' && (
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl flex flex-col h-[520px]">
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-3 rounded-2xl bg-slate-950/60 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white flex items-center gap-2">
                        {msg.sender} <span className="text-[10px] text-indigo-400 font-normal">({msg.role})</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">{msg.time}</span>
                    </div>
                    <p className="text-xs text-slate-200">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="pt-4 border-t border-white/10 flex gap-2">
                <input
                  type="text"
                  placeholder="Message #team-general channel..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl glass-input text-xs"
                />
                <button
                  type="submit"
                  className="gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send
                </button>
              </form>
            </div>
          )}

          {/* MODULE 3: SHARED FILES */}
          {activeTab === 'files' && (
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-base font-bold text-white">Repository Assets & Shared Documents</h3>
                <button className="gradient-btn px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2">
                  <Paperclip className="w-4 h-4" /> Upload Shared Asset
                </button>
              </div>

              <div className="space-y-3">
                {sharedFiles.map((f) => (
                  <div key={f.name} className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 flex items-center justify-between gap-4 text-xs">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-indigo-400" />
                      <div>
                        <h4 className="font-bold text-white">{f.name}</h4>
                        <p className="text-[11px] text-slate-400">{f.size} • Uploaded by {f.author}</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-cyan-300 text-xs font-semibold flex items-center gap-1 border border-white/10">
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 4: MEETINGS */}
          {activeTab === 'meetings' && (
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-4">
              <h3 className="text-base font-bold text-white border-b border-white/10 pb-3">Scheduled Syncs & Demos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {meetings.map((m) => (
                  <div key={m.title} className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Video className="w-4 h-4 text-emerald-400" /> {m.title}
                    </h4>
                    <p className="text-xs text-slate-400">{m.time}</p>
                    <a
                      href={m.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-btn text-xs font-bold text-white"
                    >
                      Join Video Meeting
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODULE 5: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="p-6 rounded-3xl glass-card border-white/15 bg-slate-900/80 shadow-2xl space-y-4">
              <h3 className="text-base font-bold text-white border-b border-white/10 pb-3">Project Milestone Roadmap</h3>
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 font-semibold flex justify-between">
                  <span>Milestone 1: Requirement Gathering & NLP Analysis</span>
                  <span>Completed 100% ✔</span>
                </div>
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-300 font-semibold flex justify-between">
                  <span>Milestone 2: OpenCV Model & React UI Integration</span>
                  <span>In Progress (75%)</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-slate-400 font-semibold flex justify-between">
                  <span>Milestone 3: Final Demo & Hackathon Submission</span>
                  <span>Scheduled</span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
