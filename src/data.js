export const resumeData = {
    name: "Suresh Karakam",
    title: "Agentic AI Engineer | Azure Generative AI | Azure Data Engineer",
    email: "sureshaiagentic448@gmail.com",
    phone: "9703348112",
    socials: {
        linkedin: "https://www.linkedin.com/in/suresh-karakam-162026169/",
        github: "https://github.com/SURESHKARAKAM"
    },
    summary: "Agentic AI Engineer with 4 years of total experience, including 3 years as an Azure Data Engineer and 1 year of hands-on experience building Generative AI and Agentic AI solutions on Azure. Strong experience with Azure AI Foundry, Azure OpenAI, and RAG-based architectures, combined with deep expertise in Azure Databricks, PySpark, and Lakehouse design. Hands-on exposure to CrewAI and Microsoft AutoGen for agent orchestration concepts.",
    skills: {
        "Agentic AI & GenAI": [
            "Azure AI Foundry", "Azure OpenAI (GPT-4/4o)", "CrewAI (Multi-Agent)", "Microsoft AutoGen", "RAG", "Agent Memory (Vector)", "LangChain", "LangGraph"
        ],
        "Azure Data Engineering": [
            "Azure Databricks", "PySpark", "Spark SQL", "Delta Lake", "Azure Data Factory (ADF)", "ADLS Gen2", "Unity Catalog"
        ],
        "Programming & Frameworks": [
            "Python", "SQL", "FastAPI", "REST APIs", "Git", "Azure DevOps"
        ],
        "Multi-Cloud": [
            "AWS (S3, Glue, Lambda, Redshift)", "GCP (BigQuery, Dataflow, Pub/Sub)"
        ]
    },
    experience: [
        {
            role: "Agentic AI & Generative AI Engineer",
            company: "Accenture",
            location: "Hyderabad",
            period: "Feb 2024 – Present",
            description: [
                "Designed agentic AI workflows using Azure AI Foundry for autonomous reasoning.",
                "Built RAG agent serving 500+ daily queries with 92% accuracy, reducing resolution time by 40%.",
                "Implemented LLM-driven reasoning for decision-support workflows.",
                "Integrated tool-calling mechanisms for SQL, Databricks, and REST APIs.",
                "Implemented vector-based memory for context retention across sessions.",
                "Deployed agent-backed GenAI services using FastAPI."
            ]
        },
        {
            role: "Azure Data Engineer",
            company: "Accenture",
            location: "Hyderabad",
            period: "Feb 2022 – Jan 2024",
            description: [
                "Managed cloud data pipelines on Azure supporting real-time analytics.",
                "Designed modular data lakehouse using Medallion Architecture with Delta Lake.",
                "Developed scalable streaming solutions with PySpark.",
                "Optimized pipeline performance by 10x through smart partitioning and tuning.",
                "Enforced governance using Unity Catalog."
            ]
        }
    ],
    projects: [
        {
            title: "Enterprise Knowledge Chatbot",
            tech: ["Azure OpenAI", "Azure AI Search", "Databricks", "RAG"],
            description: "Enterprise GenAI chatbot for ARP/TRP systems and Confluence, managing prompts and evaluations via Azure AI Foundry."
        },
        {
            title: "Autonomous Data Pipeline Monitor",
            tech: ["Agentic AI", "Azure OpenAI", "SQL", "Tool Calling"],
            description: "Agent to monitor failures and SLA breaches in ADF/Databricks, generating root cause analysis."
        },
        {
            title: "Data Quality & Governance Agent",
            tech: ["AI Assistant", "Databricks", "ADLS Gen2", "Human-in-the-Loop"],
            description: "AI-driven assistant for data quality checks, profiling analysis, and schema changes with human approval steps."
        }
    ]
};
