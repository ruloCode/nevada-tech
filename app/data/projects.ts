export interface Project {
  id: number;
  title: string;
  year: string;
  tags: string[];
  image: string;
  description: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FinFlow",
    year: "2024",
    tags: ["Web Development", "AI/ML"],
    image: "/projects/finflow.jpg",
    description:
      "A comprehensive fintech dashboard providing real-time analytics and AI-powered financial insights.",
    slug: "finflow",
  },
  {
    id: 2,
    title: "HealthSync",
    year: "2024",
    tags: ["Mobile Apps", "Cloud Solutions"],
    image: "/projects/healthsync.jpg",
    description:
      "Healthcare mobile application enabling seamless patient-provider communication and health tracking.",
    slug: "healthsync",
  },
  {
    id: 3,
    title: "RetailHub",
    year: "2024",
    tags: ["Web Development", "E-commerce"],
    image: "/projects/retailhub.jpg",
    description:
      "Modern e-commerce platform with advanced inventory management and personalized shopping experiences.",
    slug: "retailhub",
  },
  {
    id: 4,
    title: "DataVault",
    year: "2023",
    tags: ["Cloud Solutions", "DevOps"],
    image: "/projects/datavault.jpg",
    description:
      "Enterprise data management solution with robust security and scalable cloud infrastructure.",
    slug: "datavault",
  },
  {
    id: 5,
    title: "SmartHome Pro",
    year: "2023",
    tags: ["Web Development", "AI/ML", "Mobile Apps"],
    image: "/projects/smarthome.jpg",
    description:
      "IoT dashboard for smart home automation with AI-driven energy optimization and mobile control.",
    slug: "smarthome-pro",
  },
];
