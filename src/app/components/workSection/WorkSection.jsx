import React from "react";
import styles from "./workSection.module.css";
import Image from "next/image";
import { ImgCarouse } from "../imgCarousel/ImgCarouse";
import { Ticket } from "../ticket/Ticket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";

const WorkSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        My latest <span style={{ color: "#2563EB" }}>work</span>
      </h2>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h3 className={styles.projectTitle}>meTEO, Weather APP</h3>
          <ImgCarouse />
          <div className={styles.socialContainer}>
            <ul className={styles.tehnology}>
              <li>
                {" "}
                <Ticket icon={<FontAwesomeIcon icon={faHtml5} />} name="HTML" />
              </li>
              <li>
                {" "}
                <Ticket icon={<FontAwesomeIcon icon={faCss3} />} name="CSS" />
              </li>
              <li>
                {" "}
                <Ticket
                  icon={<FontAwesomeIcon icon={faReact} />}
                  name="React"
                />
              </li>
            </ul>
          </div>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          </p>
        </div>

        <div className={styles.project}>
          <h3 className={styles.projectTitle}>meTEO, Weather APP</h3>
          <ImgCarouse />
          <div className={styles.socialContainer}>
            <ul className={styles.tehnology}>
              <li>
                {" "}
                <Ticket icon={<FontAwesomeIcon icon={faHtml5} />} name="HTML" />
              </li>
              <li>
                {" "}
                <Ticket icon={<FontAwesomeIcon icon={faCss3} />} name="CSS" />
              </li>
              <li>
                {" "}
                <Ticket
                  icon={<FontAwesomeIcon icon={faReact} />}
                  name="React"
                />
              </li>
            </ul>
          </div>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
