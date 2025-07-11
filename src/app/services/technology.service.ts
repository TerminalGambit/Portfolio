import { Injectable } from '@angular/core';
import { Technology, TechnologyCategory, SkillLevel, ProjectTechnology } from '../interfaces/technology.interface';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private categories: TechnologyCategory[] = [
    { name: 'Programming Languages', color: '#4CAF50', icon: 'code' },
    { name: 'Web Development', color: '#2196F3', icon: 'web' },
    { name: 'Data Science & ML', color: '#FF9800', icon: 'analytics' },
    { name: 'Financial Modeling', color: '#FF5722', icon: 'trending_up' },
    { name: 'Data Visualization', color: '#E91E63', icon: 'insert_chart' },
    { name: 'Databases', color: '#9C27B0', icon: 'storage' },
    { name: 'DevOps & Tools', color: '#607D8B', icon: 'build' },
    { name: 'Frameworks & Libraries', color: '#00BCD4', icon: 'library_books' }
  ];

  private technologies: Technology[] = [
    // Programming Languages
    {
      name: 'Python',
      icon: 'devicon-python-plain colored',
      category: this.categories[0],
      level: SkillLevel.ADVANCED,
      description: 'Primary language for AI/ML, data analysis, and backend development'
    },
    {
      name: 'Java',
      icon: 'devicon-java-plain colored',
      category: this.categories[0],
      level: SkillLevel.ADVANCED,
      description: 'Object-oriented programming, enterprise applications'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored',
      category: this.categories[0],
      level: SkillLevel.INTERMEDIATE,
      description: 'Type-safe JavaScript for modern web development'
    },
    {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain colored',
      category: this.categories[0],
      level: SkillLevel.INTERMEDIATE,
      description: 'Dynamic web development and full-stack applications'
    },
    {
      name: 'C++',
      icon: 'devicon-cplusplus-plain colored',
      category: this.categories[0],
      level: SkillLevel.INTERMEDIATE,
      description: 'Systems programming and performance-critical applications'
    },
    {
      name: 'SQL',
      icon: 'devicon-mysql-plain colored',
      category: this.categories[0],
      level: SkillLevel.INTERMEDIATE,
      description: 'Database querying and data manipulation'
    },

    // Web Development
    {
      name: 'Angular',
      icon: 'devicon-angularjs-plain colored',
      category: this.categories[1],
      level: SkillLevel.ADVANCED,
      description: 'Modern web application framework'
    },
    {
      name: 'React',
      icon: 'devicon-react-original colored',
      category: this.categories[1],
      level: SkillLevel.INTERMEDIATE,
      description: 'Component-based UI library'
    },
    {
      name: 'HTML5',
      icon: 'devicon-html5-plain colored',
      category: this.categories[1],
      level: SkillLevel.ADVANCED,
      description: 'Modern web markup and semantics'
    },
    {
      name: 'CSS3',
      icon: 'devicon-css3-plain colored',
      category: this.categories[1],
      level: SkillLevel.ADVANCED,
      description: 'Advanced styling and responsive design'
    },
    {
      name: 'SCSS',
      icon: 'devicon-sass-original colored',
      category: this.categories[1],
      level: SkillLevel.INTERMEDIATE,
      description: 'Enhanced CSS with variables and mixins'
    },

    // Data Science & ML
    {
      name: 'Pandas',
      icon: 'devicon-pandas-original colored',
      category: this.categories[2],
      level: SkillLevel.ADVANCED,
      description: 'Data manipulation and analysis library'
    },
    {
      name: 'NumPy',
      icon: 'devicon-numpy-original colored',
      category: this.categories[2],
      level: SkillLevel.INTERMEDIATE,
      description: 'Numerical computing and array operations'
    },
    {
      name: 'TensorFlow',
      icon: 'devicon-tensorflow-original colored',
      category: this.categories[2],
      level: SkillLevel.INTERMEDIATE,
      description: 'Machine learning and deep learning framework'
    },
    {
      name: 'Jupyter',
      icon: 'devicon-jupyter-plain colored',
      category: this.categories[2],
      level: SkillLevel.INTERMEDIATE,
      description: 'Interactive computing and data analysis'
    },
    {
      name: 'Scikit-learn',
      icon: 'devicon-scikitlearn-plain colored',
      category: this.categories[2],
      level: SkillLevel.INTERMEDIATE,
      description: 'Machine learning algorithms and tools'
    },
    {
      name: 'Go',
      icon: 'devicon-go-plain colored',
      category: this.categories[0],
      level: SkillLevel.BEGINNER,
      description: 'Microservices and high-performance applications'
    },

    // Financial Modeling
    {
      name: 'Quantitative Finance',
      icon: 'fas fa-chart-line',
      category: this.categories[3],
      level: SkillLevel.INTERMEDIATE,
      description: 'Mathematical models for financial markets'
    },
    {
      name: 'Risk Management',
      icon: 'fas fa-shield-alt',
      category: this.categories[3],
      level: SkillLevel.INTERMEDIATE,
      description: 'Portfolio optimization and risk assessment'
    },
    {
      name: 'Algorithmic Trading',
      icon: 'fas fa-robot',
      category: this.categories[3],
      level: SkillLevel.BEGINNER,
      description: 'Automated trading strategies and backtesting'
    },
    {
      name: 'Market Analysis',
      icon: 'fas fa-chart-area',
      category: this.categories[3],
      level: SkillLevel.INTERMEDIATE,
      description: 'Technical and fundamental analysis'
    },

    // Data Visualization
    {
      name: 'Matplotlib',
      icon: 'fas fa-chart-bar',
      category: this.categories[4],
      level: SkillLevel.ADVANCED,
      description: 'Python plotting and visualization library'
    },
    {
      name: 'Seaborn',
      icon: 'fas fa-chart-pie',
      category: this.categories[4],
      level: SkillLevel.INTERMEDIATE,
      description: 'Statistical data visualization'
    },
    {
      name: 'Plotly',
      icon: 'fas fa-chart-line',
      category: this.categories[4],
      level: SkillLevel.INTERMEDIATE,
      description: 'Interactive web-based visualizations'
    },
    {
      name: 'D3.js',
      icon: 'devicon-d3js-plain colored',
      category: this.categories[4],
      level: SkillLevel.BEGINNER,
      description: 'Custom data-driven visualizations'
    },
    {
      name: 'XGBoost',
      icon: 'fas fa-chart-line',
      category: this.categories[2],
      level: SkillLevel.INTERMEDIATE,
      description: 'Gradient boosting framework for machine learning'
    },
    {
      name: 'BigQuery ML',
      icon: 'fab fa-google',
      category: this.categories[2],
      level: SkillLevel.INTERMEDIATE,
      description: 'Machine learning in Google BigQuery'
    },
    {
      name: 'Google Cloud Platform',
      icon: 'fab fa-google',
      category: this.categories[6],
      level: SkillLevel.INTERMEDIATE,
      description: 'Cloud computing and data engineering platform'
    },
    {
      name: 'n8n Workflows',
      icon: 'fas fa-project-diagram',
      category: this.categories[6],
      level: SkillLevel.INTERMEDIATE,
      description: 'Workflow automation and integration platform'
    },
    {
      name: 'PyTorch',
      icon: 'fas fa-brain',
      category: this.categories[2],
      level: SkillLevel.INTERMEDIATE,
      description: 'Deep learning framework'
    },

    // Databases
    {
      name: 'MySQL',
      icon: 'devicon-mysql-plain colored',
      category: this.categories[5],
      level: SkillLevel.INTERMEDIATE,
      description: 'Relational database management'
    },
    {
      name: 'PostgreSQL',
      icon: 'devicon-postgresql-plain colored',
      category: this.categories[5],
      level: SkillLevel.INTERMEDIATE,
      description: 'Advanced relational database system'
    },
    {
      name: 'MongoDB',
      icon: 'devicon-mongodb-plain colored',
      category: this.categories[5],
      level: SkillLevel.BEGINNER,
      description: 'NoSQL document database'
    },

    // DevOps & Tools
    {
      name: 'Git',
      icon: 'devicon-git-plain colored',
      category: this.categories[6],
      level: SkillLevel.ADVANCED,
      description: 'Version control and collaboration'
    },
    {
      name: 'GitHub',
      icon: 'devicon-github-original colored',
      category: this.categories[6],
      level: SkillLevel.ADVANCED,
      description: 'Code hosting and project management'
    },
    {
      name: 'Docker',
      icon: 'devicon-docker-plain colored',
      category: this.categories[6],
      level: SkillLevel.INTERMEDIATE,
      description: 'Containerization and deployment'
    },
    {
      name: 'VS Code',
      icon: 'devicon-vscode-plain colored',
      category: this.categories[6],
      level: SkillLevel.ADVANCED,
      description: 'Primary development environment'
    },
    {
      name: 'Linux',
      icon: 'devicon-linux-plain colored',
      category: this.categories[6],
      level: SkillLevel.INTERMEDIATE,
      description: 'Unix-based operating systems'
    },

    // Frameworks & Libraries
    {
      name: 'Node.js',
      icon: 'devicon-nodejs-plain colored',
      category: this.categories[7],
      level: SkillLevel.INTERMEDIATE,
      description: 'JavaScript runtime for backend development'
    },
    {
      name: 'Express.js',
      icon: 'devicon-express-original colored',
      category: this.categories[5],
      level: SkillLevel.INTERMEDIATE,
      description: 'Minimal web framework for Node.js'
    },
    {
      name: 'Material UI',
      icon: 'devicon-materialui-plain colored',
      category: this.categories[5],
      level: SkillLevel.INTERMEDIATE,
      description: 'React component library with Material Design'
    }
  ];

  getTechnologies(): Technology[] {
    return this.technologies;
  }

  getTechnologiesByCategory(categoryName: string): Technology[] {
    return this.technologies.filter(tech => tech.category.name === categoryName);
  }

  getCategories(): TechnologyCategory[] {
    return this.categories;
  }

  getTechnologyByName(name: string): Technology | undefined {
    return this.technologies.find(tech => tech.name.toLowerCase() === name.toLowerCase());
  }

  // For project technology lists
  getProjectTechnologies(techNames: string[]): ProjectTechnology[] {
    return techNames.map(name => {
      const tech = this.getTechnologyByName(name);
      return {
        name: tech?.name || name,
        icon: tech?.icon || 'devicon-devicon-plain',
        primary: ['Python', 'Java', 'Angular', 'React', 'TypeScript'].includes(name)
      };
    });
  }

  // Get technologies by skill level
  getTechnologiesByLevel(level: SkillLevel): Technology[] {
    return this.technologies.filter(tech => tech.level === level);
  }
}
