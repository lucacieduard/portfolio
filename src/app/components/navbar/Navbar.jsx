import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.css";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      {" "}
      <FontAwesomeIcon icon={faCodeFork} fontSize={21} />
    </nav>
  );
};
