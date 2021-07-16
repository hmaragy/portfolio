import Particles from "react-particles-js";

import "./ParticleEffect.css";

import ReactIcon from "./assets/React-icon.png";
import VueIcon from "./assets/Vue-icon.png";
import WebpackIcon from "./assets/Webpack-icon.png";
import CSSIcon from "./assets/CSS-icon.png";
import HTMLIcon from "./assets/HTML-icon.png";
import BootstrapIcon from "./assets/Bootstrap-icon.png";
import JQueryIcon from "./assets/jQuery-icon.png";

function ParticlesEffect() {
  return (
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.5,
            distance: 150,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: ReactIcon,
              },
              {
                src: VueIcon,
              },
              {
                src: WebpackIcon,
              },
              {
                src: CSSIcon,
              },
              {
                src: JQueryIcon,
              },
              {
                src: BootstrapIcon,
              },
              {
                src: HTMLIcon,
              },
            ],
          },
          color: {
            value: "#CCC",
          },
          size: {
            value: 50,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              size_min: 10,
              sync: true,
            },
          },
        },
        retina_detect: true,
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
        },
      }}
    />
  );
}

export default ParticlesEffect;
