import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import classes from "./Projects.module.css";
import reactDom from "react-dom";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

function ProjectInfo(props) {
  window.props = props;
  function onCloseModal() {
    props.onCloseModal();
  }
  return reactDom.createPortal(
    <Popup open={props.isOpen} onClose={onCloseModal} position="center">
      <div className={classes["popup"]}>
        <button onClick={onCloseModal} className={classes["popup__close"]}>
          X
        </button>
        <div className={`${classes["popup-text"]} section-head`}>
          <h2 className={`${classes["popup__title"]}`}>{props.project?.projectName}</h2>
          <p
            className={`${classes["popup__sub"]}`}
            dangerouslySetInnerHTML={{ __html: props.project?.projectInfo }}
          ></p>
        </div>
        <div className={classes["project__info-actions"]}>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={props.project?.githubLink}
            className={classes["project__actions--btn"]}
          >
            <AiFillGithub /> Github URL
          </a>
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={props.project?.liveLink}
            className={classes["project__actions--btn"]}
          >
            <FiExternalLink /> Live View
          </a>
        </div>
        <div className={classes["project__photos"]}>
          {props.project?.projectImages?.map((projectImage) => {
            return <img src={projectImage} alt="" />;
          })}
        </div>
      </div>
    </Popup>,
    document.getElementById("popup")
  );
}

export default ProjectInfo;
