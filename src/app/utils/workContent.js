import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const workContent = [
  {
    id: 2,
    title: "MORENT - CMS (in progress)",
    images: ["/cms_1.webp", "/cms_2.webp", "/cms_3.webp", "/cms_4.webp"],
    tehnologies: [
      { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
      { icon: <FontAwesomeIcon icon={faSass} />, name: "Sass" },
      { icon: <FontAwesomeIcon icon={faJs} />, name: "TypeScript" },
      { icon: <FontAwesomeIcon icon={faReact} />, name: "React" },
    ],
    description: "CMS for MORENT APP",
    liveLink: "https://car-rental.eduardlucaci.ro/admin?test=true",
    githubLink: "https://github.com/lucacieduard/CarRent-APP",
  },
  {
    id: 2,
    title: "MORENT - Rental Car APP (in progress)",
    images: ["/car_1.webp", "/car_2.webp", "/car_3.webp", "/cms_5.webp"],
    tehnologies: [
      { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML" },
      { icon: <FontAwesomeIcon icon={faSass} />, name: "Sass" },
      { icon: <FontAwesomeIcon icon={faJs} />, name: "TypeScript" },
      { icon: <FontAwesomeIcon icon={faReact} />, name: "React" },
    ],
    description: "TS & React & Sass Project",
    liveLink: "https://car-rental.eduardlucaci.ro/",
    githubLink: "https://github.com/lucacieduard/CarRent-APP",
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
];

export default workContent;
