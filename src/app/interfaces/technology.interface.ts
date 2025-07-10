export interface Technology {
  name: string;
  icon: string; // Devicon class name
  category: TechnologyCategory;
  level: SkillLevel;
  description?: string;
}

export interface TechnologyCategory {
  name: string;
  color: string; // CSS color class or hex
  icon?: string;
}

export enum SkillLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate', 
  ADVANCED = 'Advanced',
  EXPERT = 'Expert'
}

export interface ProjectTechnology {
  name: string;
  icon: string;
  primary?: boolean; // If this is a primary technology for the project
}
