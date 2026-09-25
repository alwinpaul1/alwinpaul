export const siteConfig = {
  name: "Alwin Paul",
  title: "AI Engineer",
  description:
    "AI Engineer in Germany specializing in LLM systems, RAG pipelines, and intelligent information retrieval. Based in Cottbus, open to AI Engineer roles across Germany. Experienced with LangChain, PyTorch, Neo4j, and LLM evaluation.",
  url: "https://alwinpaul.me",
  image: "/alwin.jfif",
  // Accent is split per theme so text in the accent colour stays readable on both backgrounds
  accentColor: "#2563eb",
  accentColorDark: "#60a5fa",
  resume: "/AlwinPaul_Resume.pdf",
  social: {
    email: "alwin.paulpv@gmail.com",
    linkedin: "https://www.linkedin.com/in/alwin-paul/",
    twitter: "https://x.com/_alwinpaul_",
    github: "https://github.com/alwinpaul1",
    facebook: "https://www.facebook.com/alwin.paulpv",
    instagram: "https://www.instagram.com/alwi._nn/",
  },
  contact: {
    location: "Germany",
    phone: "+4917677354827",
  },
  aboutMe:
    "AI Engineer specializing in LLM systems, RAG pipelines, and intelligent information retrieval. Experienced in LangChain orchestration, prompt optimization, and vector database architecture. Passionate about building production-grade AI systems with measurable performance and real-world impact. Open to AI Engineer roles in Germany, remote friendly across EU time zones.",
  skills: [
    {
      category: "LLM Engineering",
      items: [
        "LangChain",
        "Prompt Engineering",
        "RAG Design",
        "Chunk Optimization",
        "LLM Monitoring",
      ],
    },
    {
      category: "LLM Evaluation",
      items: ["RAGAS", "Context Evaluation", "Synthetic Data Generation"],
    },
    {
      category: "AI Frameworks",
      items: [
        "PyTorch",
        "TensorFlow",
        "Transformers",
        "SentenceTransformers",
        "Hugging Face",
        "CrewAI",
        "Ollama",
      ],
    },
    {
      category: "Vector & Graph DBs",
      items: ["ChromaDB", "Pinecone", "Neo4j", "FAISS"],
    },
    {
      category: "Machine Learning",
      items: [
        "Supervised Learning",
        "Reinforcement Learning",
        "Model Fine-tuning",
        "Explainable AI",
      ],
    },
    {
      category: "Programming & Tools",
      items: [
        "Python",
        "Go",
        "Git",
        "Docker",
        "Linux",
        "RESTful APIs",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
      ],
    },
    {
      category: "Languages",
      items: ["English (C1)", "German (A2, improving)"],
    },
  ],
  projects: [
    {
      name: "SmartTuner: GRPO Reinforcement Learning System",
      description:
        "Implemented Group Relative Policy Optimization (GRPO) for training small language models (135M–600M parameters), improving accuracy from 46% to over 60%.",
      link: "https://github.com/alwinpaul1/SmartTuner",
      skills: ["Python", "GRPO", "Reinforcement Learning", "Small LMs"],
    },
    {
      name: "AI/ML Football Analysis System",
      description:
        "YOLO-based object detection with ByteTrack tracking, K-Means clustering, and optical flow techniques.",
      link: "https://github.com/alwinpaul1/AI-ML-Football-Analysis-System",
      skills: ["YOLO", "ByteTrack", "K-Means", "Optical Flow"],
    },
    {
      name: "Financial Analysis AI System",
      description:
        "4-agent CrewAI system with FastMCP server integration and an NLP pipeline on deepseek-r1:7b for automated financial analysis.",
      link: "https://github.com/alwinpaul1/Financial_Crew",
      skills: ["CrewAI", "FastMCP", "NLP", "deepseek-r1"],
    },
    {
      name: "Job Search Automation System",
      description:
        "Telegram bot with AI-powered relevance scoring using JobBERT transformers, LinkedIn scraping, and an automated alert system.",
      link: "https://github.com/alwinpaul1/Job-Search-TG",
      skills: ["Python", "JobBERT", "Telegram Bot", "Web Scraping"],
    },
  ],
  achievements: [
    {
      name: "Google Cloud Skills Program: Silver League",
      description:
        "Earned 43 skill badges (12,800+ points) focused on BigQuery ML, Machine Learning APIs, and ML data pipelines on GCP, plus CI/CD workflows, Kubernetes deployments, and Cloud Observability.",
      link: "https://www.cloudskillsboost.google/public_profiles/9fd098b2-e1b9-4550-881f-4f9e0d1e9e74",
      skills: ["Google Cloud", "BigQuery ML", "Kubernetes"],
    },
    {
      name: "TryHackMe: Top 1%",
      description: "112 rooms completed and 15 badges earned.",
      link: "https://tryhackme.com/p/nullpwn",
      skills: ["Cybersecurity"],
    },
    {
      name: "Cybersecurity Engineer Internship",
      description: "Internship certificate from the Virtually Testing Foundation.",
      link: "https://verification.givemycertificate.com/v/7e4772f6-5b5e-41ea-89d9-8e171053c153",
      skills: ["Cybersecurity"],
    },
  ],
  experience: [
    {
      company: "Perinet GmbH · Cottbus, Germany",
      title: "Working Student – AI & Systems Engineer",
      dateRange: "Jul 2024 – Present",
      bullets: [
        "Architected an end-to-end Graph RAG pipeline with Neo4j knowledge graphs, combining adaptive PDF chunking with entity-relationship modeling for context-aware document retrieval.",
        "Built a hybrid retrieval system integrating ChromaDB vector search, cross-encoder reranking, and semantic caching (0.85 similarity threshold) to reduce latency and retrieval noise.",
        "Engineered prompt optimization workflows with quantitative evaluation metrics, using the RAGAS framework to benchmark faithfulness, relevancy, and context precision.",
        "Developed production-grade LLM evaluation pipelines measuring hallucination rates, response quality, and retrieval accuracy across multiple RAG configurations.",
      ],
    },
  ],
  education: [
    {
      school: "Brandenburg Technical University · Cottbus, Germany",
      degree: "Master of Science in Artificial Intelligence",
      dateRange: "2022 – Present",
      achievements: [
        "Key subjects: Machine Learning, Deep Learning, Data Mining, Information Retrieval, Explainable ML, Computer Vision",
      ],
    },
    {
      school: "Mahatma Gandhi University · Kottayam, India",
      degree: "Bachelor of Computer Applications",
      dateRange: "2018 – 2021",
      achievements: [
        "Key subjects: Data Structures, Database Management Systems, Design and Analysis of Algorithms, Software Engineering, Computer Networks",
      ],
    },
  ],
  githubStats: [
    {
      alt: "Alwin Paul's GitHub stats",
      light: "/github/github-metrics-light.svg",
      dark: "/github/github-metrics.svg",
      width: 480,
      height: 223,
    },
    {
      alt: "Alwin Paul's most used languages",
      light: "/github/github-languages-light.svg",
      dark: "/github/github-languages.svg",
      width: 480,
      height: 166,
    },
  ],
};
