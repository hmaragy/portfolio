import classes from "./Footer.module.css";
import { BiUpArrowAlt } from "react-icons/bi";
function Footer() {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer__arrow-up"]}>
          <a href="#home">
            <BiUpArrowAlt />
          </a>
        </div>
        <div className={classes["footer__copy"]}>&copy; 2021 | Hazim El-Maraghy</div>
      </div>
    </footer>
  );
}

export default Footer;
