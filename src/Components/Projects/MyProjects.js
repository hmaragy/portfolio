import calculatorThumb from "./assets/calculator/thumb.png";
import calculatorImage from "./assets/calculator/image1.png";

import trafalgarThumb from "./assets/trafalgar/thumb.png";
import trafalgarImageMobile from "./assets/trafalgar/image-mobile.png";

import snakeGameThumb from "./assets/snake-game/thumb.png";

import quizAppThumb from "./assets/quizzer/thumb.png";

import blogThumb from "./assets/personal-blog/thumb.png";

const MyProjects = [
  {
    projectName: "Personal Blog",
    githubLink: "https://github.com/hmaragy/personal-blog",
    liveLink: "http://personal-blog-hmaragy.vercel.app/",
    thumb: blogThumb,
    projectImages: [blogThumb],
    projectInfo: `    <p>
    I implemented a personal blog website that a user can create his own posts there, using a clean and simple
    interface.
  </p>
  <p>
    In order for me to make users able to create posts, I integrated my code with a platform called strapi which is a
    content management system
  </p>
  <p>
    Strapi allows users to make posts using an editor like microsoft word. Then my application would take those posts
    and display them on the website.
  </p>

  <p><b>Technologies used: </b></p>
  <ul>
    <li>Next.js</li>
    <li>Strapi CMS</li>
    <li>Emotion (Styled components)</li>
    <li>Infinite scroll</li>
  </ul>`,
  },
  {
    projectName: "Quiz Application",
    githubLink: "https://github.com/hmaragy/quizzer",
    liveLink: "https://quizzer-2600.web.app",
    thumb: quizAppThumb,
    projectImages: [quizAppThumb],
    projectInfo: `    <p>
    I designed and implemented a quiz application for teachers at schools or universities, the teacher can create a
    course, then he can start building a quiz for the course using an interactive quiz builder I built myself from
    scratch.And He can decide when will the quiz be taken.
  </p>

  <p>
    The students taking the course with the teacher are the only ones who will be able to take the course quiz because
    the teacher will send them a code that is unique, students will use that code in order to enroll to the course.
  </p>

  <p><b>What I learned from the project: </b></p>

  <p>
    What I learned from building such project is how to think and architecture a bigger project before building it. I
    learned also some more cool tools that enables me to faster development.
  </p>
  <p>
    I learned how to give users previlages, like how teachers can only create courses and quizzes and students can
    only enroll and take quizzes.
  </p>

  <p><b>Technologies used: </b></p>
  <ul>
    <li>React using CRA</li>
    <li>CSS Modules.</li>
    <li>React Context for state management.</li>
    <li>Firebase</li>
    <li>Tinymce text editor.</li>
  </ul>
    `,
  },
  {
    projectName: "Snake Game",
    githubLink: "https://github.com/theghostcasper/snake-game",
    liveLink: "https://theghostcasper.github.io/snake-game/",
    thumb: snakeGameThumb,
    projectImages: [snakeGameThumb],
    projectInfo: `<p>I am not a game developer, but this game illustrates my ability to architecture my code and build interactive Applications</p>
      <p>well the logic behind the game briefly is very simple, I have created a grid layout on a (500px X 500px) container with 20 col x 20 rows. And in order to move the snake, I pop the lastest tail and unshift it immediately behind his head. when the snake eats a sausage he gets bigger and his score increases, also every 5 sausages he gets faster.</p>
      <p><b>Technologies used:</b></p>
      <p>I've used HTML, CSS, and Vanilla Javascript for the project.</p>
    `,
  },
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
