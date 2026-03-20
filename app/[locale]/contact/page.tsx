import { setRequestLocale, getTranslations } from "next-intl/server";
import ContactContent from "@/app/components/sections/ContactContent";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.meta" });

  return {
    title: `${t("title")} | Nevada Tech`,
    description: t("description"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Contact.hero" });

  return (
    <ContactContent
      label={t("label")}
      title={t("title")}
      titleAccent={t("titleAccent")}
      subtitle={t("subtitle")}
    />
  );
}
