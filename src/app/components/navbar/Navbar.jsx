"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";
import { faBars, faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import { ToggleTheme } from "../toggleTheme/ToggleTheme";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggleHandler = () => setToggleMenu((prev) => !prev);
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <FontAwesomeIcon icon={faCodeFork} fontSize={21} />
      </div>
      <div className={styles.menuListContainer}>
        <button className={styles.toggleButton} onClick={toggleHandler}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <ul
          className={`${styles.list} ${toggleMenu ? styles.hide : ""}`}
          style={{
            backgroundColor: `${mode === "light" ? "#f7f3f3" : "#111827"}`,
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
        </ul>
        <FontAwesomeIcon icon={faGithub} />
        <ToggleTheme />
      </div>
    </nav>
  );
};
