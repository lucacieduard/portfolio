"use client";

import { useContext, useRef } from "react";
import styles from "./contact.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView, motion } from "framer-motion";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailReply } from "@fortawesome/free-solid-svg-icons";
export const Contact = () => {
  const { mode, toggle } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? "translateX(0px)" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        backgroundColor: `${mode === "dark" ? "#172135" : "#E3E8ED"}`,
      }}
      viewport={{ once: true, amount: 0.5 }}
      id="contactSection"
      className={`${styles.container}`}
    >
      <p>Ready to start your next project?</p>
      <p>Get in touch me!</p>
      <div className={styles.socialContainer}>
        <Link href="https://linkedin.com/in/eduard-lucaci" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://facebook.com/eduard.lucaci.3/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href="https://github.com/lucacieduard" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="mailto:eduardiosif.lucaci@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
    </motion.section>
  );
};
