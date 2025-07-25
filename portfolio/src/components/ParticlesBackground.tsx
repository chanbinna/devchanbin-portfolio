"use client";
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 1200 } },
          color: { value: ["#6366f1", "#a21caf", "#0ea5e9"] },
          links: {
            enable: true,
            color: "#818cf8",
            distance: 150,
            opacity: 0.2,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false },
          },
          opacity: { value: 0.5 },
          size: { value: { min: 2, max: 4 } },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      style={{ position: "fixed", inset: 0, zIndex: -10 }}
    />
  );
} 