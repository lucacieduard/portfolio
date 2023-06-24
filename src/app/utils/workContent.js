import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const workContent = [
  {
    id: 1,
    title: "meTEO, Weather APP",
    images: ["/meTeo.png", "/meTeo.png", "/meTeo.png"],
    tehnologies: [
      { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
      { icon: <FontAwesomeIcon icon={faCss3} />, name: "CSS" },
      { icon: <FontAwesomeIcon icon={faJs} />, name: "JavaScript" },
      { icon: <FontAwesomeIcon icon={faReact} />, name: "React" },
    ],
    description: "descrierea mea",
    liveLink: "https://weather-app.eduardlucaci.ro/",
    githubLink: "https://github.com/lucacieduard/weather-app",
  },
  {
    id: 2,
    title: "Inoesy",
    images: ["/meTeo.png", "/meTeo.png", "/meTeo.png"],
    tehnologies: [
      { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
      { icon: <FontAwesomeIcon icon={faCss3} />, name: "CSS" },
      { icon: <FontAwesomeIcon icon={faJs} />, name: "JavaScript" },
      { icon: <FontAwesomeIcon icon={faReact} />, name: "React" },
    ],
    description: "descrierea mea",
    liveLink: "https://weather-app.eduardlucaci.ro/",
    githubLink: "https://github.com/lucacieduard/weather-app",
  },
];

export default workContent;
