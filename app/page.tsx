import Hero from "./components/hero/Hero";
import AboutPreview from "./components/sections/AboutPreview";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
