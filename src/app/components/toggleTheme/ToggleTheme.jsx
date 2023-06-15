import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./toggleTheme.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";

export const ToggleTheme = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.changeTheme}>
      <span
        className={styles.ball}
        style={
          mode === "light" ? { left: 5 } : { right: 5, background: "white" }
        }
      ></span>
      <FontAwesomeIcon icon={faMoon} onClick={toggle} />

      <FontAwesomeIcon icon={faSun} onClick={toggle} />
    </div>
  );
};
