import { useMemo } from "react";
import Particles from "@tsparticles/react";

export default function ParticlesEffect() {

    const options = useMemo(
        () => ({
          background: {
            color: {
              
              opacity: 0,
            },
          },
          fpsLimit: 120,
          
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "top",
              enable: true,
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: false,
              },
              value: 70,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
            },
            shape: {
                close: true,
                fill: true,
                type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

    return (
        <Particles 
            className="pointer-events-none absolute -top-36 left-1/2 h-[32rem] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:w-[60rem]"
            id="tsparticles"
            data-testid="tsparticles"
            particlesLoaded={() => {}}
            options={options}
            />
    )
}