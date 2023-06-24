"use client";

import { useContext } from "react";
import styles from "./contact.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailReply } from "@fortawesome/free-solid-svg-icons";
export const Contact = () => {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <section
      id="contactSection"
      className={`${styles.container}`}
      style={
        mode === "dark"
          ? { backgroundColor: "#172135", transition: "all 1s" }
          : { backgroundColor: "#E3E8ED", transition: "all 1s" }
      }
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
    </section>
  );
};
