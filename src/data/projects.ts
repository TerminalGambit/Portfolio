export interface Project {
  title: string;
  period: string;
  status: "Active" | "Production Ready" | "Completed" | "In Development";
  type: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  metrics?: Record<string, string>;
  highlights: string[];
  featured: boolean;
  slug: string;
  category: "ML / AI" | "Finance" | "Game Dev" | "Web App" | "Systems";
}

export const projects: Project[] = [
  {
    title: "ApexAgent: F1 Machine Learning",
    slug: "apexagent-f1-machine-learning",
    category: "ML / AI",
    period: "2024–2025",
    status: "Production Ready",
    type: "Machine Learning",
    description:
      "Open-source Formula 1 analytics platform combining cutting-edge machine learning with responsible AI engineering. End-to-end MLOps delivering real-world predictive insights.",
    technologies: ["Python", "XGBoost", "TensorFlow", "Pandas", "Scikit-learn", "MLOps"],
    github: "https://github.com/TerminalGambit/ApexAgent",
    metrics: {
      "Best R²": "0.992",
      "Laps Processed": "6,502+",
    },
    highlights: [
      "7 production-ready models with sub-second accuracy",
      "End-to-end MLOps pipeline with automated validation",
      "Multi-season support (2024-2025 F1 data)",
    ],
    featured: true,
  },
  {
    title: "Advanced BlackJack – AI Platform",
    slug: "advanced-blackjack-ai-platform",
    category: "Game Dev",
    period: "Started July 2025",
    status: "Active",
    type: "Game Development",
    description:
      "Sophisticated web-based blackjack game featuring an AI-powered strategy advisor with card counting, basic strategy charts, and Monte Carlo simulations.",
    technologies: ["JavaScript", "Python", "LaTeX", "Game Theory", "AI Strategy"],
    metrics: {
      "Test Rounds": "10,000+",
      "Decision Speed": "<100ms",
    },
    highlights: [
      "AI-powered decision evaluator using optimal strategy charts",
      "Automated testing agents with statistical validation",
      "LaTeX report generation with detailed analytics",
    ],
    featured: true,
  },
  {
    title: "Finance Utility – Market Analysis",
    slug: "finance-utility-market-analysis",
    category: "Finance",
    period: "Ongoing",
    status: "Active",
    type: "Data Analysis",
    description:
      "Personal project for analyzing stock market trends using RSI, MACD, Moving Averages, and Bollinger Bands. Strengthens data processing and applied finance skills.",
    technologies: ["Python", "Pandas", "Yahoo Finance API", "Matplotlib", "Seaborn"],
    github: "https://github.com/TerminalGambit/PersonalStockTrackerAnalyser",
    highlights: [
      "Technical indicator analysis (RSI, MACD, MA, BB)",
      "Real-time market data processing",
      "Modular architecture for extensibility",
    ],
    featured: true,
  },
  {
    title: "Solo Chess – Java Game",
    slug: "solo-chess-java-game",
    category: "Game Dev",
    period: "2024",
    status: "Completed",
    type: "Game Development",
    description:
      'Faithful reproduction of Chess.com\'s "Solo Chess" mode with rules engine, placement logic, and graphics via libGDX. Uses polymorphism and modular rendering.',
    technologies: ["Java", "libGDX", "OOP", "UML"],
    github: "https://github.com/TerminalGambit/PCOO-projetfinal",
    highlights: [
      "Complete game logic with polymorphic piece hierarchy",
      "Graphics rendering with libGDX framework",
      "Full UML documentation",
    ],
    featured: true,
  },
  {
    title: "ChatLLMs – Local AI Chat",
    slug: "chatllms-local-ai-chat",
    category: "ML / AI",
    period: "2024–2025",
    status: "Production Ready",
    type: "Web Application",
    description:
      "Modern chat application for interacting with local LLMs via Ollama. Real-time streaming, conversation management, speech-to-text, and Docker containerization.",
    technologies: ["React", "Node.js", "Docker", "Ollama", "WebSocket", "SQLite"],
    highlights: [
      "Docker containerization with GPU support",
      "Real-time streaming from local LLMs",
      "Speech-to-text with Web Speech API",
    ],
    featured: true,
  },
  {
    title: "GymFlow – Fitness Optimization",
    slug: "gymflow-fitness-optimization",
    category: "Finance",
    period: "2024–2025",
    status: "Active",
    type: "Web Application",
    description:
      "Data-driven fitness application applying mathematical optimization and machine learning to personalized workout strategies. Risk-return analysis and predictive analytics.",
    technologies: ["Python", "Django", "React", "TypeScript", "PostgreSQL", "Scikit-learn"],
    highlights: [
      "Quantitative fitness optimization algorithms",
      "Cross-platform web and mobile architecture",
      "Predictive modeling for plateau prevention",
    ],
    featured: true,
  },
  {
    title: "Blackjack Development Suite",
    slug: "blackjack-development-suite",
    category: "Game Dev",
    period: "2024–2025",
    status: "Active",
    type: "Game Development",
    description:
      "Comprehensive collection of blackjack projects: game implementations, AI strategy analysis, Monte Carlo simulations, and mathematical modeling.",
    technologies: ["JavaScript", "Python", "LaTeX", "Statistical Analysis"],
    highlights: [
      "Multiple interconnected projects",
      "Monte Carlo simulation engine",
      "Educational game theory components",
    ],
    featured: false,
  },
  {
    title: "Shopping & Recipes Web App",
    slug: "shopping-recipes-web-app",
    category: "Web App",
    period: "2025",
    status: "In Development",
    type: "Web Application",
    description:
      "Full-stack team application (Agile) with recipe API integration and user group management. Deployed on Raspberry Pi with Docker.",
    technologies: ["Angular", "Symfony", "PostgreSQL", "Docker", "Nginx"],
    highlights: [
      "Team-based Agile development",
      "API integration for recipes",
      "Containerized deployment",
    ],
    featured: false,
  },
  {
    title: "Maii – Life Management Suite",
    slug: "maii-life-management-suite",
    category: "Web App",
    period: "2024–2025",
    status: "Active",
    type: "Web Application",
    description:
      "Modular, offline-first personal web application: expenses, schedule, pantry, macros, and recipes in one dashboard.",
    technologies: ["React", "TypeScript", "Tailwind", "Zustand", "Vite"],
    highlights: [
      "Offline-first with local data persistence",
      "Modular independent feature modules",
      "Shadcn/UI integration",
    ],
    featured: false,
  },
  {
    title: "BANG! CLI – Wild West Card Game",
    slug: "bang-cli-wild-west-card-game",
    category: "Game Dev",
    period: "2024",
    status: "Completed",
    type: "Game Development",
    description:
      "Command-line BANG! card game with advanced AI opponents, strategy coaching, and spectator modes.",
    technologies: ["TypeScript", "Node.js", "Game AI"],
    highlights: [
      "AI opponents with strategic priority systems",
      "Real-time strategy coaching",
      "AI vs AI spectator mode",
    ],
    featured: false,
  },
  {
    title: "Secure Password Manager",
    slug: "secure-password-manager",
    category: "Systems",
    period: "2024",
    status: "Completed",
    type: "Security",
    description:
      "Military-grade encrypted password manager with zero-knowledge architecture, AES-256-GCM encryption, and cross-platform sync.",
    technologies: ["Node.js", "AES-256-GCM", "JWT", "React Native", "SQLite"],
    highlights: [
      "Zero-knowledge client-side encryption",
      "Biometric authentication support",
      "Cross-platform sync (web, iOS, Android)",
    ],
    featured: false,
  },
  {
    title: "Multi-Agent Logic System",
    slug: "multi-agent-logic-system",
    category: "ML / AI",
    period: "2024",
    status: "Completed",
    type: "Simulation",
    description:
      "Web-based simulation for modeling complex interactions between intelligent agents with real-time visualization.",
    technologies: ["JavaScript", "Canvas API", "Logic Programming"],
    highlights: [
      "Agent behavioral modeling",
      "Real-time network visualization",
      "Trust and deception modeling",
    ],
    featured: false,
  },
  {
    title: "Multi-Client Server",
    slug: "multi-client-server",
    category: "Systems",
    period: "2023",
    status: "Completed",
    type: "Network Programming",
    description:
      "Python client-server system with concurrent multi-client handling via threads and custom signal handlers.",
    technologies: ["Python", "Sockets", "Threading"],
    highlights: [
      "Concurrent client handling",
      "Thread-safe communication",
      "Custom signal processing",
    ],
    featured: false,
  },
  {
    title: "Expo Expense Tracker",
    slug: "expo-expense-tracker",
    category: "Web App",
    period: "2024",
    status: "Completed",
    type: "Mobile",
    description:
      "Mobile expense tracking with category management, visual analytics, and data persistence.",
    technologies: ["React Native", "Expo", "TypeScript"],
    highlights: [
      "Interactive charts and visualization",
      "Custom category management",
      "Cross-platform (iOS/Android)",
    ],
    featured: false,
  },
  {
    title: "BibleChatApp – AI Companion",
    slug: "biblechatapp-ai-companion",
    category: "ML / AI",
    period: "2024",
    status: "Completed",
    type: "Web Application",
    description:
      "Locally-hosted Bible chat application with spiritual conversations, prayer generation, and daily quotes powered by Ollama.",
    technologies: ["Python", "Flask", "Ollama", "Docker"],
    highlights: [
      "Local AI with complete privacy",
      "Personalized prayer generation",
      "Docker containerization",
    ],
    featured: false,
  },
  {
    title: "Terminal Game in C",
    slug: "terminal-game-in-c",
    category: "Game Dev",
    period: "2023",
    status: "Completed",
    type: "Systems Programming",
    description:
      "Interactive text-based game in C with manual memory management and command-line interface.",
    technologies: ["C", "Memory Management"],
    highlights: [
      "Manual memory management",
      "Low-level system programming",
      "Performance optimization",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectCategories(): string[] {
  return ["All", "ML / AI", "Finance", "Game Dev", "Web App", "Systems"];
}
