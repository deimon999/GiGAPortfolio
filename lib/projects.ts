export type ProjectCategory = "LLM" | "DL" | "ML" | "BI"

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  problem: string
  approach: string[]
  results: string[]
  stack: string[]
  category: ProjectCategory
  metrics: ProjectMetric[]
  githubUrl: string
  liveUrl: string
  coverImage: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "nexus-ai-study-assistant",
    title: "Nexus — AI Study Assistant",
    summary: "An AI-powered study companion leveraging Retrieval-Augmented Generation (RAG) to provide intelligent answers from study materials, integrated with productivity tools.",
    problem: "Students struggle to efficiently extract insights from large volumes of study materials and lack integrated tools to manage their learning workflow effectively.",
    approach: [
      "Implemented Retrieval-Augmented Generation (RAG) pipeline using LangChain framework for context-aware responses",
      "Integrated LLaMA language model for natural language understanding and generation",
      "Built vector database for efficient document retrieval and semantic search",
      "Developed integrated note-taking system with markdown support",
      "Created task management with to-do lists and priority tracking",
      "Implemented Pomodoro timer for focused study sessions with break reminders",
      "Designed responsive Flask web application with real-time interactions"
    ],
    results: [
      "Successfully deployed RAG system capable of answering questions from uploaded documents",
      "Achieved seamless integration of 3 productivity tools (notes, tasks, timer) in single interface",
      "Enabled students to consolidate study workflow in one application",
      "Demonstrated practical application of LLM technology in education domain"
    ],
    stack: ["LangChain", "LLaMA", "RAG", "Flask", "Python", "Vector Database"],
    category: "LLM",
    metrics: [
      { label: "Framework", value: "LangChain + LLaMA" },
      { label: "Features", value: "3 Productivity Tools" },
      { label: "Type", value: "RAG-based Q&A" },
      { label: "Status", value: "Production Ready" }
    ],
    githubUrl: "#",
    liveUrl: "#",
    coverImage: "/projects/nexus-cover.jpg",
    featured: true
  },
  {
    slug: "deepfake-detection",
    title: "Deepfake Detection",
    summary: "Deep learning-based classifier to distinguish authentic media from AI-generated deepfakes with high precision, addressing the growing challenge of synthetic media detection.",
    problem: "The proliferation of AI-generated deepfakes poses significant threats to media authenticity, requiring robust detection systems to identify manipulated content.",
    approach: [
      "Engineered CNN architecture enhanced with EfficientNet transfer learning",
      "Implemented MTCNN (Multi-task Cascaded Convolutional Networks) for face detection and extraction",
      "Built comprehensive data preprocessing pipeline with face alignment and normalization",
      "Applied data augmentation techniques to improve model generalization",
      "Utilized TensorFlow/Keras for model development and training",
      "Integrated OpenCV for real-time video frame processing",
      "Optimized model architecture for balance between accuracy and inference speed"
    ],
    results: [
      "Achieved high-precision classification between authentic and synthetic media",
      "Successfully extracted and preprocessed faces using MTCNN pipeline",
      "Presented research findings at National Student Research Symposium 2025",
      "Demonstrated practical deployment capability for real-world deepfake detection",
      "Published methodology and findings at Kristu Jayanti University symposium"
    ],
    stack: ["TensorFlow", "EfficientNet", "CNN", "OpenCV", "MTCNN", "Python", "Keras"],
    category: "DL",
    metrics: [
      { label: "Architecture", value: "CNN + EfficientNet" },
      { label: "Research Year", value: "2025" },
      { label: "Venue", value: "National Symposium" },
      { label: "Preprocessing", value: "MTCNN Pipeline" }
    ],
    githubUrl: "#",
    liveUrl: "#",
    coverImage: "/projects/deepfake-cover.jpg",
    featured: true
  },
  {
    slug: "flight-fare-prediction",
    title: "Flight Fare Prediction",
    summary: "Machine learning web application that predicts flight ticket prices based on historical airline and route data, helping travelers make informed booking decisions.",
    problem: "Flight prices fluctuate unpredictably, making it difficult for travelers to determine optimal booking times and identify fair pricing for their routes.",
    approach: [
      "Collected and preprocessed historical flight pricing data across multiple airlines and routes",
      "Performed exploratory data analysis to identify key pricing factors",
      "Engineered features including route distance, seasonality, booking advance time, and carrier",
      "Trained ensemble models including Random Forest and XGBoost regressors",
      "Evaluated models using RMSE (Root Mean Squared Error) metrics",
      "Implemented hyperparameter tuning for optimal model performance",
      "Deployed interactive Flask web application with user-friendly interface",
      "Created REST API endpoints for real-time price predictions"
    ],
    results: [
      "Achieved low RMSE demonstrating accurate price predictions",
      "Random Forest and XGBoost models showed strong predictive performance",
      "Successfully deployed production-ready web application",
      "Enabled users to input flight parameters and receive instant price estimates",
      "Provided actionable insights for budget-conscious travelers"
    ],
    stack: ["Python", "Scikit-learn", "Random Forest", "XGBoost", "Flask", "Pandas", "NumPy"],
    category: "ML",
    metrics: [
      { label: "Models", value: "RF + XGBoost" },
      { label: "Evaluation", value: "Low RMSE" },
      { label: "Deployment", value: "Flask Web App" },
      { label: "Status", value: "Live" }
    ],
    githubUrl: "#",
    liveUrl: "#",
    coverImage: "/projects/flight-fare-cover.jpg",
    featured: false
  },
  {
    slug: "infrastructure-analytics-dashboard",
    title: "Infrastructure Analytics Dashboard",
    summary: "Power BI analytics solution developed during internship to analyze rural connectivity and identify development priorities across thousands of villages in Meghalaya.",
    problem: "State government lacked consolidated visibility into rural infrastructure gaps, making it difficult to prioritize development initiatives for unconnected villages.",
    approach: [
      "Architected comprehensive Power BI dashboards for infrastructure analysis",
      "Cleaned and standardized government datasets using Excel and Power Query",
      "Merged multiple data sources to create unified connectivity database",
      "Implemented data validation and quality checks to ensure accuracy",
      "Created interactive visualizations for village-level infrastructure metrics",
      "Developed automated reporting pipelines for stakeholder insights",
      "Applied geospatial analysis to identify roadless and unconnected areas"
    ],
    results: [
      "Analyzed infrastructure data for 4,922 unconnected villages",
      "Successfully identified 258 roadless villages requiring priority development",
      "Provided actionable insights for state infrastructure planning",
      "Enabled data-driven decision making for government initiatives",
      "Optimized data pipelines reducing manual processing time significantly",
      "Delivered comprehensive reports to Meghalaya Technology Parks Society"
    ],
    stack: ["Power BI", "Excel", "Power Query", "DAX", "Data Modeling"],
    category: "BI",
    metrics: [
      { label: "Villages Analyzed", value: "4,922" },
      { label: "Roadless Identified", value: "258" },
      { label: "Platform", value: "Power BI" },
      { label: "Organization", value: "Meghalaya Tech Parks" }
    ],
    githubUrl: "#",
    liveUrl: "#",
    coverImage: "/projects/infrastructure-bi-cover.jpg",
    featured: true
  }
]

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getAllCategories = (): ProjectCategory[] => {
  return Array.from(new Set(projects.map(project => project.category)))
}
