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
        "Designed and developed REST APIs for an AI industrial process optimizer using Python, React, pandas, and Django.",
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
        "Independently developed and debugged automation test code within a CI/CD pipeline achieving 90% front-end and 50% back-end coverage using Python, Selenium, and Appium, while performing functional/non-functional testing.",
    },
    {
      id: 3,
      title: "Software Developer Intern",
      company_name: "CodeRise Technologies Inc.",
      company_url: "https://coderise.io/",
      location: "Brampton, Canada",
      icon: coderise,
      iconbg: "#fff",
      date: "July 2023 - Aug 2023",
      description:
        "Developed REST APIs for a subscription-based Shopify app using Python, while performing code reviews.",
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
        "Performed daily regression tests, formulated effective test plans, managed team sprint tickets, and collaborated with developers to test and debug pre-merge changes for clienteling and POS iOS applications.",
    },
  ];
  
  export { experiences };