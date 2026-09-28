// Central profile data — edit these values to update content site-wide.
export const profile = {
  name: "Yanamala SreeHari",
  shortName: "SreeHari",
  initials: "YSH",
  title: "Software Developer · Data Science & Machine Learning",
  tagline:
    "Software Developer at MakeMyTechnology building cross-platform network diagnostic tools, with a strong foundation in machine learning, NLP, and data analytics.",
  location: "Bangalore, India",
  email: "yanamalasreehari916@gmail.com",
  phone: "+91 81065 98703",
  links: {
    linkedin: "https://www.linkedin.com/in/yanamala-sree-hari",
    github: "https://github.com/CODINGHARI123",
    email: "mailto:yanamalasreehari916@gmail.com",
    // Relative path so it resolves under the GitHub Pages sub-path (/My_Portfolio/).
    resume: "SreeHari_Resume.pdf",
  },
  about: [
    "I'm a Software Developer at MakeMyTechnology (Bangalore), where I work on COTS — a cross-platform network diagnostic tool comparable to QXDM. I built the mobile APK from scratch and the Windows installer, and shipped features for real-time RF monitoring, iPerf-based speed testing, and ping-based connectivity checks.",
    "I'm a B.Tech graduate in Computer Science & Engineering from Lovely Professional University (CGPA 7.83) with a deep interest in data. Outside of my day job I build ML and analytics projects — sentiment models, recommendation systems, and Power BI dashboards — using Python, Scikit-learn, NLP, and visualization tooling.",
    "I'm comfortable across the stack: shipping production software, designing data pipelines, and turning datasets into clear, decision-ready insights.",
  ],
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "SQL"],
    },
    {
      title: "Data Science & ML",
      items: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "NLP",
        "NLTK",
        "spaCy",
      ],
    },
    {
      title: "Big Data & Databases",
      items: ["Hadoop", "Apache Spark", "Apache Hive", "MySQL", "PostgreSQL"],
    },
    {
      title: "Visualization & Reporting",
      items: ["Tableau", "Power BI", "Excel"],
    },
    {
      title: "Frameworks & Backend",
      items: ["Django", "Flask", "REST APIs"],
    },
    {
      title: "Tools & Platforms",
      items: ["GitHub", "Linux", "VS Code", "Android Studio"],
    },
  ],
  experience: [
    {
      company: "MakeMyTechnology",
      role: "Software Developer",
      period: "Dec 2025 — Present",
      location: "Bangalore, India",
      bullets: [
        "Engineered a cross-platform network monitoring and diagnostic tool (COTS) analogous to QXDM, enabling field engineers to diagnose real-time network issues across mobile and desktop environments.",
        "Developed the Android APK from scratch using Android Studio, delivering on-the-go RF parameter monitoring, iPerf-based data speed testing, and ping-based connectivity diagnostics for field use.",
        "Designed and packaged the Windows installer, streamlining laptop-based deployment and reducing setup time for field engineering teams.",
        "Integrated real-time signal strength tracking, network health dashboards, and automated diagnostic workflows, improving visibility into network performance across deployment sites.",
      ],
      tags: ["Android Studio", "Windows Installer", "RF / Signal", "iPerf", "Ping"],
    },
    {
      company: "MakeMyTechnology",
      role: "Software Developer Intern",
      period: "Sept 2025 — Nov 2025",
      location: "Bangalore, India",
      bullets: [
        "Assisted in architecting and testing network diagnostic modules for the COTS platform, supporting the core development team in delivering production-ready features.",
        "Integrated platform-specific components across Android and Windows environments, ensuring consistent behavior and reliability across both deployment targets.",
        "Collaborated with cross-functional teams to streamline internal tooling and operational workflows, accelerating development velocity during the internship period.",
      ],
      tags: ["Android", "Windows", "Testing", "Internal Tooling"],
    },
  ],
  projects: [
    {
      title: "COTS — Network Diagnostic Tool",
      label: "Professional Work",
      visual: "network",
      period: "MakeMyTechnology · 2025",
      stack: ["Python", "Android Studio", "APK", "Windows Installer", "iPerf"],
      description:
        "A specialized network monitoring and diagnostic tool comparable in functionality to QXDM, designed for field engineers. Built the mobile APK from scratch and the Windows installer for seamless laptop deployment. Implemented real-time RF parameter tracking, iPerf-based data speed measurement, and ping-based connectivity stability testing — all engineered to work across mobile and desktop platforms.",
    },
    {
      title: "Sentiment Analysis on Amazon Reviews",
      label: "NLP · Deployed Flask App",
      visual: "sentiment",
      period: "Apr 2025 — May 2025",
      stack: ["NLP", "Python", "Flask", "Scikit-learn"],
      description:
        "End-to-end sentiment analysis model that classifies Amazon product reviews as positive, neutral, or negative. Built a complete pipeline for data preprocessing, model training, and evaluation, then deployed the model as REST APIs behind a user-friendly Flask web app for real-time predictions.",
    },
    {
      title: "Crop Recommendation System",
      label: "Machine Learning",
      visual: "crop",
      period: "Aug 2024 — Oct 2024",
      stack: ["Machine Learning", "Python", "Scikit-learn"],
      description:
        "ML system that recommends the optimal crop based on soil and climate features (pH, N, P, K, temperature, humidity, rainfall). Compared Decision Tree, Random Forest, Logistic Regression, and KNN to select the strongest model, supporting data-driven agricultural decision-making.",
    },
    {
      title: "Blink-it Sales Analysis",
      label: "Data Analytics · Power BI",
      visual: "dashboard",
      period: "Oct 2023 — Nov 2023",
      stack: ["Power BI", "Data Analysis"],
      description:
        "Interactive Power BI dashboard visualizing Blink-it sales by item category, outlet type, and customer ratings. Identified Supermarket Type 1 and Tier 3 outlets as top revenue contributors. Cleaned and transformed the source data to ensure accuracy and consistency for analysis.",
    },
  ],
  training: [
    {
      title: "Machine Learning Engineer Intern",
      issuer: "Pantech Solutions · Remote",
      period: "Feb 2024 — Apr 2024",
      description:
        "Hands-on ML training with cross-functional teams. Analyzed large datasets and developed predictive models to support data-driven decision-making.",
    },
    {
      title: "SQL Training",
      issuer: "Board Infinity · Remote",
      period: "Jun 2023 — Aug 2023",
      description:
        "Three-month intensive SQL course covering database design, query writing, and data manipulation — joins, subqueries, aggregations, and query optimization.",
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      degree: "B.Tech, Computer Science & Engineering",
      detail: "CGPA: 7.83",
      period: "Aug 2021 — Jul 2025",
      location: "Jalandhar, Punjab",
    },
    {
      school: "Sri Chaitanya College",
      degree: "Intermediate (12th), MPC",
      detail: "Percentage: 95.80%",
      period: "Jun 2019 — Apr 2021",
      location: "Tirupati, Andhra Pradesh",
    },
    {
      school: "Sri Chaitanya High School",
      degree: "Secondary School (10th)",
      detail: "Percentage: 90.8%",
      period: "2018 — 2019",
      location: "Vempalli, Andhra Pradesh",
    },
  ],
};
