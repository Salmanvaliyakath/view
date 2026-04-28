const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const portfolio = {
  name: 'Salman Valiyakath',
  title: 'AI/ML Engineer | Data Scientist | Generative AI Engineer',
  location: 'Dubai, UAE',
  email: 'valiyakathsalman@gmail.com',
  phone: '+971 543136468',
  linkedin: 'https://www.linkedin.com/in/salman-valiyakath',
  summary:
    'AI/ML Engineer with 8+ years of experience designing, developing, and productionizing Machine Learning, Generative AI, and RAG solutions across Healthcare, BFSI, Insurance, and Enterprise domains.',
  metrics: [
    { value: '8+', label: 'Years Experience' },
    { value: '50%', label: 'Ticket Resolution Time Reduced' },
    { value: '45%', label: 'Radiology Workflow Efficiency Improved' },
    { value: '100%', label: 'Timely Incident Closure Visibility' }
  ],
  skills: [
    {
      group: 'AI / ML',
      items: ['Python', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'Keras', 'BERT', 'NLP', 'spaCy']
    },
    {
      group: 'Generative AI & RAG',
      items: ['RAG', 'LangChain', 'LangGraph', 'DSPy', 'OpenAI', 'Llama', 'LoRA', 'Ollama', 'vLLM', 'RAGAS', 'AI Agents']
    },
    {
      group: 'Vector Databases',
      items: ['FAISS', 'Qdrant', 'ChromaDB', 'Milvus', 'Hybrid Search', 'Reranking']
    },
    {
      group: 'Cloud / MLOps',
      items: ['AWS SageMaker', 'AWS EKS', 'AWS Lambda', 'Azure ML', 'Docker', 'Kubernetes', 'MLflow', 'CI/CD']
    },
    {
      group: 'Data / Backend',
      items: ['SQL', 'Pandas', 'NumPy', 'FastAPI', 'PostgreSQL', 'Power BI', 'Git']
    }
  ],
  projects: [
    {
      title: 'RAG-Based Jira Resolution Assistant',
      tag: 'GenAI / Enterprise Support',
      problem: 'Engineering knowledge was scattered across historical Jira tickets, slowing troubleshooting and similar-issue resolution.',
      solution: 'Built a RAG assistant using hybrid retrieval, metadata filtering, reranking, prompt engineering, evaluation, and feedback loops.',
      impact: 'Reduced ticket resolution time by 50% and improved knowledge accessibility for support teams.',
      stack: ['RAG', 'Qdrant', 'LangChain', 'LLM', 'Hybrid Retrieval', 'RAGAS']
    },
    {
      title: 'Agentic AI Decision Automation Platform',
      tag: 'AI Agents / Automation',
      problem: 'Social support application review required manual eligibility checks across Emirates ID, bank statements, and structured data.',
      solution: 'Designed an agentic workflow using LangGraph and LLM-based document intelligence for identity, income, and eligibility validation.',
      impact: 'Enabled automated eligibility assessment within minutes and reduced manual review workload.',
      stack: ['LangGraph', 'LLM', 'OCR', 'Document AI', 'FastAPI']
    },
    {
      title: 'Medical Imaging Protocol Recommendation System',
      tag: 'Healthcare AI',
      problem: 'Radiology protocol selection was manual, time-consuming, and inconsistent across workflows.',
      solution: 'Productionized a recommendation system with scalable inference pipelines on AWS and Azure ML deployment workflows.',
      impact: 'Improved workflow efficiency by 45% and reduced manual protocol selection time by 50%.',
      stack: ['AWS SageMaker', 'Azure ML', 'AKS', 'EKS', 'Model Registry']
    },
    {
      title: 'ML-Based Fraud Detection System',
      tag: 'BFSI / Risk AI',
      problem: 'Fraud detection required better identification of anomalous transaction patterns in highly imbalanced data.',
      solution: 'Engineered behavioral and transactional features and evaluated ML models with recall, precision, ROC-AUC, and SHAP explainability.',
      impact: 'Improved fraud signal detection while supporting regulatory explainability requirements.',
      stack: ['XGBoost', 'Random Forest', 'SHAP', 'Feature Engineering']
    },
    {
      title: 'Power BI Executive Dashboards',
      tag: 'Analytics / Business Intelligence',
      problem: 'Leadership needed consolidated visibility across revenue, finance, sales, procurement, and operational trends.',
      solution: 'Built dynamic dashboards connected to Microsoft Dynamics 365, Dataverse, and Finance & Operations tables.',
      impact: 'Enabled data-driven revenue forecasting and operational planning across business units.',
      stack: ['Power BI', 'Dataverse', 'Dynamics 365', 'SQL']
    }
  ],
  experience: [
    { role: 'AI Engineer', company: 'AASA, Dubai', period: 'Feb 2025 – Present' },
    { role: 'Senior Data Scientist', company: 'Capgemini Engineering, Bangalore', period: 'May 2022 – Dec 2024' },
    { role: 'Data Scientist', company: 'Blackbuck Insight P Ltd, Bangalore', period: 'Sep 2020 – May 2022' },
    { role: 'Automation Engineer', company: 'Huawei Technologies, Bangalore', period: 'Jul 2018 – Apr 2020' },
    { role: 'Jr Technical Associate', company: 'Pathfinder Enterprise Solutions P Ltd, Bangalore', period: 'Oct 2017 – May 2018' }
  ],
  blogs: [
    'How I design production-grade RAG systems',
    'RAG evaluation beyond demo accuracy',
    'Scaling LLM inference with vLLM and Kubernetes',
    'How to monitor hallucinations in enterprise AI systems'
  ]
};

app.get('/', (req, res) => {
  res.render('index', { portfolio });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
