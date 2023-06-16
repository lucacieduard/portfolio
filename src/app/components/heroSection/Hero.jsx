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
    <section className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>
        Hello I&apos;m <br />
        Eduard Lucaci
      </h1>
      <p className={styles.heroDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam
        quae amet nostrum accusamus animi veniam odio incidunt! Nam quisquam
        dolore sint quo sed necessitatibus rerum quam adipisci et fugit. Animi
        quo rerum vel! Magnam enim nihil rem excepturi voluptatum cum impedit
        magni? Ea magnam rem sint, necessitatibus nesciunt voluptas quibusdam
        cupiditate unde. Numquam, vero explicabo quisquam officia dignissimos
      </p>
      <div className={styles.ticketContainer}>
        <Ticket icon={<FontAwesomeIcon icon={faHtml5} />} name="HTML" />
        <Ticket icon={<FontAwesomeIcon icon={faCss3} />} name="CSS" />
        <Ticket icon={<FontAwesomeIcon icon={faJs} />} name="JavaScript" />
        <Ticket icon={<FontAwesomeIcon icon={faReact} />} name="React" />
        <Ticket icon={<FontAwesomeIcon icon={faNodeJs} />} name="NodeJs" />
        <Ticket name="NextJs" />
        <Ticket name="MongoDB" />
      </div>
    </section>
  );
};
