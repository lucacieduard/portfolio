"use client";
import React, { useContext, useRef, useState } from "react";
import styles from "./experience.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useInView, motion } from "framer-motion";
import content from "@/app/utils/experienceContent";
import Link from "next/link";

export const ExperienceSection = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const [activeInfo, setActiveInfo] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <h2 className={styles.sectionTitle}>Courses</h2>
      <div className={styles.experienceContainer}>
        <div className={styles.companyContainer}>
          {content.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveInfo(item.id)}
                className={styles.catContainer}
                style={activeInfo === item.id ? active : {}}
              >
                <div className={`${styles.companyLogo}`}>{item.icon}</div>
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
              {content[activeInfo].position}{" "}
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
              {content[activeInfo].sentences.length > 0 &&
                content[activeInfo].sentences.map((prop) => {
                  return (
                    <motion.li
                      className={styles.listItem}
                      key={prop}
                      initial={{ opacity: 0, transform: "translateX(-50px)" }}
                      whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className={styles.arrow}>&gt; </span>
                      <span>{prop}</span>
                    </motion.li>
                  );
                })}

              {content[activeInfo].sentences.length === 0 && (
                <>
                  {" "}
                  <motion.li
                    initial={{ opacity: 0, transform: "translateX(-50px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={styles.arrow}>&gt; </span>
                    <span>
                      At the beginning of my journey I started with the basics
                      of HTML, CSS and JAVASCRIPT doing the following courses:{" "}
                      <Link
                        target="_blank"
                        href={content[activeInfo].course[0].link}
                      >
                        {content[activeInfo].course[0].name}
                      </Link>
                      {", "}
                      <Link
                        target="_blank"
                        href={content[activeInfo].course[1].link}
                      >
                        {content[activeInfo].course[1].name}
                      </Link>
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, transform: "translateX(-50px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={styles.arrow}>&gt; </span>
                    <span>
                      To learn React, I followed the courses:{" "}
                      <Link
                        target="_blank"
                        href={content[activeInfo].course[2].link}
                      >
                        {content[activeInfo].course[2].name}
                      </Link>
                      {", "}
                      <Link
                        target="_blank"
                        href={content[activeInfo].course[3].link}
                      >
                        {content[activeInfo].course[3].name}
                      </Link>
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, transform: "translateX(-50px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={styles.arrow}>&gt; </span>
                    <span>
                      Now I deepen what I learned and put it into practice
                      through projects taking everything to another level with
                      NextJs & TypeScript
                    </span>
                  </motion.li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
