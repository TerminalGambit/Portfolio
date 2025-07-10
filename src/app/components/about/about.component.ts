import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = {
    languages: ['Python', 'Java', 'C', 'OCaml', 'TypeScript', 'JavaScript'],
    aiMl: ['Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face'],
    webDatabases: ['Angular', 'Symfony', 'MySQL', 'PostgreSQL', 'REST APIs'],
    devOps: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Unix/Linux'],
    tools: ['Git', 'GitHub', 'Agile', 'UML', 'LaTeX']
  };

  experiences = [
    {
      title: 'Research Intern',
      company: 'i3S Research Laboratory',
      location: 'Sophia Antipolis',
      period: 'Summer 2024',
      description: 'Integrated Constraint Programming with NLP, optimized search processes, and applied KL Divergence for language model evaluation.',
      technologies: ['Constraint Programming', 'NLP', 'Beam Search', 'KL Divergence'],
      publication: 'https://arxiv.org/pdf/2407.13490'
    },
    {
      title: 'Private Tutor',
      company: 'Self-Employed',
      location: 'Monaco',
      period: '2022-Present',
      description: 'Personalized tutoring in computer science, mathematics, physics, and chess.',
      technologies: ['Teaching', 'Problem Solving', 'Academic Support']
    }
  ];
}
