import classes from "./Skills.module.css";
function Skills(props) {
  let skillsList = props.assets;
  return (
    <section className={`${classes["skills-section"]} container`} id="skills">
      <div className="section-head">
        <h2 className="section-head--main">My Arsenal</h2>
        <p className="section-head--sub">
          Below are some of the tools, libraries and Frameworks I often work with. However, I am able to learn and adapt
          with any available technology based on the project requirements. I know the basics very well so it's only a
          matter of context switching.
        </p>
      </div>
      <ul className={classes["skills-list"]}>
        {skillsList.map((skillIcon, index) => {
          return (
            <li key={index} className={classes["skills-list__item"]}>
              <a href="#projects" className={classes["skills-list__link"]}>
                <img src={skillIcon} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
