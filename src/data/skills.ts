export interface Skill {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Go", level: "Beginner" },
    ],
  },
  {
    name: "AI / ML",
    skills: [
      { name: "Pandas", level: "Advanced" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "XGBoost", level: "Intermediate" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "spaCy", level: "Intermediate" },
      { name: "NetworkX", level: "Intermediate" },
    ],
  },
  {
    name: "Web",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Angular", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Tailwind", level: "Intermediate" },
    ],
  },
  {
    name: "Finance",
    skills: [
      { name: "Quantitative Finance", level: "Intermediate" },
      { name: "Risk Management", level: "Intermediate" },
      { name: "Market Analysis", level: "Intermediate" },
      { name: "Algorithmic Trading", level: "Beginner" },
      { name: "Linear Programming", level: "Intermediate" },
      { name: "Business Intelligence", level: "Advanced" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
      { name: "GCP", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Streamlit", level: "Advanced" },
    ],
  },
  {
    name: "Data Viz",
    skills: [
      { name: "Matplotlib", level: "Advanced" },
      { name: "Plotly", level: "Intermediate" },
      { name: "Seaborn", level: "Intermediate" },
      { name: "D3.js", level: "Beginner" },
    ],
  },
  {
    name: "Optimization & NLP",
    skills: [
      { name: "CVXPY", level: "Intermediate" },
      { name: "H3 Geospatial", level: "Intermediate" },
      { name: "HDBSCAN", level: "Intermediate" },
      { name: "Sentence Transformers", level: "Intermediate" },
    ],
  },
];
