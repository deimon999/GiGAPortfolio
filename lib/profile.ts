export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Education {
  degree: string
  field: string
  institution: string
  location: string
  startDate: string
  endDate: string
}

export interface Experience {
  title: string
  company: string
  location: string
  type: string
  startDate: string
  endDate: string
  current: boolean
  achievements: string[]
}

export interface Publication {
  title: string
  venue: string
  year: number
  description?: string
}

export interface Certification {
  title: string
  issuer: string
  year: number
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ProfileData {
  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
  social: {
    github: string
    linkedin: string
    email: string
  }
  education: Education[]
  experience: Experience[]
  publications: Publication[]
  certifications: Certification[]
  skills: SkillCategory[]
}

export const profileData: ProfileData = {
  name: "Deimonmi Kyndiah",
  title: "Data Science Graduate Student",
  email: "kyndiahdeimon753@gmail.com",
  phone: "+91 7005318120",
  location: "Bengaluru, Karnataka, India",
  summary: "Data Science graduate student specializing in Python, SQL, Power BI, and Machine Learning; built RAG assistants and deep learning classifiers.",
  
  social: {
    github: "https://github.com/deimon999",
    linkedin: "https://linkedin.com/in/deimonmi-kyndiah",
    email: "kyndiahdeimon753@gmail.com",
  },
  
  education: [
    {
      degree: "Master of Science",
      field: "Data Science",
      institution: "Kristu Jayanti College",
      location: "Bengaluru, Karnataka",
      startDate: "Aug 2024",
      endDate: "Present",
    },
    {
      degree: "Bachelor of Computer Applications",
      field: "Computer Science",
      institution: "St. Edmund's College",
      location: "Shillong, Meghalaya",
      startDate: "Aug 2021",
      endDate: "Jul 2024",
    },
  ],
  
  experience: [
    {
      title: "Data Analyst Intern",
      company: "Meghalaya Technology Parks Society",
      location: "Shillong, Meghalaya",
      type: "Hybrid",
      startDate: "Jun 2025",
      endDate: "Jul 2025",
      current: false,
      achievements: [
        "Architected Power BI dashboards to analyze 4,922 unconnected villages, providing actionable insights for state infrastructure planning",
        "Optimized data pipelines by cleaning and merging government datasets using Excel and Power Query, successfully identifying 258 roadless villages for development priority",
      ],
    },
  ],
  
  publications: [
    {
      title: "Deepfake Detection",
      venue: "National Student Research Symposium, Kristu Jayanti University",
      year: 2025,
      description: "Presented research on deepfake detection using CNN and EfficientNet architectures",
    },
  ],
  
  certifications: [
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      year: 2024,
    },
    {
      title: "MongoDB Java Path Developer",
      issuer: "MongoDB",
      year: 2025,
    },
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      year: 2024,
    },
  ],
  
  skills: [
    {
      category: "Languages & Data Analysis",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Excel", "Power BI", "Java", "R"],
    },
    {
      category: "Machine Learning",
      skills: ["Scikit-learn", "Random Forest", "XGBoost", "Regression", "CNN", "EfficientNet"],
    },
    {
      category: "AI & NLP",
      skills: ["LangChain", "RAG", "LLaMA", "Ollama"],
    },
    {
      category: "Web & Databases",
      skills: ["Flask", "HTML", "CSS", "JavaScript", "MongoDB", "MySQL", "SQL Server", "Pinecone"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "VS Code", "Jupyter Notebook", "TensorFlow", "OpenCV"],
    },
  ],
}

// Helper to get social links as an array
export const getSocialLinks = () => [
  { name: "GitHub", url: profileData.social.github },
  { name: "LinkedIn", url: profileData.social.linkedin },
  { name: "Email", url: `mailto:${profileData.social.email}` },
]
