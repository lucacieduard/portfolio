import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <FontAwesomeIcon icon={faCodeFork} fontSize={21} />
        <p>logo</p>
      </div>
      <div className={styles.socialContainer}>
        <Link href="">
          <FontAwesomeIcon icon={faLinkedin} fontSize={18} />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faGithub} fontSize={18} />
        </Link>
      </div>
    </footer>
  );
};
