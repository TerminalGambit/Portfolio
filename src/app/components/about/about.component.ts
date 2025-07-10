import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TechnologyService } from '../../services/technology.service';
import { Technology, TechnologyCategory } from '../../interfaces/technology.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  technologies: Technology[] = [];
  categories: TechnologyCategory[] = [];
  
  constructor(private technologyService: TechnologyService) {}
  
  ngOnInit() {
    this.technologies = this.technologyService.getTechnologies();
    this.categories = this.technologyService.getCategories();
  }
  
  getTechnologiesByCategory(categoryName: string): Technology[] {
    return this.technologyService.getTechnologiesByCategory(categoryName);
  }

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
