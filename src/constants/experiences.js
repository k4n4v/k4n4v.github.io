import { 
  quartic, 
  molex, 
  coderise, 
  tulip,
  boeing, 
} from "../assets";

const experiences = [
    {
      id: 1,
      title: "Full Stack Engineer (Co-op)",
      company_name: "Quartic.Ai",
      company_url: "https://www.quartic.ai/",
      location: "Toronto, Canada",
      icon: quartic,
      iconbg: "#fff",
      date: "May 2021 - Aug 2021",
      descriptions: [
        "🧠 AI Batch Process Optimizer",
        "Developed REST APIs with Python, pandas, Postman, and Django for a medical AI process optimizer, enabling large Excel data processing and improving system integration and functionality.",
      ],
      achievements: [
        "Integrated a responsive graph visualization feature using React and GraphQL, which was well-received by the client and helped secure a major deal.",
        "Automated Docker certification verification, improving portability and ease of use by 50%, and optimized PostgreSQL tables and queries for efficient data handling.",
      ],
      tags: ["Python", "Django", "Postman", "React", "GraphQL", "PostgreSQL", "Docker"],
    },
    {
      id: 2,
      title: "Software Developer In Test (Co-op)",
      company_name: "Molex",
      company_url: "https://www.molex.com/en-us/home",
      location: "Waterloo, Canada",
      icon: molex,
      iconbg: "#fff",
      date: "Jan 2022 - Aug 2022",
      descriptions: [
        "🤖 Industrial Communications",
        "Developed and debugged automated test scripts in a CI/CD pipeline using Python, Selenium, and Appium, achieving 90% front-end and 50% back-end test coverage and significantly improving testing efficiency and accuracy.",
      ],
      achievements: [
        "Identified and resolved dependency conflicts by introducing pyenv virtual environments, combining 3 separate test repositories into 1 streamlined codebase which reduced code duplication and simplified maintenance and bug tracking.",
      ],
      tags: ["Python", "Selenium", "Appium", "CI/CD", "pyenv"],
    },
    {
      id: 3,
      title: "Software Developer (Intern)",
      company_name: "CodeRise Technologies",
      company_url: "https://coderise.io/",
      location: "Brampton, Canada",
      icon: coderise,
      iconbg: "#fff",
      date: "Jul 2023 - Aug 2023",
      descriptions: [
        "🛒 Shopify App",
        "Developed REST APIs for a subscription-based Shopify app using Python",
        "I had some extra time, so I decided to take an unpaid internship to learn more about building client applications and improve my Python skills.",
      ],
      achievements: [],
      tags: ["Python", "Shopify API", "REST APIs"],
    },
    {
      id: 4,
      title: "QA Engineer (Co-op)",
      company_name: "Tulip",
      company_url: "https://www.tulip.com/",
      location: "Kitchener, Canada",
      icon: tulip,
      iconbg: "#fff",
      date: "Sept 2023 - Dec 2023",
      descriptions: [
        "📲 Customer Relationship Management (CRM) iOS apps",
        "Executed daily regression tests and managed sprint tickets for CRM and POS iOS applications.",
      ],
      achievements: [
        "Reduced in-app email latency from 240s to 12s by implementing batch processing, improving mass email delivery speed, and identified a critical security vulnerability pre-deployment, safeguarding sensitive information of 70+ clients.",
      ],
      tags: ["iOS", "CRM", "Regression Testing", "Batch Processing"],
    },
    {
      id: 5,
      title: "Software Application Developer",
      company_name: "Boeing",
      company_url: "https://www.boeing.ca/",
      location: "Montreal, Canada",
      icon: boeing,
      iconbg: "#fff",
      date: "Dec 2024 - Present",
      descriptions: [
        "🧑‍✈️ Crew Roster Tracking",
        
      ],
      achievements: [],
      tags: [],
    },

  ];
  
  export { experiences };