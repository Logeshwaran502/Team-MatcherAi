import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const initialProjects = [
  {
    id: 'proj-1',
    title: 'AI Attendance System',
    category: 'Computer Vision & AI',
    description: 'Real-time facial recognition attendance system with anti-spoofing and instant analytics dashboard.',
    difficulty: 'Advanced',
    teamSize: '4 Members',
    requiredSkills: ['React', 'Node.js', 'MongoDB', 'Python', 'Machine Learning', 'Git'],
    recommendedRoles: ['ML Engineer', 'Full Stack Dev', 'Database Architect', 'UI/UX Designer']
  },
  {
    id: 'proj-2',
    title: 'FinTech Blockchain Core',
    category: 'Web3 & Security',
    description: 'High-throughput decentralized transaction ledger with smart contract automated auditing.',
    difficulty: 'Expert',
    teamSize: '5 Members',
    requiredSkills: ['Solidity', 'React', 'Node.js', 'Go', 'Docker', 'Git'],
    recommendedRoles: ['Blockchain Lead', 'Smart Contract Auditor', 'Backend Specialist']
  },
  {
    id: 'proj-3',
    title: 'HealthCare RAG Medical Bot',
    category: 'LLM & Healthcare',
    description: 'Domain-specific medical Q&A assistant powered by Llama-3, ChromaDB vector storage, and FastAPI.',
    difficulty: 'Advanced',
    teamSize: '4 Members',
    requiredSkills: ['Python', 'LangChain', 'FastAPI', 'React', 'Vector DB', 'PyTorch'],
    recommendedRoles: ['RAG Specialist', 'AI Researcher', 'Frontend Engineer']
  },
  {
    id: 'proj-4',
    title: 'Autonomous Drone Navigation System',
    category: 'Robotics & Embedded AI',
    description: 'Edge AI pathfinding algorithm with ROS2 and OpenCV for GPS-denied indoor drone navigation.',
    difficulty: 'Expert',
    teamSize: '3 Members',
    requiredSkills: ['C++', 'Python', 'ROS2', 'OpenCV', 'TensorFlow', 'Git'],
    recommendedRoles: ['Robotics Engineer', 'Computer Vision Lead']
  }
];

export const initialRecommendedTeammates = [
  {
    id: 'user-arun',
    name: 'Arun Kumar',
    role: 'AI / ML Specialist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    compatibility: 95,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Scikit-learn'],
    experience: '3 Years • ML Researcher',
    github: 'arunkumar-ai',
    linkedin: 'arunkumar-ml',
    matchReason: 'Fills your Machine Learning & TensorFlow skill gap. High team synergy.',
    status: 'Available'
  },
  {
    id: 'user-priya',
    name: 'Priya Sharma',
    role: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    compatibility: 92,
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'GraphQL'],
    experience: '2.5 Years • Senior Frontend',
    github: 'priyasharma-dev',
    linkedin: 'priya-sharma-fullstack',
    matchReason: 'Excellent frontend architecture skills & high collaborative activity score.',
    status: 'Available'
  },
  {
    id: 'user-rahul',
    name: 'Rahul Verma',
    role: 'Backend & Cloud Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    compatibility: 89,
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes'],
    experience: '4 Years • Cloud Architect',
    github: 'rahulverma-cloud',
    linkedin: 'rahul-verma-aws',
    matchReason: 'Strong backend infrastructure & database optimization capabilities.',
    status: 'Available'
  },
  {
    id: 'user-sneha',
    name: 'Sneha Patel',
    role: 'UI/UX & Product Designer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    compatibility: 87,
    skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Tailwind'],
    experience: '2 Years • Lead Designer',
    github: 'snehapatel-design',
    linkedin: 'sneha-patel-ux',
    matchReason: 'Delivers high-fidelity glassmorphism UI mockups & modern user workflows.',
    status: 'Available'
  }
];

export function AppProvider({ children }) {
  // Theme state
  const [theme, setTheme] = useState('dark');

  // User state
  const [user, setUser] = useState({
    name: 'Logesh',
    email: 'logesh@teammatcher.ai',
    title: 'AI & Full Stack Student Engineer',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    resumeUploaded: true,
    resumeScore: 88,
    projectReadiness: 85,
    github: 'logesh-dev',
    linkedin: 'logesh-official',
    skills: [
      { name: 'Java', level: 90, category: 'Languages' },
      { name: 'React', level: 82, category: 'Frameworks' },
      { name: 'Node.js', level: 75, category: 'Frameworks' },
      { name: 'MongoDB', level: 70, category: 'Databases' },
      { name: 'Python', level: 60, category: 'Languages' },
      { name: 'Git', level: 80, category: 'Tools' },
      { name: 'Communication', level: 88, category: 'Soft Skills' },
      { name: 'Problem Solving', level: 92, category: 'Soft Skills' },
      { name: 'Spring Boot', level: 78, category: 'Frameworks' }
    ]
  });

  // Selected project for Gap Analysis
  const [selectedProject, setSelectedProject] = useState(initialProjects[0]);

  // Teammate requests list
  const [sentRequests, setSentRequests] = useState([]);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // System Notifications
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Request Accepted',
      message: 'Arun Kumar accepted your teammate request for AI Attendance System.',
      time: '10 mins ago',
      read: false,
      type: 'team'
    },
    {
      id: 'notif-2',
      title: 'New Project Available',
      message: 'HealthCare RAG Medical Bot was posted with 4 open slots.',
      time: '1 hour ago',
      read: false,
      type: 'project'
    },
    {
      id: 'notif-3',
      title: 'Resume Score Increased',
      message: 'Your resume score jumped from 82 to 88 after adding React & MongoDB projects.',
      time: '2 hours ago',
      read: true,
      type: 'system'
    },
    {
      id: 'notif-4',
      title: 'AI Recommendation',
      message: 'AI recommends learning TensorFlow & Machine Learning to reach 98% match on your target projects.',
      time: '5 hours ago',
      read: false,
      type: 'ai'
    }
  ]);

  // Active Formed Team
  const [activeTeam, setActiveTeam] = useState({
    name: 'CyberGuard AI Squad',
    project: 'AI Attendance System',
    overallScore: 96,
    successPrediction: 94,
    coverage: 100,
    members: [
      { name: 'Logesh (You)', role: 'Frontend & Full Stack Lead', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80', status: 'Owner' },
      { name: 'Arun Kumar', role: 'AI / ML Engineer', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', status: 'Accepted' },
      { name: 'Priya Sharma', role: 'Database & Node.js Dev', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', status: 'Accepted' },
      { name: 'Rahul Verma', role: 'Backend Security Specialist', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', status: 'Accepted' }
    ]
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const addToast = (title, message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const sendTeammateRequest = (teammate) => {
    if (sentRequests.includes(teammate.id)) {
      addToast('Already Sent', `Request to ${teammate.name} is already pending.`, 'info');
      return;
    }
    setSentRequests((prev) => [...prev, teammate.id]);
    addToast('Request Sent! 🚀', `Teammate invite sent to ${teammate.name} for ${selectedProject.title}.`, 'success');

    // Add to notifications
    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: 'Invitation Sent',
        message: `You sent a team request to ${teammate.name}.`,
        time: 'Just now',
        read: false,
        type: 'team'
      },
      ...prev
    ]);
  };

  const markNotificationAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const updateUserSkills = (newSkills) => {
    setUser((prev) => ({
      ...prev,
      skills: newSkills
    }));
    addToast('Skills Updated', 'Your skill proficiencies have been saved.', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        setUser,
        selectedProject,
        setSelectedProject,
        initialProjects,
        initialRecommendedTeammates,
        sentRequests,
        sendTeammateRequest,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        activeTeam,
        setActiveTeam,
        toasts,
        addToast,
        removeToast,
        updateUserSkills
      }}
    >
      <div className={theme}>{children}</div>
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
