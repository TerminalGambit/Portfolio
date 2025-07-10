import { Component } from '@angular/core';
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
  
  constructor(private technologyService: TechnologyService) {}
  
  getProjectTechnologies(technologies: string[]): ProjectTechnology[] {
    return this.technologyService.getProjectTechnologies(technologies);
  }
  
  projects = [
    {
      title: 'AI Portfolio Website',
      period: '2025',
      description: 'Modern portfolio website built with Angular featuring AI-driven design, responsive layouts, and interactive components. Showcases projects, skills, and professional experience.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Material Design', 'Responsive Design'],
      status: 'Active Development',
      type: 'Web Application',
      github: 'https://github.com/TerminalGambit/F1-ML',
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
      case 'Completed': return 'primary';
      case 'Active Development': return 'accent';
      case 'In Development': return 'warn';
      default: return 'basic';
    }
  }

  getProjectIcon(type: string): string {
    switch (type) {
      case 'Web Application': return 'web';
      case 'Data Analysis': return 'analytics';
      case 'Game Development': return 'sports_esports';
      case 'Network Programming': return 'network_check';
      case 'Systems Programming': return 'computer';
      default: return 'code';
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
