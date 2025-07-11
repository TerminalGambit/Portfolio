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
      title: 'Summer Intern',
      company: 'i3S Laboratory',
      location: 'Sophia Antipolis',
      period: 'June 2024 – July 2024',
      description: 'Explored integration of Constraint Programming & NLP for real-world problem solving. Worked on Beam Search & Decoding Strategies in NLP. Applied KL Divergence & Perplexity to evaluate generated content. Reproduced results from Yao et al. (ICLR 2024); contributions integrated into a paper for CP 2024.',
      technologies: ['Constraint Programming', 'NLP', 'Beam Search', 'KL Divergence', 'Perplexity', 'Scientific Research'],
      publication: 'https://arxiv.org/pdf/2407.13490'
    },
    {
      title: 'Member',
      company: 'Google Developer Student Clubs',
      location: 'Université Côte d\'Azur',
      period: 'September 2023 – June 2025',
      description: 'Joined at the start of second year of CS degree. Introduced to the Go programming language and its use in Microservices architecture.',
      technologies: ['Go', 'Microservices', 'Software Development', 'Community Building']
    },
    {
      title: 'Private Tutor',
      company: 'Self-employed',
      location: 'Monaco',
      period: 'September 2022 – Present',
      description: 'Grew leadership skills through multiple young students. Taught Mathematics, Physics, Computer Science & Chess to students of various levels.',
      technologies: ['Teaching', 'Leadership', 'Mathematics', 'Physics', 'Computer Science', 'Chess']
    }
  ];
}
