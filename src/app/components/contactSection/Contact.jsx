"use client";

import { useContext } from "react";
import styles from "./contact.module.css";
import { ThemeContext } from "@/app/context/ThemeContext";
export const Contact = () => {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <section
      className={`${styles.container}`}
      style={
        mode === "dark"
          ? { backgroundColor: "#172135" }
          : { backgroundColor: "#E3E8ED" }
      }
    >
      <p>Ready to start your next project?</p>
      <p>Get in touch me!</p>
    </section>
  );
};
