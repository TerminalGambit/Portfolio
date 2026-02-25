export interface CaseStudy {
  title: string;
  slug: string;
  company: string;
  companyType: string;
  period: string;
  status: "Complete" | "Production Ready" | "In Progress";
  summary: string;
  problem: string;
  approach: string;
  impact: string[];
  metrics: Record<string, string>;
  technologies: string[];
  methodologies: string[];
  deliverables: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "JEMA - Luxury Asset Intelligence System",
    slug: "jema-asset-intelligence",
    company: "JEMA",
    companyType: "Insurance & Valuation",
    period: "2025\u20132026",
    status: "Production Ready",
    summary:
      "Graph-based news impact monitoring for luxury asset portfolios. Built knowledge graph linking 100+ high-value assets (CHF 300M+) to real-time market events.",
    problem:
      "Luxury asset collectors need to know when market news impacts their diversified portfolios \u2014 but impact is rarely direct.",
    approach:
      "Knowledge graph with weighted BFS propagation (up to 3 hops with decay), sentence-transformer embeddings (all-MiniLM-L6-v2), scoring formula: (graph_propagation \u00d7 0.7) + (embedding_similarity \u00d7 0.3) \u00d7 sentiment_multiplier.",
    impact: [
      "Validated millions in asset values through automated market comparisons",
      "Graph enables indirect impact detection across asset categories",
      "Production MVP with mobile apps + Streamlit + FastAPI",
    ],
    metrics: {
      "Portfolio Value": "CHF 300M+",
      "Graph Nodes": "320+",
      "Asset Categories": "10",
      "Data Sources": "36 curated",
    },
    technologies: [
      "Python",
      "FastAPI",
      "NetworkX",
      "spaCy",
      "sentence-transformers",
      "HDBSCAN",
      "UMAP",
      "Streamlit",
      "Plotly",
      "Expo/React Native",
      "SwiftUI",
      "Docker",
    ],
    methodologies: [
      "Knowledge Graph Design",
      "Entity Extraction (NER)",
      "Semantic Embeddings",
      "Community Detection (Louvain)",
      "Fuzzy Matching",
      "Impact Propagation (BFS)",
    ],
    deliverables: [
      "Production-ready graph architecture",
      "Entity extraction + impact propagation pipeline",
      "Streamlit dashboard (Graph Explorer, Impact Simulator, Asset Clusters, News Feed)",
      "Cross-platform mobile apps (Expo + iOS)",
      "Docker containerization",
    ],
    featured: true,
  },
  {
    title: "Generali France - Climate Risk Portfolio Optimization",
    slug: "generali-climate-risk",
    company: "Generali France",
    companyType: "Insurance",
    period: "2025\u20132026",
    status: "Complete",
    summary:
      "Redistributed ~1M insurance policies across 2,500+ H3 hexagonal zones over 10 years using LP. Reduced risk by ~7% while achieving ~63% growth.",
    problem:
      "Redistribute ~1M policies across 2,500+ H3 hexagonal grid zones over 10 years to minimize climate risk while maintaining 5% annual growth.",
    approach:
      "Multi-period LP with CVXPY (~28K variables). Composite Risk Index: loss per policy (50%), claim frequency (25%), hazard diversity (15%), temporal concentration (10%).",
    impact: [
      "Reduced risk by ~7%",
      "Grew portfolio ~63%",
      "Hit 5% annual growth target precisely",
      "All constraints satisfied",
    ],
    metrics: {
      "Policies Optimized": "~1M",
      "Risk Reduction": "~7%",
      "Portfolio Growth": "~63%",
      "Spatial Zones": "2,500+",
    },
    technologies: [
      "Python",
      "CVXPY",
      "pandas",
      "numpy",
      "h3",
      "geopandas",
      "folium",
      "Streamlit",
      "Plotly",
      "scipy",
    ],
    methodologies: [
      "Linear Programming",
      "Convex Optimization",
      "Geospatial Analysis (H3)",
      "Risk Quantification",
      "Multi-Period Constraint Modeling",
    ],
    deliverables: [
      "Complete preprocessing pipeline",
      "CVXPY LP model",
      "Streamlit dashboard with H3 maps",
      "Timeline visualization",
      "Technical docs",
    ],
    featured: true,
  },
  {
    title: "Valrhona - Business Unit Performance Analysis",
    slug: "valrhona-business-intelligence",
    company: "Valrhona",
    companyType: "Premium Chocolate Manufacturer",
    period: "2025",
    status: "Complete",
    summary:
      "Analyzed sales across 3 BUs using PVM decomposition and ML anomaly detection. Identified €60M+ revenue opportunity with 20x+ ROI.",
    problem:
      "Analyze sales performance across France, Italy, Spain to identify underperformance across 30,000+ customers and ~3M transactions.",
    approach:
      "Price-Volume-Mix decomposition, ML anomaly detection (isolation forests), customer cohort analysis, category recurrence analysis.",
    impact: [
      "Identified €60M+ revenue opportunity",
      "Discovered volume drives majority of the performance gap",
      "Proved one market compensates volume loss with pricing power (unsustainable)",
      "Spain double hit identified",
      "21x ROI projection",
    ],
    metrics: {
      "Revenue Opportunity": "€60M+",
      "Projected ROI": "20x+",
      "Customers Analyzed": "30,000+",
      Transactions: "~3M",
    },
    technologies: [
      "Python",
      "pandas",
      "numpy",
      "scikit-learn",
      "scipy",
      "Streamlit",
      "Plotly",
      "matplotlib",
    ],
    methodologies: [
      "Price-Volume-Mix Decomposition",
      "ML Anomaly Detection",
      "Customer Cohort Analysis",
      "Category Recurrence Analysis",
      "Revenue Breakdown",
      "Supplier Chain Continuation",
    ],
    deliverables: [
      "Interactive Streamlit dashboard (4 insight pages)",
      "PVM waterfall charts",
      "ML models",
      "Complete findings (1,120 lines)",
      "Executive presentation",
    ],
    featured: true,
  },
  {
    title: "SwissBorg - Borrow-to-Trade Product Evaluation",
    slug: "swissborg-product-evaluation",
    company: "SwissBorg",
    companyType: "Crypto Wealth Management",
    period: "2025",
    status: "Complete",
    summary:
      "Evaluated viability of Borrow-to-Trade product for 11,000+ EARN users. Modeled LTV scenarios and quantified revenue/risk.",
    problem:
      "Evaluate whether Borrow-to-Trade is viable for EARN users.",
    approach:
      "User segmentation, LTV scenario modeling (30-50%), sensitivity analyses, AUM impact, regulatory risk.",
    impact: [
      "~70% active traders identified",
      "~3,000 projected adopters (~25-30%)",
      "30% LTV safe threshold established",
      "~CHF 700/user revenue modeled",
      "Verdict: potentially viable but HIGH RISK",
    ],
    metrics: {
      "Users Analyzed": "11,000+",
      "Expected Adoption": "~25-30%",
      "Safe LTV": "30%",
      "Revenue/User": "~CHF 700",
    },
    technologies: [
      "Python",
      "pandas",
      "numpy",
      "Jupyter",
      "matplotlib",
      "seaborn",
    ],
    methodologies: [
      "User Segmentation",
      "Financial Modeling",
      "Scenario Analysis",
      "Sensitivity Analysis",
      "Risk Assessment",
      "KPI Strategy",
    ],
    deliverables: [
      "Evaluation framework",
      "Sensitivity analyses",
      "KPI strategy presentation",
      "Database schema designs",
      "Executive summary",
    ],
    featured: false,
  },
  {
    title: "CA-Indosuez - HNW Lead Scoring System",
    slug: "ca-indosuez-lead-scoring",
    company: "CA-Indosuez",
    companyType: "Wealth Management Bank",
    period: "2025",
    status: "Complete",
    summary:
      "Automated pipeline to extract, score, and rank HNW prospects from PDF documents using multi-factor scoring.",
    problem:
      "Process PDFs and rank wealth management leads based on wealth indicators, contact completeness, professional details.",
    approach:
      "4-component pipeline: PDF extraction, regex parsing, multi-factor scoring (wealth 40%, contact 25%, professional 20%, activity 15%), SQLite storage.",
    impact: [
      "Automated bulk PDF processing",
      "4-tier classification by wealth indicators",
      "Configurable scoring weights",
      "Complete audit trail",
    ],
    metrics: {
      "Scoring Factors": "4",
      "Priority Tiers": "A/B/C/D",
      "Wealth Threshold (A)": "Multi-million CHF",
    },
    technologies: [
      "Python",
      "SQLite",
      "PyPDF2",
      "pandas",
      "regex",
    ],
    methodologies: [
      "Multi-Factor Scoring",
      "PDF Processing",
      "Entity Extraction",
      "Lead Qualification",
      "Configurable Weighting",
    ],
    deliverables: [
      "Complete Python application",
      "CLI for list/filter/sort/export",
      "SQLite database",
      "Test suite",
    ],
    featured: false,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
