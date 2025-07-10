import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
