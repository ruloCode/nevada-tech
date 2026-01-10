import { setRequestLocale } from 'next-intl/server';
import Hero from "@/app/components/hero/Hero";
import AboutPreview from "@/app/components/sections/AboutPreview";
import Services from "@/app/components/sections/Services";
import Portfolio from "@/app/components/sections/Portfolio";
import Stats from "@/app/components/sections/Stats";
import Testimonials from "@/app/components/sections/Testimonials";
import FAQ from "@/app/components/sections/FAQ";
import CTA from "@/app/components/sections/CTA";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

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
