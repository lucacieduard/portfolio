"use client";
import React, { useContext, useRef, useState } from "react";
import styles from "./experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useInView, motion } from "framer-motion";

const content = [
  {
    id: 0,
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    companyName: "Digital Nation",
    companyPosition: "Full Stack JavaScript Course",
    position: "Explorer",
    subCompany: "Generatia Tech",
    dates: "10.2022 - 02.2023",
    sentences: [
      "Lorems ipsum dolor sit, amet consectetur adipisicing elit. Eum excepturi impedit itaque! Incidunt, esse soluta veniam, libero",
      "Lorem isapsum dolor sit, amet consectetur adipisicing elit. Eum excepturi impedit itaque! Incidunt, esse soluta veniam, libero",
      "Lorem iaxpsum dolor sit, amet consectetur adipisicing elit. Eum excepturi impedit itaque! Incidunt, esse soluta veniam, libero",
    ],
  },
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faSun} />,
    companyName: "Digital Nation",
    companyPosition: "Full Stack JavaScript Course",
    position: "Explorer",
    subCompany: "Inoesy",
    dates: "10.2023 - 12.2023",
    sentences: [
      "Lorem asdipsum dolor sit, amet consectetur adipisicing elit. Eum excepturi impedit itaque! Incidunt, esse soluta veniam, libero",
      "Lorem ipsum dxxaxolor sit, amet consectetur adipisicing elit. Eum excepturi impedit itaque! Incidunt, esse soluta veniam, libero",
    ],
  },
];

export const ExperienceSection = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [activeInfo, setActiveInfo] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const active =
    mode === "dark"
      ? {
          backgroundColor: "#172135",
          borderRadius: "5px",
          transition: "all 1s",
        }
      : {
          backgroundColor: "#E3E8ED",
          borderRadius: "5px",
          transition: "all 1s",
        };

  return (
    <motion.section
      className={styles.container}
      id="experienceSection"
      ref={ref}
      style={{
        transform: isInView ? "translateX(0px)" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className={styles.sectionTitle}>My experience</h2>
      <div className={styles.experienceContainer}>
        <div className={styles.companyContainer}>
          {content.map((item) => {
            return (
              <div key={item.id} onClick={() => setActiveInfo(item.id)}>
                <div
                  className={`${styles.companyLogo}`}
                  style={activeInfo === item.id ? active : {}}
                >
                  {item.icon}
                </div>
                <div className={`${styles.companyInfo}  ${styles.hide}`}>
                  <span className={`${styles.companyName}`}>
                    {item.companyName}
                  </span>
                  <span className={styles.companyPosition}>
                    {item.companyPosition}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.descripiptionContainer}>
          <div className={styles.descriptionHeader}>
            <p className={styles.title}>
              {content[activeInfo].position} at{" "}
              <span
                style={{
                  color: "#2563EB",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                {content[activeInfo].subCompany}
              </span>
            </p>
            <p className={styles.dates}>{content[activeInfo].dates}</p>
          </div>
          <div className={styles.descriptionContent}>
            <ul className={styles.list}>
              {content[activeInfo].sentences.map((prop) => {
                return (
                  <motion.li
                    className={styles.listItem}
                    key={prop}
                    initial={{ opacity: 0, transform: "translateX(-50px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0)" }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={styles.arrow}>&gt; </span>
                    <span>{prop}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
