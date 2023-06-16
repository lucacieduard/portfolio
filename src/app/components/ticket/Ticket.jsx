"use client";
import React from "react";
import styles from "./ticket.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export const Ticket = (props) => {
  const context = useContext(ThemeContext);

  let color;

  if (context.mode === "dark") {
    color = "#172135";
  } else {
    color = "#E3E8ED";
  }

  return (
    <div className={styles.container} style={{ background: color }}>
      {props.icon && <span className={styles.icon}>{props.icon}</span>}{" "}
      <span className={styles.name}>{props.name}</span>
    </div>
  );
};
