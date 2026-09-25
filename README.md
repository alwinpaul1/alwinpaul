# Alwin Paul — AI Engineer

AI Engineer specializing in LLM systems, RAG pipelines, and intelligent information retrieval. Experienced in LangChain orchestration, prompt optimization, and vector database architecture.

**Live Site:** [alwinpaul.me](https://alwinpaul.me/)

## Currently

- MSc in Artificial Intelligence @ BTU Cottbus-Senftenberg
- Working Student – AI & Systems Engineer @ Perinet GmbH

## Tech Stack

**LLM Development:** LangChain, Prompt Engineering, RAG Design, LLM Monitoring
**AI Frameworks:** PyTorch, TensorFlow, Transformers, SentenceTransformers, Hugging Face, CrewAI, Ollama
**Vector & Graph DBs:** ChromaDB, Pinecone, Neo4j, FAISS
**Evaluation:** RAGAS, LLM Benchmarking, Faithfulness & Relevance Scoring
**Programming:** Python (Expert), Go, Git, Docker, Linux, RESTful APIs

## Projects

- [SmartTuner](https://github.com/alwinpaul1/SmartTuner) — GRPO Reinforcement Learning for small language models
- [AI/ML Football Analysis](https://github.com/alwinpaul1/AI-ML-Football-Analysis-System) — YOLO + ByteTrack sports analytics
- [Financial Analysis AI](https://github.com/alwinpaul1/Financial_Crew) — 4-agent CrewAI system with FastMCP
- [Job Search Automation](https://github.com/alwinpaul1/Job-Search-TG) — Telegram bot with JobBERT semantic matching

## Connect

[LinkedIn](https://www.linkedin.com/in/alwin-paul/) | [GitHub](https://github.com/alwinpaul1) | [Website](https://alwinpaul.me/)

---

## About this site

Built with Astro and Tailwind CSS v4.

### Editing content

All content lives in `src/config.ts`: name, title, links, about text, grouped skills, projects, achievements, experience, education, and the GitHub stat images. Empty lists hide their section and nav link.

`accentColor` is the accent in light mode and `accentColorDark` in dark mode. Surface and text colours are tokens in `src/styles/global.css`, each with a light and a dark value, so use utilities like `bg-surface` and `text-body` rather than `bg-gray-*` or `bg-white`.

Static files (resume PDF, favicon, CNAME, robots.txt, sitemap.xml) live in `public/`.

### Theme

The site follows the visitor's OS light/dark setting until they use the toggle in the header; that choice is saved in `localStorage`.

### Local development

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

### Deployment

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes to GitHub Pages on every push to `main`. It also runs after the daily `GitHub Metrics` workflow, which refreshes `public/github/*.svg`.
