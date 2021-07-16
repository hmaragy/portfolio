import classes from "./Home.module.css";

function Home() {
  return (
    <header className={classes.header}>
      <div className={classes["header__text"]}>
        <div className={classes["pad-text"]}>
          <h1 className={classes["header__text--main"]}>Hazem El-Maraghy</h1>
          <p className={classes["header__text--sub"]}>Frontend Web Developer</p>
        </div>
      </div>
      <div className={classes["header__hero"]}>
        <div className={classes["rotate-container"]}>
          <div className={classes["front-image"]}>
            <img
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/113040727/original/1681a4f33a6e278af3bf957d12826dadfd248ccd/can-create-cartoon-portrait.jpg"
              alt=""
            />
          </div>
          <div className={classes["back-image"]}>
            <img src="https://i.pinimg.com/736x/28/d2/d8/28d2d8924d9c60309f3f15bf5e0ec98d.jpg" alt="" />
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
