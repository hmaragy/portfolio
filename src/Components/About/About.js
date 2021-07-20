import classes from "./About.module.css";
function About() {
  return (
    <section className={`${classes["about-section"]} container`} id="about">
      <div className="section-head">
        <h2 className="section-head--main">About</h2>
        <p className={`${classes["about-paragraph"]} section-head--sub`}>
          I Graduated from the Electronics and Communications Engineering Faculty at MSA University in Egypt. While I
          was studying engineering, I enjoyed the programming lessons they taught me and I fell in love with programming
          so I started learning to develop software as a side hustle.
        </p>
        <p className={`${classes["about-paragraph"]} section-head--sub`}>
          My place in the world seems to be at the intersection of both creativity and logic, although I am more of a
          logic thinker than a creative designer. I like to think of all projects as a problem to solve; only the tools
          change.
        </p>
        <p className={`${classes["about-paragraph"]} section-head--sub`}>
          Being an engineer has taught me to be stubborn when facing a problem so it's either me or the problem, it also
          changed my prespective about writing code to care about performance and code efficiency.
        </p>
        <p className={`${classes["about-paragraph"]} section-head--sub`}>
          While my focus is mainly on the frontend; building responsive websites and web applications with HTML, CSS,
          JavaScript, and a bunch of tools and frameworks. I also do some basic Linux Server Administration and Backend
          Web development with Node.js and PHP.
        </p>
        <p className={`${classes["about-paragraph"]} section-head--sub`}>
          I am always learning and experimenting with new tools and technologies and never bored.
        </p>
      </div>
    </section>
  );
}

export default About;
