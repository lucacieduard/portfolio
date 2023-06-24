import { faGraduationCap, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const content = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    companyName: "Digital Nation",
    companyPosition: "Full Stack JavaScript Course",
    position: "Explorer at",
    subCompany: "Generatia Tech",
    dates: "10.2022 - 02.2023",
    sentences: [
      "After completing a 4-month JavaScript course, I have gained practical experience in applying JavaScript fundamentals and utilizing tools like React, Express, and MongoDB.",
      " As a participant, I have learned to effectively communicate, work in teams, demonstrate autonomy and proactivity, and adopt a solution-oriented mindset through the support of the Generatia Tech community.",
    ],
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faSun} />,
    companyName: "Online Courses",
    companyPosition: "",
    position: "",
    subCompany: "",
    dates: "06.2022 - Present",
    sentences: [],
    course: [
      {
        name: "The Web Developer Bootcamp 2023",
        link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
      },
      {
        name: "The Complete JavaScript Course 2023: From Zero to Expert!",
        link: "https://www.udemy.com/course/the-complete-javascript-course/",
      },
      {
        name: "React - The Complete Guide 2023",
        link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      },
      {
        name: "Learn React",
        link: "https://scrimba.com/learn/learnreact",
      },
    ],
  },
];

export default content;
