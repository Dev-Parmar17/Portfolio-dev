// Portfolio Data Constants

export const personalInfo = {
  name: "Your Name",
  title: "Data Engineer",
  email: "your.email@example.com",
  location: "Your Location",
  bio: "Passionate data engineer with expertise in building scalable ETL pipelines and data architectures."
};

export const skills = [
  { name: "Python", level: 95 },
  { name: "PySpark", level: 90 },
  { name: "SQL", level: 90 },
  { name: "Apache Airflow", level: 85 },
  { name: "Databricks", level: 85 },
  { name: "DBT", level: 80 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 75 },
  { name: "Kubernetes", level: 70 },
  { name: "Terraform", level: 65 }
];

export const projects = [
  {
    title: " ❄️ Car Rental Batch Data Ingestion with SCD2 Merge in Snowflake ❄️",
    description:
      "Implemented a batch data ingestion pipeline for car rental data, featuring SCD2 (Slowly Changing Dimension Type 2) merge on the customer dimension in Snowflake. The pipeline uses Python, PySpark, GCP Dataproc, Airflow, and Snowflake to ingest, transform, and automate scalable data workflows. Key features include SCD2 handling, ingestion from GCS to Snowflake, PySpark transformations, Airflow orchestration, and scalable processing via Dataproc.",
    tech: ["Python", "PySpark", "GCP Dataproc", "Airflow", "Snowflake"],
    image: "/images/carpipeline.png",
    gradient: "from-chart-2/10 to-chart-2/5",
    githubUrl: "https://github.com/Devcoding17/End-To-End-CAR-RENTAL-PIPELINE?tab=readme-ov-file"
  },
  {
    title: "🔶 Databricks ETL Pipeline with Medallion Architecture 🔶",
    description:
      "I led a data processing project on Databricks using PySpark and DBT, applying the Medallion architecture (bronze, silver, gold layers). The goal was to build a modular, scalable ETL pipeline: ingesting raw data with PySpark streaming, transforming and cleaning it in the silver layer, and creating analytics-ready models with DBT in the gold layer. My main challenge was handling incremental data loads and ensuring reliability; I solved this by implementing checkpointing and dynamic schema handling. This resulted in a robust, production-quality pipeline that improved data quality and analytics efficiency.",
    tech: ["PySpark", "DBT", "Databricks", "Python", "Delta Lake"],
    image: "/images/pysprakxdbt.png",
    gradient: "from-chart-1/10 to-chart-1/5",
    githubUrl: "https://github.com/Devcoding17/PYSPARK-DBT-PROJECT"
  }
];

export const experience = [
  {
    title: "Senior Data Engineer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Leading ETL pipeline development and data architecture initiatives."
  },
  {
    title: "Data Engineer",
    company: "Previous Company",
    period: "2021 - 2023",
    description: "Built and maintained data pipelines using modern data stack technologies."
  }
];

export const education = [
  {
    degree: "Master of Science in Data Science",
    school: "University Name",
    year: "2020"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    year: "2018"
  }
];

export const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Data Engineer",
  "Databricks Certified Associate Developer"
];

export const socialLinks = {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername"
};
