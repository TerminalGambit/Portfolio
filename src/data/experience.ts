export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  location?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  publication?: string;
}

export const education: Education[] = [
  {
    institution: "Albert School × Mines Paris PSL",
    degree: "International Master in Data and Finance",
    period: "2025–2027",
    location: "Paris",
  },
  {
    institution: "Université Côte d'Azur",
    degree: "BSc Computer Science — Honors",
    period: "2022–2025",
    location: "Nice",
  },
  {
    institution: "Self-Taught ML Intensive",
    degree: "ML Engineering & AI Agents",
    period: "Summer 2025",
  },
  {
    institution: "Lycée Albert 1er Monaco",
    degree: "French Baccalaureate — Mention Très Bien",
    period: "2019–2022",
    location: "Monaco",
  },
];

export const experience: Experience[] = [
  {
    role: "Business Data Consultant",
    company: "Albert School BDD Program",
    location: "Paris",
    period: "2025–2026",
    description:
      "Led 5 real-world business consulting projects with major companies: built a CHF 316M luxury asset intelligence system (JEMA), optimized climate risk for 955K insurance policies (Generali France), identified €60.7M revenue opportunity (Valrhona), evaluated crypto product viability (SwissBorg), and designed HNW lead scoring (CA-Indosuez).",
    technologies: ["Python", "CVXPY", "NetworkX", "spaCy", "Streamlit", "Plotly", "FastAPI"],
  },
  {
    role: "Summer Research Intern",
    company: "i3S Laboratory",
    location: "Sophia Antipolis",
    period: "Jun–Jul 2024",
    description:
      "Explored integration of Constraint Programming & NLP. Worked on Beam Search decoding strategies, applied KL Divergence & Perplexity to evaluate generated content. Contributions integrated into a CP 2024 paper.",
    technologies: ["Constraint Programming", "NLP", "Beam Search", "KL Divergence"],
    publication: "https://arxiv.org/pdf/2407.13490",
  },
  {
    role: "Google Developer Student Clubs",
    company: "Université Côte d'Azur",
    location: "Nice",
    period: "2023–2025",
    description:
      "Introduced to Go programming and Microservices architecture through collaborative development.",
    technologies: ["Go", "Microservices"],
  },
  {
    role: "Private Tutor",
    company: "Self-employed",
    location: "Monaco",
    period: "2022–Present",
    description:
      "Teaching Mathematics, Physics, Computer Science, and Chess to students of various levels.",
    technologies: ["Mathematics", "Physics", "Computer Science", "Chess"],
  },
];
