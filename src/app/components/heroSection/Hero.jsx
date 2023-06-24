"use client";
import React, { useRef } from "react";
import styles from "./hero.module.css";
import { Ticket } from "../ticket/Ticket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView, motion } from "framer-motion";

import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      className={styles.heroContainer}
      id="aboutSection"
      ref={ref}
      style={{
        transform: isInView ? "translateX(0px)" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
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
    </motion.section>
  );
};
