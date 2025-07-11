import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { TechnologyService } from '../../services/technology.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private technologyService: TechnologyService
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.params['id'];
  }

  goBack() {
    this.router.navigate(['/projects']);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  // ApexAgent project data
  apexAgentProject = {
    title: 'ApexAgent: F1 Machine Learning Project',
    subtitle: 'Sophisticated Formula 1 Analytics Platform with End-to-End MLOps',
    overview: 'ApexAgent is a sophisticated, open-source Formula 1 analytics platform that combines cutting-edge machine learning with responsible AI engineering practices. The project demonstrates end-to-end MLOps capabilities while delivering real-world predictive insights for Formula 1 racing data.',
    vision: 'ApexAgent aims to create a robust, responsible, and extensible AI system that leverages Formula 1 data to deliver predictive analytics while setting a standard for engineering excellence in real-world machine learning projects. The project embraces agentic AI principles - systems designed to act autonomously, adapt to new data, and make decisions in dynamic environments, much like F1 teams during races.',
    github: 'https://github.com/TerminalGambit/ApexAgent',
    
    metrics: {
      dataProcessed: '6,502+ laps',
      racesAnalyzed: '6 major F1 races',
      features: '56 sophisticated features',
      bestRMSE: '0.350s',
      bestR2: '0.992',
      dataRetention: '96-100%',
      modelsImplemented: '7 production-ready models'
    },

    coreFeatures: [
      {
        title: '🔧 Complete Data Pipeline',
        items: [
          'Data Sources: FastF1 API integration for comprehensive F1 telemetry and timing data',
          'Processing Scale: Successfully processed 6,502+ laps from 6 major 2025 F1 races',
          'Feature Engineering: 56 sophisticated features including lap dynamics, rolling statistics, driver context, and race strategy metrics',
          'Data Quality: Robust cleaning with 96-100% data retention and comprehensive validation'
        ]
      },
      {
        title: '🤖 Advanced Machine Learning Models',
        description: 'The project has implemented 7 production-ready models with impressive performance:',
        items: []
      },
      {
        title: '📊 Comprehensive Analytics',
        items: [
          'Lap Time Prediction: Accurate predictions within 0.35 seconds for race strategy optimization',
          'Circuit Analysis: Detailed performance metrics across diverse track types (Monaco street circuit, Suzuka permanent track, etc.)',
          'Driver Performance: Advanced metrics for position changes, stint analysis, and comparative performance',
          'Strategy Insights: Pit stop timing, tire compound analysis, and race phase optimization'
        ]
      }
    ],

    models: [
      { name: 'ElasticNet', rmse: '0.350s', r2: '0.992', technique: 'Regularized Linear', description: 'Best overall performer with excellent generalization' },
      { name: 'Ensemble Voting', rmse: '0.365s', r2: '0.991', technique: 'Multi-Model Combination', description: 'Combines multiple models for robust predictions' },
      { name: 'XGBoost Advanced', rmse: '0.377s', r2: '0.990', technique: 'Gradient Boosting', description: 'High-performance gradient boosting with feature importance' },
      { name: 'Gradient Boosting', rmse: '0.440s', r2: '0.987', technique: 'Sequential Learning', description: 'Classic ensemble method with strong predictive power' },
      { name: 'Extra Trees', rmse: '0.461s', r2: '0.985', technique: 'Randomized Trees', description: 'Extremely randomized trees for diverse predictions' }
    ],

    technicalArchitecture: {
      pipeline: 'Raw F1 Data → Cleaning → Feature Engineering → Model Training → Predictions',
      components: [
        'FastF1 API → Validation → 56 Features → 7 Models → Dashboard'
      ],
      structure: [
        'data_pipeline/: Complete ETL pipeline with ingestion, cleaning, and feature engineering',
        'models/: Advanced ML models including deep learning (LSTM) and ensemble methods',
        'dashboard/: Interactive web interface for data exploration and predictions',
        'blueprints/: Comprehensive design documentation and engineering patterns',
        'data/: Organized storage for raw, processed, and model-ready datasets'
      ]
    },

    achievements: [
      {
        title: '🎯 Data Leakage Resolution',
        items: [
          'Identified and eliminated 21 potentially leaky features that were causing unrealistic performance',
          'Implemented rigorous validation to ensure features only use information available at prediction time',
          'Maintained high performance with realistic, interpretable metrics'
        ]
      },
      {
        title: '🏗️ Production-Ready Infrastructure',
        items: [
          'Automated Pipelines: End-to-end processing from raw data to deployed models',
          'Model Persistence: All models saved for production deployment',
          'Cross-Validation: 5-fold validation ensuring robust performance across data splits',
          'Monitoring: Comprehensive performance tracking and validation frameworks'
        ]
      },
      {
        title: '📈 Scalable Design',
        items: [
          'Multi-Season Support: Successfully processing both 2024 and 2025 F1 seasons',
          'Circuit Diversity: Validated across 6+ different circuit types and characteristics',
          'Extensible Architecture: Easy addition of new races, seasons, and analysis types'
        ]
      }
    ],

    realWorldApplications: [
      {
        audience: 'For Data Scientists',
        items: [
          'Experiment with different features and models to improve prediction accuracy',
          'Access to clean, validated datasets with comprehensive feature engineering',
          'Production-ready model training pipelines with automated validation'
        ]
      },
      {
        audience: 'For F1 Fans & Analysts',
        items: [
          'Interactive dashboard for exploring race data and predictions',
          'Explainable insights into race strategy and driver performance',
          'Historical analysis and race outcome predictions'
        ]
      },
      {
        audience: 'For Engineers',
        items: [
          'Demonstration of robust, fair, and reproducible ML systems',
          'Complete MLOps pipeline with monitoring and validation',
          'Best practices in responsible AI development'
        ]
      }
    ],

    currentStatus: {
      completed: [
        'Data Pipeline & Engineering: Complete ETL with 6,380 ML-ready samples',
        'Feature Engineering: 56 sophisticated features with validation',
        'Advanced Modeling: 7 production-ready models with sub-second accuracy',
        'Data Quality: Resolved data leakage issues with rigorous validation'
      ],
      nextPhase: [
        'Real-time prediction APIs',
        'Model monitoring and drift detection',
        'Interactive dashboard with live race integration',
        'Multi-race validation and strategy optimization'
      ]
    },

    impact: 'ApexAgent represents a complete MLOps implementation that bridges the gap between academic ML and production systems. The project demonstrates responsible AI, engineering excellence, real-world value, and educational impact. It successfully combines the excitement of Formula 1 racing with cutting-edge machine learning, creating a platform that\'s both technically sophisticated and practically valuable for understanding one of the world\'s most data-rich sports.',

    technologies: ['Python', 'XGBoost', 'TensorFlow', 'Pandas', 'FastF1 API', 'Scikit-learn', 'MLOps', 'NumPy', 'Matplotlib', 'Jupyter']
  };
}
