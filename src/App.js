import "./app.css";
import ParticlesEffect from "./Components/UI/Particles/ParticlesEffect";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
/* Importing icons */
import ReactIcon from "./assets/React-icon.png";
import VueIcon from "./assets/Vue-icon.png";
import WebpackIcon from "./assets/Webpack-icon.png";
import CSSIcon from "./assets/CSS-icon.png";
import HTMLIcon from "./assets/HTML-icon.png";
import BootstrapIcon from "./assets/Bootstrap-icon.png";
import JQueryIcon from "./assets/jQuery-icon.png";
import JavascriptIcon from "./assets/Javascript-icon.png";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

let assets = [HTMLIcon, CSSIcon, JavascriptIcon, JQueryIcon, BootstrapIcon, ReactIcon, VueIcon, WebpackIcon];

function App() {
  return (
    <>
      <Nav />
      <div className="particles-container">
        <ParticlesEffect assets={assets} />
        <Home />
        <Skills assets={assets} />
      </div>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
