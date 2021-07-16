import classes from "./Nav.module.css";
import { useState } from "react";
function Nav() {
  let [activeState, setActiveState] = useState("home");
  function handleClick(event) {
    setActiveState(event.target.attributes.href.value.slice(1));
  }
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav__list"]}>
        <li className={classes["nav__list-item"]}>
          <a
            onClick={handleClick}
            href="#home"
            className={`${classes["nav__link"]} ${activeState === "home" ? classes["nav__link--active"] : ""}`}
          >
            Home
          </a>
        </li>
        <li className={classes["nav__list-item"]}>
          <a
            onClick={handleClick}
            href="#skills"
            className={`${classes["nav__link"]} ${activeState === "skills" ? classes["nav__link--active"] : ""}`}
          >
            Skills
          </a>
        </li>
        <li className={classes["nav__list-item"]}>
          <a
            onClick={handleClick}
            href="#projects"
            className={`${classes["nav__link"]} ${activeState === "projects" ? classes["nav__link--active"] : ""}`}
          >
            Projects
          </a>
        </li>
        <li className={classes["nav__list-item"]}>
          <a
            onClick={handleClick}
            href="#about"
            className={`${classes["nav__link"]} ${activeState === "about" ? classes["nav__link--active"] : ""}`}
          >
            About
          </a>
        </li>
        <li className={classes["nav__list-item"]}>
          <a
            onClick={handleClick}
            href="#contact"
            className={`${classes["nav__link"]} ${activeState === "contact" ? classes["nav__link--active"] : ""}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
