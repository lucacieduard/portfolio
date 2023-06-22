"use client";

import { useContext } from "react";
import styles from "./contact.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";
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
    </section>
  );
};
