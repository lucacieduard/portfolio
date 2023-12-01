import { faGraduationCap, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const jobs = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    companyName: "Continental",
    companyPosition: "Summer Internship",
    position: "",
    subCompany: "",
    dates: "07.2023 - 10.2023",
    sentences: [
      "Here i had the chance to practice my React and TypeScript skills",
      "I had the opportunity to collaborate with a team and I worked on the production process from scratch",
      "i used UI components from Material Ui library and a couple of validation libraries like Semver and AJV",
    ],
  },
];

export default jobs;
