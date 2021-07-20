import classes from "./Projects.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { IoInformationCircle } from "react-icons/io5";

function Project(props) {
  function handlePopup() {
    props.onProjectInfo(props.project);
  }
  return (
    <div className={classes["project"]}>
      <header className={classes["project__head"]}>
        <div className={classes["project__controls"]}>
          <div className={classes["project__controls--red"]}></div>
          <div className={classes["project__controls--yellow"]}></div>
          <div className={classes["project__controls--green"]}></div>
        </div>
        <div className={classes["project__title"]}>
          <h3>{props.project.projectName}</h3>
        </div>
        <div className={classes["project__info"]}>
          {/* @TODO Finish the POPUP With Info */}
          <button>
            <IoInformationCircle onClick={handlePopup} />
          </button>
        </div>
      </header>
      <div className={classes["project__body"]}>
        <img src={props.project.thumb} alt="" />
        <div className={classes["project__actions"]}>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={props.project.githubLink}
            className={classes["project__actions--btn"]}
          >
            <AiFillGithub />
          </a>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={props.project.liveLink}
            className={classes["project__actions--btn"]}
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
