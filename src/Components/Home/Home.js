import classes from "./Home.module.css";

function Home() {
  return (
    <header className={`${classes.header} container`} id="home">
      <div className={classes["header__text"]}>
        <div className={classes["pad-text"]}>
          <h1 className={classes["header__text--main"]}>Hazem El-Maraghy</h1>
          <p className={classes["header__text--sub"]}>Frontend Web Developer</p>
        </div>
      </div>
      <div className={classes["header__hero"]}>
        <div className={classes["rotate-container"]}>
          <div className={classes["front-image"]}>
            <img alt="" src="https://i.pinimg.com/474x/e5/0d/1b/e50d1b079f994c06adb84da3597596f6.jpg" />
          </div>
          <div className={classes["back-image"]}>
            <img
              alt=""
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>
        <div className={classes["header__basic-info"]}>
          <p>Hi</p>
          <p>
            I am a self-taught Frontend Web developer. I develop cool websites and Web applications. When I am not
            coding, I enjoy watching anime and drinking tea.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Home;
