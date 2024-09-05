import { 
    ad,
    security_camera,
  } from "../assets";

const projects = [
    {
        id: 1,
        type: "👁️ CAPSTONE PROJECT",
        title: "Early Alzheimer's Detection Project Using Eye Tracking",
        description: "Lead developer in a team of 4 to design, engineer, and prototype an optometrist device for early Alzheimer’s detection. Utilized a webcam for eye tracking, employed Python with OpenCV to determine the pupil’s location, and used MATLAB for plotting and analyzing over 700 data points collected per trial. Presented the device at a trade show, earning 2nd place with positive feedback and interest from industry professionals.",
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
];

export { projects };