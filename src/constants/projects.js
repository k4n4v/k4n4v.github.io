import { 
    ad,
    scraper,
    security_camera,
    lyrics_translator,
  } from "../assets";

const projects = [
    {
        id: 1,
        type: "🔍 ACADEMIC PROJECT",
        title: "Real-Time Motion Sensor Security Camera System",
        description: "As part of my Real-Time Systems Design course, I developed a motion activated security camera system using C to program a microcontroller interfaced with a PIR motion sensor and an Arduino camera. The project required a deep understanding of real-time scheduling concepts, as well as thoughtful implementation and system design. The camera displayed a live feed and recorded only when motion was detected, keeping the screen off otherwise to conserve battery life.",
        tags: [
            { name: "C" },
            { name: "ARM" },
            { name: "FreeRTOS" },
        ],
        source_code_link: "https://github.com/k4n4v/Motion-Sensor-Security-Camera-System",
        image: security_camera
    },
    {
        id: 2,
        type: "🚀 PERSONAL DEVELOPMENT",
        title: "Spotify Lyrics Translator",
        description: "As someone who listens to a lot of music and enjoys a wide variety of genres, including Punjabi and Hindi songs, I usually understand the lyrics but sometimes come across words I do not know. Since Spotify does not always provide translations or readable lyrics for these songs, I saw this as an opportunity to build a tool to help!\n\nI created a web application using Python that fetches lyrics from Spotify and translates them into the user’s preferred language. The project integrates with Spotify’s API to get song details, Genius API to retrieve lyrics, and uses the GoogleTranslator from the deep-translator library to handle real-time translation.",
        tags: [
            { name: "Python"},
            { name: "APIs"},
            { name: "Git"},
        ],
        source_code_link: "https://github.com/k4n4v/Spotify-Lyrics-Translator",
        image: lyrics_translator
    },
    {
        id: 3,
        type: "👁️ CAPSTONE PROJECT",
        title: "Early Alzheimer's Detection Project Using Eye Tracking",
        description: "As part of my final engineering capstone project, I was the lead developer in a team of four tasked with designing, engineering, and prototyping an optometrist device for early Alzheimer’s detection. The project was carefully planned, researched, and thoroughly documented throughout.\n\nWe used a webcam for eye tracking, leveraging Python and OpenCV to determine pupil location, and MATLAB to plot and analyze over 700 data points collected per trial. Our device was showcased at the university’s engineering capstone trade show, where it earned 2nd place and received positive feedback and interest from industry professionals.",
        tags: [
            { name: "Python"},
            { name: "OpenCV"},
            { name: "MATLAB"},
            { name: "SOLIDWORKS"},
            { name: "Git"},
        ],
        source_code_link: "https://github.com/k4n4v/Early-AD-Detection-Capstone",
        image: ad
    },
    {
        id: 4,
        type: "🚀 PERSONAL DEVELOPMENT",
        title: "AI Web Scraper",
        description: "This AI powered web scraper was a project I developed using Python to run locally on your machine. I wanted to learn more about web scraping and running large language models (LLMs), which is what inspired me to build this tool. The application accepts a URL as input, scrapes the website's DOM content, and uses a local LLM to extract specific information based on a user-provided prompt. By running the LLM locally, this tool avoids the cost of purchasing tokens from external services.\n\nThe project efficiently handles large amounts of data by breaking it into manageable batches to stay within character limits, ensuring smooth and accurate processing. The technical stack includes Selenium for browser automation, BeautifulSoup for parsing, LangChain for language model integration, and other supporting tools.",
        tags: [
            { name: "Python"},
            { name: "Selenium"},
            { name: "BeautifulSoup"},
            { name: "Langchain"},
            { name: "Ollama"},
        ],
        source_code_link: "https://github.com/k4n4v/AI-Web-Scraper",
        image: scraper
    },
];

export { projects };