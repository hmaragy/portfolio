import Particles from "react-particles-js";

import "./ParticleEffect.css";

function ParticlesEffect(props) {
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
              ...props.assets.map((icon) => {
                return { src: icon };
              }),
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
