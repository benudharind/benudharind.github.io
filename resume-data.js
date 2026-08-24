/**
 * Benudhar Behera - Structured Resume Data & Profile Data Model
 */
const RESUME_DATA = {
  personal: {
    name: "Benudhar Behera",
    title: "Senior Data & AI Engineering Leader | Multi-Cloud Architecture | Ex-Microsoft, Ex-Amazon",
    location: "Bengaluru, India",
    email: "ben_india@outlook.com",
    linkedin: "https://linkedin.com/in/-benu/",
    github: "https://github.com/benudharind",
    summary: `Strategic Data & AI Engineering Leader with 15+ years of experience directing enterprise-scale multi-cloud transformations across Semiconductor Manufacturing, FinTech, Insurance, E-Commerce, and Aviation. Proven track record of scaling global engineering teams of 25+ professionals, architecting high-throughput Lakehouse platforms on AWS and Azure, and delivering production-grade Generative AI and multi-agent systems. Strong background in driving cloud cost optimization (FinOps), 24/7 mission-critical follow the sun operations, enterprise data and ai governance (GDPR/SOX), and enterprise AI guardrails.`
  },
  metrics: [
    { label: "Enterprise Experience", value: "15+", suffix: "Years" },
    { label: "Global Team Scale", value: "25+", suffix: "Engineers" },
    { label: "Processing Latency Reduced", value: "40%", suffix: "" },
    { label: "FinOps Cost Savings", value: "35%", suffix: "" }
  ],
  experience: [
    {
      company: "GlobalFoundries",
      role: "Data Engineering Manager – Data & AI",
      duration: "2025 – Present",
      location: "Bangalore, India",
      categories: ["leadership", "cloud", "ai"],
      bullets: [
        "Direct a department of 20+ engineers and data professionals across the APAC region, driving core Data solutions & AI strategic roadmaps across semiconductor fabrication units.",
        "Modernize enterprise AWS and distributed Lakehouse infrastructure using PySpark, AWS Glue, EMR, and Redshift to accelerate mission-critical yield analytics and automated fault detection.",
        "Lead 24/7 site reliability and mission-critical fab systems operations, sustaining high availability for real-time wafer tracking, lot movement, and automated stacking tools.",
        "Architect and deploy production-grade multi-agent GenAI systems using LangGraph, AWS Bedrock, and Redpanda Agentic Data Planes across HR, Finance, Data, and Manufacturing business units.",
        "Establish enterprise agentic governance frameworks, observability pipelines, and AI security guardrails to enforce regulatory compliance, mitigate model risk, and safeguard data privacy.",
        "Lead continuous team development, performance reviews, 1:1 coaching, and technical upskilling initiatives across modern cloud and distributed architectures."
      ],
      technologies: ["AWS Glue", "EMR", "PySpark", "Redshift", "LangGraph", "AWS Bedrock", "Redpanda", "24/7 SRE", "AI Governance"]
    },
    {
      company: "Microsoft",
      role: "Data Engineering Lead and Acting Engineering Manager",
      duration: "2021 – 2025",
      location: "Hyderabad, India",
      categories: ["leadership", "cloud", "ai"],
      bullets: [
        "Directed 3 global engineering teams comprising 15+ senior engineers and vendor partners, owning end-to-end delivery of mission-critical global finance platforms.",
        "Architected enterprise Lakehouse platforms on Azure Fabric, optimizing processing pipelines and slashing finance payment cycle latency by 40%.",
        "Engineered and deployed internal workflow automation agents leveraging Azure AI Studio and Model Context Protocol (MCP), recovering 1,000+ engineering hours annually.",
        "Directed 24/7 operational support and incident management for 17+ mission-critical enterprise applications, ensuring strict SLA adherence and high availability.",
        "Championed agile delivery and modern engineering practices across distributed squads, boosting overall team sprint delivery velocity by 30%."
      ],
      technologies: ["Azure Fabric", "Azure Databricks", "Synapse", "Azure AI Studio", "Model Context Protocol (MCP)", "ADLS Gen2", "PowerBI", "Agile Delivery"]
    },
    {
      company: "Amazon",
      role: "Senior Data Engineer",
      duration: "2020 – 2021",
      location: "Bengaluru, India",
      categories: ["cloud"],
      bullets: [
        "Architected high-throughput data pipelines using AWS Glue, Lambda, and Redshift to deliver real-time global retail analytics for Amazon AppStore and Amazon Music.",
        "Spearheaded migration of legacy ETL workloads to a serverless AWS architecture, reducing cloud processing infrastructure spend by 35% while improving data freshness.",
        "Partnered with data science teams to productionize predictive inventory optimization and forecasting models utilizing Amazon Athena and SageMaker.",
        "Enforced rigorous enterprise data security standards, ensuring strict GDPR compliance, automated auditing, and robust access governance across all analytics data stores."
      ],
      technologies: ["AWS Glue", "AWS Lambda", "Redshift", "SageMaker", "Athena", "GDPR", "Serverless ETL"]
    },
    {
      company: "Altimetrik",
      role: "Senior Data Engineer / Technical Lead",
      duration: "2018 – 2020",
      location: "Bengaluru, India",
      categories: ["leadership", "cloud"],
      bullets: [
        "Served as Technical Lead for a UK-based FinTech client, building an enterprise AWS data platform from the ground up and scaling the dedicated engineering team from 3 to 15 members.",
        "Engineered automated AWS Glue and EMR ETL pipelines, reducing loan disbursement turnaround times by 20% and improving risk-assessment modeling precision by 15%."
      ],
      technologies: ["AWS EMR", "PySpark", "FinTech Data Platform", "Tech Leadership"]
    },
    {
      company: "PwC (PricewaterhouseCoopers)",
      role: "Senior Data Engineer",
      duration: "2016 – 2018",
      location: "Mumbai, India",
      categories: ["cloud"],
      bullets: [
        "Led end-to-end enterprise data warehouse modernization and architecture for premier financial clients, including ICICI Prudential, Axis Bank, and Bank of India.",
        "Executed large-scale data lake migrations to AWS for Royal Bank of Scotland (RBS).",
        "Migrated legacy SAS processing pipelines to distributed PySpark on cloud clusters, significantly cutting runtime overhead and compute infrastructure costs."
      ],
      technologies: ["PySpark", "Banking & Insurance", "AWS Migration", "Data Warehousing"]
    },
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Data Engineer",
      duration: "2012 – 2016",
      location: "Mumbai, India",
      categories: ["cloud"],
      bullets: [
        "Designed and maintained enterprise ETL pipelines and data warehouses supporting analytics for General Electric (GE) Corporate and GE Aviation.",
        "Built core data marts and integrated SAP BusinessObjects dashboards to deliver real-time operational reporting for business stakeholders.",
        "Mentored incoming graduate engineers through the TCS Initial Learning Program (ILP)."
      ],
      technologies: ["ETL Architecture", "Data Marts", "GE Aviation", "SQL & Data Modeling"]
    }
  ],
  skills: {
    leadership: [
      "Engineering Management (20+ Headcount)",
      "Coaching & Mentorship",
      "Career Pathing & Growth Planning",
      "Performance Management (1:1s, PIPs, Appraisals)",
      "Engineering Culture & Retention",
      "Global Distributed Team Leadership",
      "Cross-Functional Collaboration"
    ],
    strategyOps: [
      "Agile/Scrum Delivery Transformation",
      "24/7 SRE & Incident Management",
      "High-Availability Platform Operations",
      "Cloud FinOps & Cost Optimization",
      "Vendor & Partner Management",
      "Technical Roadmapping & Business Alignment"
    ],
    aws: [
      "AWS Glue", "Amazon EMR", "Amazon Redshift", "AWS Lambda", "Amazon Kinesis",
      "Amazon SageMaker", "Amazon DynamoDB", "Amazon EKS", "AWS Deequ", "Amazon Athena", "Amazon S3"
    ],
    azure: [
      "Azure Fabric", "Azure Databricks", "Azure Synapse", "ADLS Gen2", "Azure Event Hubs",
      "Azure Data Factory (ADF)", "Azure App Services & VMs", "PowerBI", "Azure AI Foundry", "Microsoft Purview"
    ],
    dataEngineering: [
      "PySpark", "Spark with Scala", "Python", "SQL", "Apache Flink", "Redpanda",
      "Apache Kafka", "Databricks Delta Live Tables (DLT)", "Snowflake", "Databricks", "Apache Airflow", "Terraform (IaC)"
    ],
    aiSystems: [
      "Agentic Workflows", "LangGraph", "LangChain", "Model Context Protocol (MCP)",
      "AWS Bedrock", "Azure AI Studio", "Redpanda Agentic Data Plane", "GitHub & M365 Copilot", "Ollama", "Herme Agent"
    ],
    governance: [
      "AI Governance & Compliance (EU AI Act, ISO 42001)",
      "AI Guardrails & Model Risk Management",
      "Data Quality Frameworks (AWS Deequ)",
      "Data Observability & Lineage",
      "GDPR & SOX Compliance"
    ]
  },
  education: {
    degree: "Bachelor of Technology (B.Tech) – Instrumentation and Control",
    institution: "Siksha 'O' Anusandhan University (SOA)",
    duration: "2008 – 2012"
  },
  certifications: [
    "AWS Certified Solutions Architect",
    "Microsoft Data Security Certification",
    "Six Sigma Green Belt"
  ],
  honors: [
    "Microsoft Garage Contributor",
    "PwC Excellence Award",
    "TCS Spot Award"
  ]
};
