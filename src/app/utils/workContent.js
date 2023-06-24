import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const workContent = [
  ,
  {
    id: 2,
    title: "Inoesy Project V1",
    images: ["/grafice1.webp", "/grafice2.webp", "/grafice3.webp"],
    tehnologies: [
      { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
      { icon: <FontAwesomeIcon icon={faCss3} />, name: "CSS" },
      { icon: <FontAwesomeIcon icon={faJs} />, name: "JavaScript" },
      { icon: <FontAwesomeIcon icon={faReact} />, name: "React" },
    ],
    description: "",
    liveLink: "https://grafice.eduardlucaci.ro/",
    githubLink: "https://github.com/lucacieduard/aqi-project-frontend",
  },
  {
    id: 1,
    title: "meTEO, Weather APP",
    images: ["/meTeo.webp", "/meteo2.webp", "/meteo3.webp"],
    tehnologies: [
      { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
      { icon: <FontAwesomeIcon icon={faCss3} />, name: "CSS" },
      { icon: <FontAwesomeIcon icon={faJs} />, name: "JavaScript" },
      { icon: <FontAwesomeIcon icon={faReact} />, name: "React" },
    ],
    description: "",
    liveLink: "https://weather-app.eduardlucaci.ro/",
    githubLink: "https://github.com/lucacieduard/weather-app",
  },
];

export default workContent;
