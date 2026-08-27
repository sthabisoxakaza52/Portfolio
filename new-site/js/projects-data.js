/**
 * Structured Portfolio Data for Sthabiso Xakaza - Project Names on Cards
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Sthabiso Xakaza",
    shortName: "Sthabiso",
    title: "Software Engineer | Cloud & DevOps",
    location: "Cape Town, South Africa",
    email: "sthabisoxakaza52@gmail.com",
    linkedin: "https://www.linkedin.com/in/sthabiso-xakaza-390000353",
    github: "https://www.github.com/sthabisoxakaza52",
    cvPath: "cv/Sthabiso_Alondwe_Xakaza_CV (2).pdf",
    status: "Open to work"
  },

  projects: [
    {
      id: "aws-cost-alert",
      title: "AWS Cost Alert",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      tagLabel: "AWS Cloud",
      headline: "AWS Cost Alert",
      themeClass: "card-theme-cloud",
      techBadge: "Boto3 · SNS · CloudWatch",
      techIconSvg: `<svg class="tech-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
      summary: "An automated cloud cost governance tool written in Python. It polls actual account spending against configured budget caps using the AWS Budgets API and CloudWatch metrics, dispatching instant email alert notifications through Amazon SNS before unexpected cloud bills occur.",
      technologies: ["Python 3", "AWS Boto3 SDK", "AWS Budgets API", "CloudWatch", "Amazon SNS", "IAM Security"],
      features: [
        "Automated polling and budget threshold monitoring across AWS accounts",
        "Multi-tier alert triggers dispatched via Amazon Simple Notification Service (SNS)",
        "Zero-cost footprint serverless compatibility & CLI execution",
        "Granular spending telemetry across AWS service boundaries"
      ],
      githubUrl: "https://github.com/sthabisoxakaza52/aws-cost-alerts",
      liveUrl: null
    },
    {
      id: "robot-worlds",
      title: "Robot Worlds Simulation Server",
      category: "java",
      categoryLabel: "Java / Systems",
      tagLabel: "Java System",
      headline: "Robot Worlds<br>Simulation",
      themeClass: "card-theme-java",
      techBadge: "Java 17 · TCP Sockets · SQLite",
      techIconSvg: `<svg class="tech-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
      summary: "A WeThinkCode_ school project: a multi-client virtual world simulation server. Implemented custom TCP socket communication for concurrent player robots, a 2D world collision engine, state persistence in SQLite, and comprehensive unit tests with JUnit 5.",
      technologies: ["Java 17", "TCP Sockets", "Multi-Threading", "OOP Architecture", "SQLite", "JUnit 5", "Maven"],
      features: [
        "Concurrent client-server socket protocol handling multiple player connections simultaneously",
        "Full obstacle and collision detection engine in a custom 2D grid world",
        "Persistent world state and robot stats stored in SQLite database",
        "Over 85% test coverage using JUnit 5 & Mockito test-driven development"
      ],
      githubUrl: "https://github.com/sthabisoxakaza52",
      liveUrl: null
    },
    {
      id: "healing-botanicals",
      title: "Healing Botanicals E-Commerce",
      category: "web",
      categoryLabel: "Web & Full-Stack",
      tagLabel: "Full-Stack",
      headline: "Healing Botanicals<br>Storefront",
      themeClass: "card-theme-web",
      techBadge: "HTML5 · JS · Supabase DB",
      techIconSvg: `<svg class="tech-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      summary: "A live client website built for an organic skincare brand featuring responsive multi-device layouts, keyboard accessibility, dynamic product filtering, and Supabase database connectivity.",
      technologies: ["Semantic HTML5", "Modern CSS3", "JavaScript (ES6+)", "Supabase", "Responsive UX"],
      features: [
        "Mobile-first responsive interface with fluid typography and micro-animations",
        "Dynamic category filtering for botanical skincare collections",
        "Accessible, high-contrast user experience following WCAG guidelines",
        "Connected to Supabase cloud database backend for real-time inventory"
      ],
      githubUrl: "https://github.com/sthabisoxakaza52",
      liveUrl: "https://healingbotanicals.co.za"
    },
    {
      id: "vault-cracker",
      title: "Vault Cracker Logic Engine",
      category: "java",
      categoryLabel: "Java / OOP",
      tagLabel: "OOP Logic",
      headline: "Vault Cracker<br>Logic Engine",
      themeClass: "card-theme-oop",
      techBadge: "Java · Algorithms · JUnit 5",
      techIconSvg: `<svg class="tech-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
      summary: "An algorithmic logic puzzle application in Java built to practice object-oriented design principles, Maven build lifecycles, and automated test-driven development.",
      technologies: ["Java", "OOP Architecture", "Maven", "JUnit 5", "Algorithms"],
      features: [
        "Modular architecture separating game logic, solver algorithms, and interface",
        "Automated unit testing with JUnit 5 covering boundary logic conditions",
        "Standardized build automation and packaging using Apache Maven"
      ],
      githubUrl: "https://github.com/sthabisoxakaza52/vault-cracker-java",
      liveUrl: null
    },
    {
      id: "number-guessing",
      title: "CLI Number Guessing Game",
      category: "python",
      categoryLabel: "Python / CLI",
      tagLabel: "Python CLI",
      headline: "CLI Number<br>Guessing Game",
      themeClass: "card-theme-python",
      techBadge: "Python 3 · Sanitization · CLI",
      techIconSvg: `<svg class="tech-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
      summary: "A command-line game built to demonstrate clean loop control flow, robust input sanitization, dynamic difficulty scaling, and structured user feedback.",
      technologies: ["Python 3", "CLI Controls", "Input Sanitization", "Error Handling"],
      features: [
        "Resilient error handling preventing invalid input crashes",
        "Adaptive difficulty progression and stateful score tracking",
        "Clean, PEP 8 compliant modular Python codebase"
      ],
      githubUrl: "https://github.com/sthabisoxakaza52/number-guessing-game",
      liveUrl: null
    },
    {
      id: "devops-pipeline",
      title: "Docker CI/CD Containerization",
      category: "cloud",
      categoryLabel: "DevOps & Linux",
      tagLabel: "DevOps",
      headline: "Docker CI/CD<br>Pipeline",
      themeClass: "card-theme-devops",
      techBadge: "Docker · Linux · GitHub Actions",
      techIconSvg: `<svg class="tech-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 12.5c-.8-.5-1.7-.8-2.6-.8-.3-1.1-1-2.1-2-2.7-.4.6-.7 1.4-.7 2.2H5.3c-.3-.8-.8-1.5-1.5-2-.8.6-1.3 1.5-1.5 2.5C1.5 12 1 12.7 1 13.5c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6 0-.4-.1-.7-.3-1z"></path></svg>`,
      summary: "A WeThinkCode_ school project: containerized environments and deployment pipelines leveraging Docker, Linux shell scripting, and GitHub Actions for continuous integration and automated test suites.",
      technologies: ["Docker", "Linux / Bash", "GitHub Actions", "CI/CD Automation"],
      features: [
        "Multi-stage Docker build reducing container image size by over 60%",
        "Automated GitHub Actions workflow running automated unit tests on push",
        "Standardized environment configuration across developer machines"
      ],
      githubUrl: "https://github.com/sthabisoxakaza52",
      liveUrl: null
    }
  ],

  skills: [
    {
      domain: "Cloud Architecture",
      gradClass: "skill-grad-1",
      glyphSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
      description: "Automated cloud cost governance, EC2, S3, IAM security policies, and serverless SNS alert systems."
    },
    {
      domain: "DevOps & Linux",
      gradClass: "skill-grad-2",
      glyphSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
      description: "Containerization, reproducible deployment environments, Linux shell scripting, and Git CI/CD pipelines."
    },
    {
      domain: "Testing & Quality",
      gradClass: "skill-grad-3",
      glyphSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
      description: "Developed and executed comprehensive test suites with JUnit 5 & Mockito, ensuring software reliability."
    },
    {
      domain: "Java Systems",
      gradClass: "skill-grad-4",
      glyphSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      description: "Created and documented reusable OOP system components, TCP socket networks, and SQLite database layers."
    },
    {
      domain: "Python Automation",
      gradClass: "skill-grad-5",
      glyphSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
      description: "Engineered automated API polling, data sanitization, CLI scripting tools, and backend utilities."
    },
    {
      domain: "Web & UI Systems",
      gradClass: "skill-grad-6",
      glyphSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      description: "Built responsive, high-contrast, accessible user experiences paired with Supabase cloud database backends."
    }
  ]
};
