import classes from "./Projects.module.css";
import Project from "./Project";
import MyProjects from "./MyProjects";
import ProjectInfo from "./ProjectInfo";
import { useState } from "react";

function Projects() {
  const [isInfoOpen, openInfo] = useState(false);
  const [activeProject, setActiveProject] = useState({});
  function handleProjectInfo(project) {
    setActiveProject(project);
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    openInfo(true);
  }

  function handleCloseInfo() {
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    openInfo(false);
  }

  return (
    <section className={`${classes["projects-section"]} container`} id="projects">
      <ProjectInfo project={activeProject} isOpen={isInfoOpen} onCloseModal={handleCloseInfo} />
      <div className="section-head">
        <h2 className="section-head--main">Projects</h2>
        <p className="section-head--sub">
          From Basic landing pages and web components, to fully fledged ReactJS, Redux, Vue.js and Node.js apps.
          Checkout my lastest web software development portfolio projects.
        </p>
      </div>
      <div className={classes["projects-list"]}>
        {MyProjects.map((myProject) => {
          return <Project onProjectInfo={handleProjectInfo} project={myProject} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
