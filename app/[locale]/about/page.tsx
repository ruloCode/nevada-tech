import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import AboutHero from "@/app/components/about/AboutHero";
import AboutFounders from "@/app/components/about/AboutFounders";
import AboutPhilosophy from "@/app/components/about/AboutPhilosophy";
import AboutProcess from "@/app/components/about/AboutProcess";
import AboutExpertise from "@/app/components/about/AboutExpertise";
import AboutValues from "@/app/components/about/AboutValues";
import AboutMission from "@/app/components/about/AboutMission";
import AboutVision from "@/app/components/about/AboutVision";
import AboutCulture from "@/app/components/about/AboutCulture";
import AboutCareers from "@/app/components/about/AboutCareers";
import CTA from "@/app/components/sections/CTA";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About.hero' });

  return {
    title: `${t('titleLine1')} ${t('titleLine2')} | Nevada Tech`,
    description: t('subtitle'),
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <AboutHero />
      <AboutFounders />
      <AboutPhilosophy />
      <AboutProcess />
      <AboutExpertise />
      <AboutValues />
      <AboutMission />
      <AboutVision />
      <AboutCulture />
      <AboutCareers />
      <CTA />
    </main>
  );
}
