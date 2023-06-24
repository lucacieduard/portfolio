"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";
import { faBars, faCodeFork, faX } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import { ToggleTheme } from "../toggleTheme/ToggleTheme";
import Link from "next/link";
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const toggleHandler = () => setToggleMenu((prev) => !prev);
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <nav
      className={styles.nav}
      style={{
        backgroundColor: `${mode === "light" ? "#f7f3f3" : "#111827"}`,
        transition: "all 1s ",
      }}
    >
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <FontAwesomeIcon icon={faCodeFork} fontSize={21} />
        </div>
        <div className={styles.menuListContainer}>
          <button className={styles.toggleButton} onClick={toggleHandler}>
            <FontAwesomeIcon icon={toggleMenu === true ? faBars : faX} />
          </button>

          <ul
            className={`${styles.list} ${toggleMenu ? styles.hide : ""}`}
            style={{
              backgroundColor: `${mode === "light" ? "#f7f3f3" : "#111827"}`,
            }}
          >
            <Link
              href="#aboutSection"
              onClick={toggleHandler}
              style={{ textDecoration: "none" }}
            >
              <li>About</li>
            </Link>{" "}
            <Link
              href="#experienceSection"
              onClick={toggleHandler}
              style={{ textDecoration: "none" }}
            >
              <li>Courses</li>
            </Link>
            <Link
              href="#workSection"
              onClick={toggleHandler}
              style={{ textDecoration: "none" }}
            >
              <li>Work</li>
            </Link>
            <Link
              href="#contactSection"
              onClick={toggleHandler}
              style={{ textDecoration: "none" }}
            >
              <li>Contact</li>
            </Link>
          </ul>
          <Link href="https://github.com/lucacieduard" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};
