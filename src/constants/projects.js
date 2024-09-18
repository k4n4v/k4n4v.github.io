import { 
    ad,
    scraper,
    security_camera,
  } from "../assets";

const projects = [
    {
        id: 1,
        type: "🔍 ACADEMIC PROJECT",
        title: "Real-Time Motion Sensor Security Camera System",
        description: "Programmed a microcontroller to interface with a PIR motion sensor and an Arduino camera, setting the screen to display the live feed and record when motion was detected and to remain off otherwise to reduce battery consumption.",
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
        description: "Utilized 3 APIs to translate lyrics, with the song being sourced via Spotify link, lyrics fetched from Genius, and translation performed using Google Translator with the capability to pick from 133 languages..",
        tags: [
            { name: "Python"},
            { name: "Git"},
        ],
        source_code_link: "https://github.com/k4n4v/Spotify-Lyrics-Translator",
        image: null
    },
    {
        id: 3,
        type: "👁️ CAPSTONE PROJECT",
        title: "Early Alzheimer's Detection Project Using Eye Tracking",
        description: "In this project I was the dead developer in a team of 4 to design, engineer, and prototype an optometrist device for early Alzheimer’s detection. We utilized a webcam for eye tracking, employed Python with OpenCV to determine the pupil’s location, and used MATLAB for plotting and analyzing over 700 data points collected per trial. The device was also presented at my university's engineering capstone trade show, earning 2nd place with positive feedback and interest from industry professionals.",
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
        description: "This project is an AI-powered web scraper built using Python that runs locally on your machine. The application takes a URL as input, scrapes the website's DOM content, and uses a local large language model (LLM) to extract specific information based on a prompt provided by the user. By running the LLM locally, you can avoid the need to purchase tokens from external services. The project handles large amounts of data by breaking it into manageable batches to avoid character limits, ensuring efficient and effective data processing. The technical implementation utilizes tools such as Selenium, BeautifulSoup, LangChain, and more.",
        tags: [
            { name: "Python"},
            { name: "Selenium"},
            { name: "Streamlit"},
            { name: "BeautifulSoup"},
            { name: "Langchain"},
            { name: "Ollama"},
        ],
        source_code_link: "https://github.com/k4n4v/AI-Web-Scraper",
        image: scraper
    },
];

export { projects };