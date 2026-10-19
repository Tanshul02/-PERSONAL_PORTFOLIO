export const PORTFOLIO = {
  personal: {
    name: "Tanshul Sharma",
    headline: "Full-Stack Software Engineer & AI Systems Developer",
    location: "Vellore / Faridabad, India",
    email: "tanshulsharma02@gmail.com",
    github: "https://github.com/Tanshul02",
    linkedin: "https://linkedin.com/in/tanshul-sharma",
    summary:
      "Integrated M.Tech Software Engineering student at VIT Vellore (9.44 CGPA). Focused on architecting scalable full-stack applications, robust microservices backends with FastAPI & Java, and production-grade Generative AI / RAG workflows.",
    metrics: [
      { label: "Academic CGPA", value: "9.44/10" },
      { label: "Class X / XII", value: "95.4% | 92%" },
      { label: "Core Focus", value: "Full-Stack & GenAI" },
      { label: "Architecture", value: "Clean OOP & Microservices" },
    ],
  },
  skills: [
    {
      category: "Programming & Core CS",
      items: ["Java", "Python", "C++", "JavaScript", "SQL", "Data Structures & Algorithms", "OOP", "OS & Architecture"],
    },
    {
      category: "Backend & Systems",
      items: ["FastAPI", "Python REST APIs", "Supabase", "SQLite", "System Architecture", "Design Patterns (GoF)"],
    },
    {
      category: "Frontend & UI Engineering",
      items: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Component Systems", "Responsive UX"],
    },
    {
      category: "AI & Generative Systems",
      items: ["Large Language Models (LLMs)", "RAG Architecture", "Prompt Engineering", "Hugging Face", "Recommender Systems"],
    },
    {
      category: "Cloud, DevOps & Tools",
      items: ["Git / GitHub", "Docker Containerization", "Jenkins CI/CD", "Kubernetes", "Maven", "Postman", "Linux"],
    },
  ],
  projects: [
    {
      id: "stylesense-ai",
      title: "StyleSense AI",
      tagline: "AI-Powered Personal Styling & Recommendation Platform",
      category: "Full-Stack / GenAI",
      description:
        "Engineered an intelligent wardrobe management and recommendation system delivering contextual outfit suggestions based on user preference, occasion, and visual combination algorithms.",
      architectureHighlights: [
        "Architected full-stack service with React frontend deployed on Firebase and FastAPI REST microservices backend.",
        "Integrated conversational LLM stylist chatbot with context-aware RAG recommendations and Supabase/SQLite persistence.",
        "Engineered decoupled modules utilizing Singleton, Factory, Observer, and Adapter design patterns.",
      ],
      tags: ["React", "FastAPI", "Python", "Supabase", "Firebase", "LLMs", "RAG", "Design Patterns"],
      githubUrl: "https://github.com/Tanshul02/stylesenseai",
      liveUrl: "https://stylesenseai-7fa63.web.app",
      isLive: true,
      maintenanceNotice: "Live Preview (Maintenance / v2 Rolling Out)",
      metrics: "Sub-second inference & decoupled microservice architecture",
    },
    {
      id: "codeguardian",
      title: "CodeGuardian",
      tagline: "Full-Stack Code Analysis & Security Inspection Platform",
      category: "Developer Tools / Systems",
      description:
        "Constructed a full-stack platform designed for code-level analysis, static verification, secure session authentication, and developer workflows.",
      architectureHighlights: [
        "Implemented secure JWT authentication flows with decoupled frontend/backend services.",
        "Applied strict Object-Oriented software engineering principles and reusable component hierarchies.",
        "Integrated scalable persistence layer with automated input validation and error handling.",
      ],
      tags: ["React", "Python", "REST API", "Database Integration", "OOP"],
      githubUrl: "https://github.com/Tanshul02",
      liveUrl: "",
      isLive: false,
      metrics: "Strict schema validation & OOP architecture",
    },
    {
      id: "cloud-devops-automation",
      title: "Automated Deployment & CI/CD Pipelines",
      tagline: "Containerized Microservices Deployment Pipeline",
      category: "Cloud & DevOps",
      description:
        "Configured robust end-to-end continuous integration and deployment pipelines for multi-tier microservices applications.",
      architectureHighlights: [
        "Containerized full-stack services using Docker multi-stage builds for optimized image sizes.",
        "Constructed automated Jenkins CI/CD build, test, and container registry publishing stages.",
        "Configured cluster orchestration blueprints using Kubernetes manifests for high availability.",
      ],
      tags: ["Docker", "Jenkins", "Kubernetes", "Git", "Maven", "Linux"],
      githubUrl: "https://github.com/Tanshul02",
      liveUrl: "",
      isLive: false,
      metrics: "Automated build, test, and deployment",
    },
  ],
  experience: [
    {
      role: "Full-Stack Engineering Trainee",
      company: "NxtWave",
      period: "Jan 2025 – Mar 2025",
      location: "Faridabad, India",
      bullets: [
        "Engineered responsive full-stack applications with modular UI components and scalable state.",
        "Strengthened DSA problem-solving techniques and clean-code development principles.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Codtech IT Solutions",
      period: "Oct 2024 – Nov 2024",
      location: "Faridabad, India",
      bullets: [
        "Developed cross-device compatible, high-usability web interfaces using HTML5, CSS3, and modern JavaScript.",
        "Built modular UI component libraries and profiled runtime rendering performance.",
        "Spearheaded UI bug triage, reducing edge-case rendering crashes across viewports.",
      ],
    },
  ],
  education: [
    {
      institution: "Vellore Institute of Technology (VIT)",
      degree: "Integrated M.Tech. in Software Engineering",
      period: "2024 – 2029",
      grade: "CGPA: 9.44 / 10",
      location: "Vellore, Tamil Nadu",
      details: "Focus on Distributed Systems, Advanced DSA, Computer Architecture, and Cloud Engineering.",
    },
    {
      institution: "Delhi Public School (DPS), Faridabad",
      degree: "Senior Secondary (Class XII)",
      period: "2024",
      grade: "92.0%",
      location: "Faridabad, Haryana",
      details: "Physics, Chemistry, Mathematics, and Computer Science track.",
    },
    {
      institution: "Delhi Public School (DPS), Faridabad",
      degree: "Secondary School (Class X)",
      period: "2022",
      grade: "95.4%",
      location: "Faridabad, Haryana",
      details: "Core Sciences and Mathematics with distinction.",
    },
  ],
};
