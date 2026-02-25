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
      "Graph-based news impact monitoring for luxury asset portfolios. Built knowledge graph (320 nodes, 800 edges) linking 128 high-value assets (CHF 316M) to real-time market events.",
    problem:
      "Luxury asset collectors need to know when market news impacts their diversified portfolios \u2014 but impact is rarely direct.",
    approach:
      "Knowledge graph with weighted BFS propagation (up to 3 hops with decay), sentence-transformer embeddings (all-MiniLM-L6-v2), scoring formula: (graph_propagation \u00d7 0.7) + (embedding_similarity \u00d7 0.3) \u00d7 sentiment_multiplier.",
    impact: [
      "Validated CHF 17.2M in asset values",
      "Graph enables indirect impact detection across asset categories",
      "Production MVP with mobile apps + Streamlit + FastAPI",
    ],
    metrics: {
      "Portfolio Value": "CHF 316M",
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
      "Redistributed ~955,000 insurance policies across 2,533 H3 hexagonal zones over 10 years using LP. Reduced risk by 6.8% while achieving 62.9% growth.",
    problem:
      "Redistribute ~955K policies across 2,533 H3 hexagonal grid zones over 10 years to minimize climate risk while maintaining 5% annual growth.",
    approach:
      "Multi-period LP with CVXPY (27,863 variables). Composite Risk Index: loss per policy (50%), claim frequency (25%), hazard diversity (15%), temporal concentration (10%).",
    impact: [
      "Reduced risk by 6.8%",
      "Grew portfolio 62.9%",
      "Hit 5% annual growth target precisely",
      "All constraints satisfied",
    ],
    metrics: {
      "Policies Optimized": "955K",
      "Risk Reduction": "-6.8%",
      "Portfolio Growth": "+62.9%",
      "Spatial Zones": "2,533",
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
      "Analyzed sales across 3 BUs using PVM decomposition and ML anomaly detection. Identified \u20AC60.7M revenue opportunity with 21x ROI.",
    problem:
      "Analyze sales performance across France, Italy, Spain to identify underperformance across 33,610 customers and 2.98M transactions.",
    approach:
      "Price-Volume-Mix decomposition, ML anomaly detection (isolation forests), customer cohort analysis, category recurrence analysis.",
    impact: [
      "Identified \u20AC60.7M revenue opportunity",
      "Discovered volume drives 60% of gap",
      "Proved Italy compensates 59% volume loss with pricing (unsustainable)",
      "Spain double hit identified",
      "21x ROI projection",
    ],
    metrics: {
      "Revenue Opportunity": "\u20AC60.7M",
      "Projected ROI": "21x",
      "Customers Analyzed": "33,610",
      Transactions: "2.98M",
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
      "Evaluated viability of Borrow-to-Trade product for 11,192 EARN users. Modeled LTV scenarios and quantified revenue/risk.",
    problem:
      "Evaluate whether Borrow-to-Trade is viable for EARN users.",
    approach:
      "User segmentation, LTV scenario modeling (30-50%), sensitivity analyses, AUM impact, regulatory risk.",
    impact: [
      "68.5% active traders identified",
      "3,031 projected adopters (27%)",
      "30% LTV safe threshold established",
      "CHF 723/user revenue modeled",
      "Verdict: potentially viable but HIGH RISK",
    ],
    metrics: {
      "Users Analyzed": "11,192",
      "Expected Adoption": "27%",
      "Safe LTV": "30%",
      "Revenue/User": "CHF 723",
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
      "4-tier classification (A: CHF 5M+)",
      "Configurable scoring weights",
      "Complete audit trail",
    ],
    metrics: {
      "Scoring Factors": "4",
      "Priority Tiers": "A/B/C/D",
      "Wealth Threshold (A)": "CHF 5M+",
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
