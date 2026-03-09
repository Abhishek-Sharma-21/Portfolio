export const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@400;600;800&display=swap');
:root {
  --bg-primary:#080808; --bg-secondary:#0F0F0F; --bg-tertiary:#161616; --border:rgba(255,255,255,0.06);
  --accent-primary:#00E5FF; --accent-warm:#FF6B35; --accent-muted:rgba(0,229,255,0.12);
  --text-primary:#F7F7F7; --text-secondary:#8A8A8A; --text-muted:#3D3D3D;
  --glow-cyan:0 0 20px rgba(0,229,255,0.35), 0 0 60px rgba(0,229,255,0.12);
  --glow-warm:0 0 20px rgba(255,107,53,0.35); --radius-sm:6px; --radius-md:12px; --radius-lg:20px;
  --transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
body { background:var(--bg-primary); color:var(--text-primary); font-family:'Syne',sans-serif; cursor:none; }
@media(max-width:768px) { body{cursor:auto;} }
h1,h2,h3,h4,h5,h6 { font-family:'Syne',sans-serif; line-height:1.1; }
h1 { letter-spacing:-0.02em; }
.font-mono { font-family:'JetBrains Mono',monospace; letter-spacing:0.08em; }
::selection { background:var(--accent-primary); color:var(--bg-primary); }
::-webkit-scrollbar { width:8px; }
::-webkit-scrollbar-track { background:var(--bg-primary); }
::-webkit-scrollbar-thumb { background:var(--border); border-radius:4px; }
::-webkit-scrollbar-thumb:hover { background:var(--text-muted); }
.glow-cyan { text-shadow:var(--glow-cyan); }
.box-glow-cyan { box-shadow:var(--glow-cyan); }
@media(prefers-reduced-motion:reduce){ *{animation:none!important;transition:none!important;} }
`;

export const CONFIG = {
  personal: {
    name: "Abhishek Sharma", title: "Full-Stack Developer & CS Engineer",
    tagline: "I build end-to-end software solutions — clean code, secure systems, and AI-integrated experiences.",
    location: "Jammu, India", email: "abhishek1173@gmail.com", phone: "+91 6006513495",
    github: "https://github.com/Abhishek-Sharma-21", linkedin: "https://linkedin.com/in/abhishek-sharma1173",
    availableForWork: true, avatarInitials: "AS",
  },
  roles: ["Full-Stack Developer", "Backend Engineer", "React & Node.js Builder", "AI Integration Enthusiast", "Problem Solver"],
  stats: [
    { value: 100, suffix: "+", label: "DSA Problems Solved" },
    { value: 3, suffix: "+", label: "Production Projects" },
    { value: 87, suffix: ".8%", label: "Higher Secondary Score" },
    { value: 1, suffix: "", label: "National Bootcamp Selected" },
  ],
  skills: {
    "Languages": ["C++", "JavaScript", "TypeScript"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend": ["Node.js", "Express.js", "REST APIs", "RBAC", "OOPS"],
    "Database": ["MongoDB", "Firebase"],
    "Dev Tools": ["Git", "GitHub", "Postman", "Vercel", "VS Code", "Cursor AI","Antigravity AI"],
    "Concepts": ["DSA", "Full-Stack Architecture", "Authentication"],
  },
  projects: [
    {
      id: 1, featured: true, title: "College Placement Portal",
      description: "A multi-role placement management system secured with Role-Based Access Control (RBAC). Features an automated logic-based screening engine for conducting technical recruitment tests, protecting student data and TPO administrative workflows.",
      tech: ["React.js", "Node.js", "MongoDB", "RBAC", "Express.js"], metrics: "Multi-role RBAC · Automated screening engine · Full SDLC",
      github: "https://github.com/Abhishek-Sharma-21/College-Placement-Portal", live: null, status: "Open Source",
    },
    {
      id: 2, featured: false, title: "Find Aid — Medical Help",
      description: "An emergency resource allocation platform connecting donors with users via a location-aware search system. Built with async request handling and secure data persistence.",
      tech: ["Node.js", "Express.js", "React.js", "MongoDB"], metrics: "Location-aware search · Async handling · Secure persistence",
      github: "https://github.com/Abhishek-Sharma-21/Aid-Find", live: null, status: "Open Source",
    },
    {
      id: 3, featured: false, title: "Health Assistant AI",
      description: "An AI-powered health diagnostic tool integrating Google Gemini API for natural language medical insights. Optimized with Next.js server-side rendering for high-speed performance.",
      tech: ["Next.js", "Google Gemini API", "TypeScript", "REST API"], metrics: "Gemini AI · SSR optimized · NLP medical insights",
      github: "https://github.com/Abhishek-Sharma-21/Health-Assistant", live: "https://health-assistant-five.vercel.app", status: "Live",
    },
    {
      id: 4, featured: false, title: "SpaceScope",
      description: "A space exploration visualizer and data dashboard, bringing the cosmos to the browser.",
      tech: ["React.js", "Tailwind CSS", "Vercel"], metrics: "Dynamic data · Responsive UI",
      github: "https://github.com/Abhishek-Sharma-21/SpaceScope", live: "https://space-scope-henna.vercel.app", status: "Live",
    },
    {
      id: 5, featured: false, title: "AI Learning Assistant",
      description: "An intelligent study companion utilizing generative AI to curate and guide educational content.",
      tech: ["React.js", "Tailwind CSS", "API Integration"], metrics: "AI chat · Smart learning",
      github: "https://github.com/Abhishek-Sharma-21/AI_Learning_Assistant", live: "https://ai-learning-assistant-jet.vercel.app", status: "Live",
    },
    {
      id: 6, featured: false, title: "myNote",
      description: "A lightweight conceptual note-taking application focused on pure utility and speed.",
      tech: ["JavaScript", "HTML5", "CSS3"], metrics: "Conceptual build · High utility",
      github: "https://github.com/Abhishek-Sharma-21/myNote", live: null, status: "Open Source",
    },
  ],
  experience: [
    {
      company: "AppSquadz Software Pvt Ltd", role: "Software Developer Intern", period: "July 2025 – Aug 2025",
      location: "Noida, India (On-Site)", type: "Internship",
      achievements: ["Engineered scalable backend services integrated with responsive frontend modules.", "Implemented modular code structures to improve maintainability and reduced API latency through query optimization.", "Participated in the full software development lifecycle including debugging, testing, and deployment phases."],
    },
  ],
  education: [
    { institution: "M.J.P Rohilkhand University", degree: "B.Tech — Computer Science & Information Technology", period: "2022 – 2026", location: "Bareilly, India", score: "CGPA: 7.41" },
    { institution: "Adarsh Vidyapeeth Higher Sec. School", degree: "Higher Secondary", period: "2022", location: "Samba, J&K", score: "87.8%" },
  ],
  achievements: [
    { icon: "🏆", title: "National Innovation Selection", description: "Selected for the 5-day IDE Bootcamp at AICTE, Dehradun (Ministry of Education, Govt. of India)." },
    { icon: "💡", title: "Algorithm Proficiency", description: "Solved 100+ problems on LeetCode and GeeksforGeeks with focus on optimized time/space complexity." },
    { icon: "📜", title: "Certified: Microsoft Excel Specialist", description: "Credential in data handling and spreadsheet automation." },
    { icon: "🎓", title: "Full-Stack Development Fundamentals", description: "Certified in full-stack engineering covering frontend, backend, and deployment." },
  ],
};
