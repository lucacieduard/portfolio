"use client";

import React, { useContext, useRef } from "react";
import styles from "./workSection.module.css";
import { ImgCarouse } from "../imgCarousel/ImgCarouse";
import { Ticket } from "../ticket/Ticket";
import workContent from "@/app/utils/workContent";
import { ThemeContext } from "@/app/context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useInView, motion } from "framer-motion";

const WorkSection = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let style;

  if (mode === "dark") {
    style = { backgroundColor: "#172135" };
  } else {
    style = { backgroundColor: "#E3E8ED" };
  }
  return (
    <motion.section
      className={styles.container}
      id="workSection"
      ref={ref}
      style={{
        transform: isInView ? "translateX(0px)" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <h2 className={styles.title}>
        My latest <span style={{ color: "#2563EB" }}>work</span>
      </h2>
      <div className={styles.projects}>
        {workContent.map((project, index) => {
          return (
            <div
              className={styles.project}
              key={project.id}
              style={index === 0 ? style : style}
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
    </motion.section>
  );
};

export default WorkSection;
