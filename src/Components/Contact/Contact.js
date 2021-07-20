import classes from "./Contact.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
function Contact() {
  return (
    <section className={`${classes["contact-section"]} container`} id="contact">
      <div className="section-head">
        <h2 className="section-head--main">Reach me</h2>
        <p className="section-head--sub">
          If you want to have a discussion or collaborate on a project together you can find me here:
        </p>
      </div>
      <div className={classes["contact_buttons"]}>
        <a href="mailto:reach.hazim@gmail.com" className={classes["contact__button"]}>
          <HiOutlineMail /> Email
        </a>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/hazim-mohamed/"
          className={classes["contact__button"]}
        >
          <FaLinkedin /> Linkedin
        </a>
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://github.com/hmaragy/"
          className={classes["contact__button"]}
        >
          <FaGithub /> Github
        </a>
      </div>
    </section>
  );
}

export default Contact;
