"use client";

import React, { useContext } from "react";
import styles from "./workSection.module.css";
import { ImgCarouse } from "../imgCarousel/ImgCarouse";
import { Ticket } from "../ticket/Ticket";
import workContent from "@/app/utils/workContent";
import { ThemeContext } from "@/app/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const WorkSection = () => {
  const { toggle, mode } = useContext(ThemeContext);
  let style;

  if (mode === "dark") {
    style = { backgroundColor: "#172135" };
  } else {
    style = { backgroundColor: "#E3E8ED" };
  }
  return (
    <section className={styles.container} id="workSection">
      <h2 className={styles.title}>
        My latest <span style={{ color: "#2563EB" }}>work</span>
      </h2>
      <div className={styles.projects}>
        {workContent.map((project, index) => {
          return (
            <div
              className={styles.project}
              key={project.id}
              style={index === 0 ? style : {}}
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <ImgCarouse images={project.images} />
              <div className={styles.socialContainer}>
                <ul className={styles.tehnology}>
                  {project.tehnologies.map((thenology) => {
                    return (
                      <li key={thenology.name}>
                        <Ticket icon={thenology.icon} name={thenology.name} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.buttons}>
                <Link href={project.liveLink} target="_blank">
                  <button className={styles.button}>
                    Live <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
                <Link href={project.githubLink} target="_blank">
                  <button className={styles.button}>
                    Github <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkSection;
