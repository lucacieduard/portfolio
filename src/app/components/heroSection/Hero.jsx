import React from "react";
import styles from "./hero.module.css";
import { Ticket } from "../ticket/Ticket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <section className={styles.heroContainer} id="aboutSection">
      <h1 className={styles.heroTitle}>
        Hello I&apos;m <br />
        Eduard Lucaci
      </h1>
      <p className={styles.heroDescription}>
        I am a dedicated student at Gheorghe Asachi Technical University in
        Iasi, pursuing a degree in Electrical Engineering with a specialization
        in Applied Informatics in Electrical Engineering. With a strong passion
        for web programming, I have focused my studies on the exciting world of
        web development. In addition to my academic pursuits, I have also
        undertaken independent studies in front-end development for the past
        year and a half. This self-driven exploration has allowed me to dive
        deeper into various technologies and frameworks.
      </p>
      <div className={styles.ticketContainer}>
        <Ticket icon={<FontAwesomeIcon icon={faHtml5} />} name="HTML" />
        <Ticket icon={<FontAwesomeIcon icon={faCss3} />} name="CSS" />
        <Ticket icon={<FontAwesomeIcon icon={faJs} />} name="JavaScript" />
        <Ticket icon={<FontAwesomeIcon icon={faReact} />} name="React" />
        <Ticket name="NextJs" />
        <Ticket icon={<FontAwesomeIcon icon={faNodeJs} />} name="NodeJs" />
        <Ticket name="ExpressJs" />
        <Ticket name="MongoDB" />
      </div>
    </section>
  );
};
