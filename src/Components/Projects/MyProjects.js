import calculatorThumb from "./assets/calculator/thumb.png";
import calculatorImage from "./assets/calculator/image1.png";

import trafalgarThumb from "./assets/trafalgar/thumb.png";
import trafalgarImageMobile from "./assets/trafalgar/image-mobile.png";

const MyProjects = [
  {
    // Calculator
    projectName: "Calculator App",
    githubLink: "https://github.com/hmaragy/frontend-mentor-calculator",
    liveLink: "https://hmaragy.github.io/frontend-mentor-calculator/",
    thumb: calculatorThumb,
    projectImages: [calculatorImage],
    projectInfo: `<p>Responsive Interactive Calculator App with Switching themes using HTML, CSS and Vanilla JavaScript. I've built this project as a challenge on frontendmentor.io.</p>
    <p>The main features of the calculator includes theme switching and auto detection of the default theme using prefers-color-scheme css media feature</p>`,
  },
  {
    //  Trafalgar-landing-page
    projectName: "Trafalgar Landing Page",
    githubLink: "https://github.com/hmaragy/Trafalgar-landing-page",
    liveLink: "https://hmaragy.github.io/Trafalgar-landing-page/",
    thumb: trafalgarThumb,
    projectImages: [trafalgarThumb, trafalgarImageMobile],
    projectInfo: `Responsive Health care landing page implemented from a figma design using HTML and SCSS.`,
  },
];

export default MyProjects;
