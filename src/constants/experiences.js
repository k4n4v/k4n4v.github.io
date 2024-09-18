import { 
  quartic, 
  molex, 
  coderise, 
  tulip, 
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
      description:
        "As my first professional experience at a fast-paced startup tech company, I had the opportunity to work alongside highly experienced data scientists and was mentored by an incredible guide who introduced me to Python. I quickly learned the language and fell in love with its versatility and power. During my time there, I developed REST APIs using Python, Django, and pandas, optimized SQL queries for PostgreSQL, and implemented front-end data visualization using React and GraphQL, which significantly improved system integration and data insights.",
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
      description:
        "As part of my experience at Molex, a globally renowned provider of electronic solutions, I had the opportunity to work with a team primarily based in France, which required me to adjust to different time zones and work more independently. This large-scale company serves a diverse range of industries, including data communications, consumer electronics, automotive, and medical sectors. During my time there, I significantly strengthened my Python skills, becoming more self-reliant in developing automation test code. I achieved 90% front-end and 50% back-end coverage using Python, Selenium, and Appium in a CI/CD pipeline, while automating 32 manual tests and identifying critical bugs. Additionally, I merged three testing repositories into one by introducing Virtual Environments (pyenv), which enhanced multi-app testing, bug tracking, and version management across multiple applications.",
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company_name: "CodeRise Technologies",
      company_url: "https://coderise.io/",
      location: "Brampton, Canada",
      icon: coderise,
      iconbg: "#fff",
      date: "Jul 2023 - Aug 2023",
      description:
        "During a short-term internship at CodeRise Technologies, I joined the team over summer break to further exercise my skills and learn new ones. CodeRise specializes in cloud and digital transformation services, focusing on IT infrastructure optimization and custom solutions. During my time there, I developed REST APIs for a subscription-based Shopify app using Python, while also performing code reviews. Additionally, I worked on reviewing client feedback, incorporating requested features, and delivering bug fixes to enhance product functionality and improve user experience. This experience allowed me to further hone my skills in a real-world environment.",
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
      description:
        "During my time at Tulip, a SaaS company partnered with Apple and Salesforce, I gained extensive knowledge about the development lifecycle of iOS applications and the importance of client interactions in feature requirements. Tulip specializes in cloud-based retail solutions, enhancing customer engagement and omnichannel commerce for major luxury brands like Michael Kors, Versace, and Coach. My role involved performing daily regression tests, managing team sprint tickets, and collaborating with developers to test and debug clienteling and POS iOS applications. I contributed to the redesign of an iOS app, offering innovative ideas to improve user experience, and addressed issues such as reducing email sending latency from 240 seconds to 12 seconds. I also identified a critical security vulnerability before deployment, protecting sensitive information for over 70 clients.",
    },
  ];
  
  export { experiences };