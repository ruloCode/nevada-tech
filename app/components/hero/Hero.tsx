"use client";

import dynamic from "next/dynamic";
import Navbar from "../navigation/Navbar";
import HeroContent from "./HeroContent";
import DecorativeLines from "./DecorativeLines";

// Dynamic import for particles to avoid SSR issues
const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#040E15]">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main radial gradient - teal tinted */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#3A818D]/8 via-transparent to-transparent blur-3xl" />

        {/* Secondary glow - subtle teal */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#3A818D]/5 via-transparent to-transparent blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Decorative curved lines */}
      <DecorativeLines />

      {/* Particles */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <HeroContent />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040E15] to-transparent" />
    </section>
  );
}
