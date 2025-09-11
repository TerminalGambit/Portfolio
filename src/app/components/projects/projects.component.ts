import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { TechnologyService } from '../../services/technology.service';
import { ProjectTechnology } from '../../interfaces/technology.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  
  constructor(
    private technologyService: TechnologyService,
    private router: Router
  ) {}
  
  getProjectTechnologies(technologies: string[]): ProjectTechnology[] {
    return this.technologyService.getProjectTechnologies(technologies);
  }
  
  projects = [
    {
      title: 'Advanced BlackJack Game - AI Educational Platform',
      period: 'Started July 2025',
      description: 'Sophisticated web-based blackjack game featuring an AI-powered strategy advisor with card counting strategies, basic strategy charts, and planned Monte Carlo simulations. Solo project exploring game theory, mathematical modeling, and AI training for advisory systems.',
      technologies: ['JavaScript', 'Python', 'CSS3', 'HTML5', 'LaTeX', 'Mathematical Modeling', 'AI Strategy', 'Game Theory', 'Card Counting'],
      status: 'Active Development',
      type: 'Game Development',
      featured: true,
      metrics: {
        testingRounds: '10,000+ automated tests',
        decisionSpeed: '<100ms response time',
        compatibility: '100% cross-browser',
        modules: '15+ JavaScript modules',
        accuracyTracking: 'Real-time strategy validation',
        reportGeneration: 'LaTeX PDF reports'
      },
      coreFeatures: [
        { name: 'AI Strategy Advisor', description: 'Real-time optimal decision analysis' },
        { name: 'Automated Testing Agents', description: 'Statistical validation with thousands of hands' },
        { name: 'Advanced Analytics', description: 'Performance tracking and LaTeX report generation' },
        { name: 'Educational Features', description: 'Strategy learning with mistake analysis' }
      ],
      highlights: [
        'AI-powered decision evaluator using optimal blackjack strategy charts',
        'Automated testing agents with statistical analysis and validation',
        'Real-time probability calculations and strategy feedback system',
        'Professional LaTeX report generation with detailed analytics',
        'Modular architecture supporting 15+ planned enhancement phases',
        'Custom Python HTTP server with REST API and session management'
      ],
      learnings: 'Working solo on this project has taught me a great deal about game theory and the practical application of traditional mathematical and AI-related models for training and advisory systems. The experience of building card counting strategies and basic strategy charts deepened my understanding of how mathematical models can be integrated with AI to create effective training tools and decision-making systems.'
    },
    {
      title: 'ApexAgent: F1 Machine Learning Project',
      period: '2024-2025',
      description: 'Sophisticated, open-source Formula 1 analytics platform combining cutting-edge machine learning with responsible AI engineering practices. Features end-to-end MLOps capabilities delivering real-world predictive insights.',
      technologies: ['Python', 'XGBoost', 'TensorFlow', 'Pandas', 'FastF1 API', 'Scikit-learn', 'MLOps'],
      status: 'Production Ready',
      type: 'Machine Learning',
      github: 'https://github.com/TerminalGambit/ApexAgent',
      featured: true,
      metrics: {
        dataProcessed: '6,502+ laps',
        racesAnalyzed: '6 major F1 races',
        features: '56 sophisticated features',
        bestRMSE: '0.350s',
        bestR2: '0.992',
        dataRetention: '96-100%'
      },
      models: [
        { name: 'ElasticNet', rmse: '0.350s', r2: '0.992', technique: 'Regularized Linear' },
        { name: 'Ensemble Voting', rmse: '0.365s', r2: '0.991', technique: 'Multi-Model Combination' },
        { name: 'XGBoost Advanced', rmse: '0.377s', r2: '0.990', technique: 'Gradient Boosting' }
      ],
      highlights: [
        'End-to-end MLOps pipeline with automated validation',
        '7 production-ready models with sub-second accuracy',
        'Comprehensive feature engineering (56 features)',
        'Resolved data leakage for realistic performance',
        'Multi-season support (2024-2025 F1 data)',
        'Production-ready infrastructure with monitoring'
      ],
      learnings: 'ApexAgent taught me the complete MLOps lifecycle from data ingestion to model deployment. I gained expertise in responsible AI development, feature engineering, and production-ready ML systems. The project demonstrated the importance of rigorous validation, data quality, and engineering excellence in real-world ML applications. Working with Formula 1 data also deepened my understanding of time-series analysis and domain-specific feature engineering.'
    },
    {
      title: 'AI Portfolio Website',
      period: '2025',
      description: 'Modern portfolio website built with Angular featuring AI-driven design, responsive layouts, and interactive components. Showcases projects, skills, and professional experience.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Material Design', 'Responsive Design'],
      status: 'Active Development',
      type: 'Web Application',
      github: 'https://github.com/TerminalGambit/portfolio',
      highlights: [
        'Modern Angular architecture',
        'Responsive mobile-first design',
        'Interactive UI components',
        'AI-inspired color palette'
      ],
      learnings: 'Building this portfolio taught me advanced Angular concepts, component architecture, and modern web design principles. I learned about responsive design, CSS animations, and creating engaging user experiences. The project also helped me understand the importance of accessibility and performance optimization in web applications.'
    },
    {
      title: 'Web Application – Shopping & Recipes Management',
      period: '2025',
      description: 'Full-stack team application (Agile) with recipe API integration and user group management. Deployed on Raspberry Pi with Docker and Nginx reverse proxy.',
      technologies: ['Angular', 'Symfony', 'PostgreSQL', 'OpenFoodFacts API', 'Docker', 'Raspberry Pi', 'Nginx'],
      status: 'In Development',
      type: 'Web Application',
      highlights: [
        'Team-based Agile development',
        'API integration for recipes',
        'User group management system',
        'Containerized deployment'
      ],
      learnings: 'This project taught me the complexities of full-stack development in a team environment. I gained valuable experience with Agile methodologies, API integration patterns, and DevOps practices. Working with Docker and Nginx for deployment deepened my understanding of containerization and reverse proxy configurations, while managing user groups introduced me to complex database relationships and authentication systems.'
    },
    {
      title: 'Finance Utility – Modular Market Analysis',
      period: 'Ongoing',
      description: 'Personal project for analyzing stock market trends (RSI, MACD, MA, Bollinger Bands). Used to strengthen data processing and applied finance skills.',
      technologies: ['Python', 'Pandas', 'Yahoo Finance API', 'matplotlib', 'seaborn'],
      status: 'Active Development',
      type: 'Data Analysis',
      github: 'https://github.com/TerminalGambit/PersonalStockTrackerAnalyser',
      highlights: [
        'Technical indicator analysis',
        'Real-time market data processing',
        'Modular architecture',
        'Financial data visualization'
      ],
      learnings: 'This project bridged my interest in computer science and finance, teaching me how to process and analyze large financial datasets. I learned about technical indicators, data visualization best practices, and the importance of modular code architecture for maintainability. Working with real-time APIs also taught me about rate limiting, error handling, and data validation in financial contexts.'
    },
    {
      title: 'Solo Chess – Java Game Reproduction',
      period: '2024',
      description: 'Faithful reproduction of Chess.com\'s "Solo Chess" mode with rules engine, placement logic, and graphics via libGDX. Uses polymorphism and modular rendering engine.',
      technologies: ['Java', 'libGDX', 'Object-Oriented Architecture', 'UML'],
      status: 'Completed',
      type: 'Game Development',
      github: 'https://github.com/TerminalGambit/PCOO-projetfinal',
      highlights: [
        'Complete game logic implementation',
        'Graphics rendering with libGDX',
        'Object-oriented design patterns',
        'UML documentation'
      ],
      learnings: 'Developing this game strengthened my object-oriented programming skills and taught me the importance of clean architecture in complex systems. I gained experience with game development frameworks, graphics rendering, and state management. The project also reinforced the value of proper documentation and UML modeling for communicating design decisions.'
    },
    {
      title: 'Multi-Client Server – Network Communication',
      period: '2023',
      description: 'Python client-server system with concurrent multi-client handling via threads, signal sending, and custom handlers. Team project of three.',
      technologies: ['Python', 'Sockets', 'Threading', 'Signal Handling'],
      status: 'Completed',
      type: 'Network Programming',
      highlights: [
        'Concurrent client handling',
        'Custom signal processing',
        'Thread-safe communication',
        'Team collaboration'
      ],
      learnings: 'This project introduced me to the complexities of network programming and concurrent systems. I learned about socket programming, thread synchronization, and signal handling mechanisms. Working in a team of three taught me valuable collaboration skills and the importance of clear communication protocols, both in code and team coordination.'
    },
    {
      title: 'GymFlow: Personal Fitness Optimization Engine',
      period: '2024-2025',
      description: 'Treating fitness optimization like quantitative finance - a data-driven personal fitness application that applies mathematical optimization and machine learning to create personalized workout strategies. Features risk-return analysis, portfolio theory, and predictive analytics for fitness goals.',
      technologies: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Scikit-learn', 'TensorFlow', 'React Native', 'Docker'],
      status: 'Active Development',
      type: 'Web Application',
      featured: false,
      highlights: [
        'Quantitative fitness optimization algorithms',
        'Risk-return analysis for exercise selection',
        'Cross-platform (web and mobile) architecture',
        'Real-time workout adaptation system',
        'Predictive modeling for plateau prevention',
        'Portfolio theory applied to training modalities'
      ],
      learnings: 'GymFlow taught me how to apply financial modeling concepts to completely different domains. I learned about optimization algorithms, how to design systems that adapt in real-time, and the challenges of building cross-platform applications. The project deepened my understanding of how mathematical models can be creatively applied outside their traditional contexts, and showed me the importance of domain expertise when building specialized applications.'
    },
    {
      title: 'ChatLLMs: Local AI Chat Application',
      period: '2024-2025',
      description: 'Modern web-based chat application for interacting with local Large Language Models using Ollama. Features real-time streaming, conversation management, speech-to-text, model management, and complete containerization with Docker.',
      technologies: ['React', 'Node.js', 'Express', 'SQLite', 'Docker', 'Ollama', 'WebSocket', 'Speech API'],
      status: 'Production Ready',
      type: 'Web Application',
      featured: false,
      highlights: [
        'Complete Docker containerization with GPU support',
        'Real-time streaming responses from local LLMs',
        'Model download and management interface',
        'Speech-to-text integration with Web Speech API',
        'Persistent conversation storage and search',
        'Privacy-first local-only architecture'
      ],
      learnings: 'Building ChatLLMs introduced me to the rapidly evolving world of local LLM deployment and management. I learned about streaming APIs, real-time WebSocket communication, and the complexities of GPU acceleration in containerized environments. The project taught me about balancing user experience with technical constraints, and how to build privacy-focused applications that compete with cloud services.'
    },
    {
      title: 'Maii: Personal Life Management Suite',
      period: '2024-2025',
      description: 'Modular, offline-first personal web application designed to manage life in one dashboard: expenses, schedule, pantry, macros, and recipes. Built with modern React architecture and component-based design.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'React Router'],
      status: 'Active Development',
      type: 'Web Application',
      featured: false,
      highlights: [
        'Modular architecture with independent feature modules',
        'Offline-first design with local data persistence',
        'Modern React with TypeScript and Vite',
        'Comprehensive life management features',
        'Component-based UI with shadcn/ui integration',
        'Responsive design for all device types'
      ],
      learnings: 'Maii taught me the importance of modular architecture in complex applications and how to design systems that work offline-first. I learned advanced React patterns, state management strategies, and how to build applications that can scale across multiple life domains. The project reinforced the value of TypeScript for large applications and showed me how to create cohesive user experiences across diverse feature sets.'
    },
    {
      title: 'BANG! CLI: Wild West Card Game',
      period: '2024',
      description: 'Fully interactive command-line implementation of the classic BANG! card game with advanced AI opponents, strategy coaching, and spectator modes. Features intelligent AI with role-based decision making and real-time strategy advice.',
      technologies: ['TypeScript', 'Node.js', 'CLI Design', 'Game AI', 'Strategic Logic'],
      status: 'Completed',
      type: 'Game Development',
      featured: false,
      highlights: [
        'Advanced AI opponents with strategic priority systems',
        'Real-time strategy advisor with coaching',
        'Role-based decision making (Sheriff/Deputy vs Outlaw)',
        'Interactive CLI with rich visual design',
        'AI vs AI spectator mode with commentary',
        'Comprehensive game rule implementation'
      ],
      learnings: 'Developing BANG! CLI taught me about game AI design and how to create engaging command-line experiences. I learned about strategic decision trees, probability-based AI behavior, and how to provide meaningful user coaching in real-time. The project showed me how to balance complexity with usability in CLI applications and reinforced the importance of good UX even in terminal-based tools.'
    },
    {
      title: 'Secure Password Manager',
      period: '2024',
      description: 'Comprehensive, military-grade encrypted password manager with web and mobile sync capabilities. Features zero-knowledge architecture, AES-256-GCM encryption, JWT-based mobile authentication, and real-time synchronization across devices.',
      technologies: ['Node.js', 'Express', 'SQLite', 'AES-256-GCM', 'JWT', 'React Native', 'Vite', 'Tailwind'],
      status: 'Completed',
      type: 'Security Application',
      featured: false,
      highlights: [
        'Zero-knowledge architecture with client-side encryption',
        'AES-256-GCM encryption with PBKDF2 key derivation',
        'Cross-platform sync (web, iOS, Android)',
        'Biometric authentication support (Face ID/Touch ID)',
        'Comprehensive security audit logging',
        'JWT-based mobile authentication system'
      ],
      learnings: 'Building a secure password manager taught me the critical importance of cryptographic best practices and zero-knowledge architecture. I learned about encryption algorithms, secure key derivation, and the challenges of building truly secure applications. The project deepened my understanding of authentication systems, cross-platform security considerations, and how to implement security without compromising usability.'
    },
    {
      title: 'Expo Expense Tracker',
      period: '2024',
      description: 'Comprehensive mobile expense tracking application built with Expo and React Native. Features category management, visual analytics with charts, data persistence, and beautiful responsive design optimized for mobile devices.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'AsyncStorage', 'Chart Kit'],
      status: 'Completed',
      type: 'Mobile Application',
      featured: false,
      highlights: [
        'Cross-platform mobile application (iOS/Android)',
        'Interactive charts and data visualization',
        'Custom category management with icons and colors',
        'Local data persistence with AsyncStorage',
        'Modern tab navigation and modal workflows',
        'Responsive design optimized for mobile'
      ],
      learnings: 'Developing this mobile expense tracker taught me the nuances of mobile-first design and the React Native ecosystem. I learned about mobile data persistence, chart libraries, and how to create intuitive mobile user interfaces. The project reinforced the importance of offline-first architecture in mobile apps and showed me how to build applications that feel native on both iOS and Android platforms.'
    },
    {
      title: 'BibleChatApp: AI Spiritual Companion',
      period: '2024',
      description: 'Beautiful, locally-hosted Bible chat application providing spiritual conversations, prayer generation, and inspirational quotes. Built with Flask and powered by local Ollama AI models with complete privacy and Docker containerization.',
      technologies: ['Python', 'Flask', 'Ollama', 'SQLite', 'Docker', 'HTML/CSS/JS'],
      status: 'Completed',
      type: 'Web Application',
      featured: false,
      highlights: [
        'Local AI integration with Ollama models',
        'Personalized prayer generation system',
        'Daily inspirational quotes and verses',
        'User engagement streak tracking',
        'Complete privacy with local-only processing',
        'Docker containerization for easy deployment'
      ],
      learnings: 'Creating BibleChatApp taught me how to build specialized AI applications for niche audiences and the importance of privacy in sensitive domains. I learned about integrating local AI models, designing for spiritual and emotional needs, and how to create applications that encourage positive habits. The project reinforced the value of local-first architecture for privacy-sensitive applications.'
    },
    {
      title: 'Multi-Agent Logic Interaction System',
      period: '2024',
      description: 'Sophisticated web-based simulation environment for modeling complex interactions between intelligent agents. Features customizable logic rules, real-time visualization, behavioral modeling, and network analysis for research applications.',
      technologies: ['JavaScript', 'Canvas API', 'Logic Programming', 'Network Analysis', 'Data Visualization'],
      status: 'Completed',
      type: 'Simulation & Research',
      featured: false,
      highlights: [
        'Advanced agent behavioral modeling system',
        'Real-time network visualization with Canvas API',
        'JavaScript-based logic rule engine',
        'Trust and deception modeling capabilities',
        'Interactive simulation controls and analytics',
        'Data export for research analysis'
      ],
      learnings: 'Developing this multi-agent system taught me about complex systems modeling and emergent behavior analysis. I learned about agent-based programming, network theory, and how to visualize complex interactions in real-time. The project deepened my understanding of how simple rules can create complex behaviors and showed me the challenges of building research tools that are both powerful and accessible.'
    },
    {
      title: 'Blackjack Development Suite',
      period: '2024-2025',
      description: 'Comprehensive collection of blackjack-related projects including game implementations, AI strategy analysis, Monte Carlo simulations, and mathematical modeling. Features standalone game, simulation engine, and educational components.',
      technologies: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'LaTeX', 'Statistical Analysis', 'Game Theory'],
      status: 'Active Development',
      type: 'Game Development',
      featured: true,
      highlights: [
        'Multiple interconnected blackjack projects',
        'Advanced AI strategy implementation',
        'Monte Carlo simulation engine',
        'Mathematical modeling and analysis',
        'Educational game theory components',
        'Comprehensive testing and validation'
      ],
      learnings: 'The Blackjack Suite taught me how to approach complex projects from multiple angles - implementation, analysis, and education. I learned about game theory, statistical analysis, and how to build comprehensive project ecosystems. The suite showed me the value of creating interconnected projects that reinforce and complement each other, and how mathematical concepts can be made accessible through interactive implementations.'
    },
    {
      title: 'Terminal Game in C',
      period: '2023',
      description: 'Interactive text-based game in C with command-line interface, low-level memory work, direct access, and control structures. Reinforced understanding of low-level memory model.',
      technologies: ['C', 'Memory Management', 'Game Logic', 'CLI Interface'],
      status: 'Completed',
      type: 'Systems Programming',
      highlights: [
        'Manual memory management',
        'Low-level system programming',
        'Command-line interface design',
        'Performance optimization'
      ],
      learnings: 'Programming in C gave me a deep understanding of memory management and low-level system operations. I learned about pointers, memory allocation/deallocation, and the importance of writing efficient code. This project taught me to think critically about resource usage and helped me understand how higher-level languages abstract away complexity.'
    }
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Production Ready': return 'primary';
      case 'Completed': return 'primary';
      case 'Active Development': return 'accent';
      case 'In Development': return 'warn';
      default: return 'basic';
    }
  }

  getProjectIcon(type: string): string {
    switch (type) {
      case 'Machine Learning': return 'psychology';
      case 'Web Application': return 'web';
      case 'Data Analysis': return 'analytics';
      case 'Game Development': return 'sports_esports';
      case 'Network Programming': return 'network_check';
      case 'Systems Programming': return 'computer';
      case 'Mobile Application': return 'phone_android';
      case 'Security Application': return 'security';
      case 'Simulation & Research': return 'science';
      default: return 'code';
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  viewProjectDetail(projectTitle: string): void {
    if (projectTitle.includes('ApexAgent')) {
      this.router.navigate(['/project', 'apexagent']);
    } else if (projectTitle.includes('Blackjack Development Suite')) {
      this.router.navigate(['/project', 'blackjack-suite']);
    }
  }
}
