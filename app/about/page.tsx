import { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import AboutHero from "../components/about/AboutHero";
import AboutFounders from "../components/about/AboutFounders";
import AboutPhilosophy from "../components/about/AboutPhilosophy";
import AboutProcess from "../components/about/AboutProcess";
import AboutExpertise from "../components/about/AboutExpertise";
import AboutValues from "../components/about/AboutValues";
import AboutCareers from "../components/about/AboutCareers";
import CTA from "../components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us | Nevada Tech",
  description:
    "We don't just build software—we build empires. Learn about the team behind your digital transformation.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutFounders />
      <AboutPhilosophy />
      <AboutProcess />
      <AboutExpertise />
      <AboutValues />
      <AboutCareers />
      <CTA />
    </main>
  );
}
