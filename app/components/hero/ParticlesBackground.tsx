"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Particles loaded successfully
    },
    []
  );

  const options: ISourceOptions = {
    fullScreen: false,
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#ffffff", "#86D0DA", "#ffffff", "#ffffff"],
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.6,
        },
        animation: {
          enable: true,
          speed: 0.3,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 0.5,
          max: 2,
        },
      },
    },
    detectRetina: true,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.3,
            color: "#86D0DA",
          },
        },
      },
    },
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
