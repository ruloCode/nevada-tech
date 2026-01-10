export interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
    slug: "web-development",
  },
  {
    id: 2,
    number: "02",
    title: "Mobile Apps",
    description:
      "iOS and Android native and cross-platform applications that deliver seamless user experiences.",
    slug: "mobile-apps",
  },
  {
    id: 3,
    number: "03",
    title: "Cloud Solutions",
    description:
      "AWS, GCP, and Azure infrastructure design, migration, and optimization for enterprise-grade reliability.",
    slug: "cloud-solutions",
  },
  {
    id: 4,
    number: "04",
    title: "AI/ML",
    description:
      "Machine learning models and AI integrations that transform data into actionable business insights.",
    slug: "ai-ml",
  },
  {
    id: 5,
    number: "05",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive, engaging interfaces driving conversion and retention.",
    slug: "ui-ux-design",
  },
  {
    id: 6,
    number: "06",
    title: "DevOps",
    description:
      "CI/CD pipelines, automation, and infrastructure as code for faster, more reliable deployments.",
    slug: "devops",
  },
  {
    id: 7,
    number: "07",
    title: "Tech Consulting",
    description:
      "Strategic technology advisory helping businesses make informed decisions and optimize their tech stack.",
    slug: "tech-consulting",
  },
  {
    id: 8,
    number: "08",
    title: "E-commerce",
    description:
      "Online stores and payment integrations that convert visitors into customers with seamless checkout experiences.",
    slug: "e-commerce",
  },
];
