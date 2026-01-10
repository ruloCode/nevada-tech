export type ProjectCategory = 'web-design' | 'branding' | 'ux-ui' | 'motion-design';

export interface Project {
  id: string;
  slug: string;
  category: ProjectCategory;
  title: string;
  year: string;
  industry: string;
  location: string;
  duration: number; // in weeks
  services: string[];
  gradient: string; // CSS gradient for placeholder
  image: string; // Portfolio card image
  heroImage: string; // Project detail hero image
  description: string;
  aboutDescription: string;
  problem: string;
  solution: string;
  keyTakeaways: string;
  summaryDescription: string;
  clientName: string;
  clientRole: string;
  clientLinkedIn?: string;
  relatedProjects: string[]; // slugs
}

export const categories: { id: ProjectCategory; labelKey: string }[] = [
  { id: 'web-design', labelKey: 'webDesign' },
  { id: 'branding', labelKey: 'branding' },
  { id: 'ux-ui', labelKey: 'uxui' },
  { id: 'motion-design', labelKey: 'motionDesign' },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'techvision',
    category: 'web-design',
    title: 'TechVision',
    year: '2025',
    industry: 'Fintech',
    location: 'US',
    duration: 8,
    services: ['Web Design', 'Development'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/imagenes/portfolio-techvision.png',
    heroImage: '/imagenes/project-hero-techvision.png',
    description: 'TechVision es una plataforma fintech innovadora que revoluciona la forma en que las empresas gestionan sus finanzas. Con un enfoque en la simplicidad y la seguridad, necesitaban un sitio web que reflejara su visión moderna.',
    aboutDescription: 'Colaboramos con TechVision para diseñar una experiencia web clara y escalable, transformando una plataforma fintech compleja en una interfaz intuitiva y de alta confianza para usuarios globales.',
    problem: 'TechVision tenía un producto sólido pero su presencia digital no comunicaba la sofisticación de su tecnología. Los usuarios potenciales encontraban difícil entender la propuesta de valor en los primeros segundos de interacción.',
    solution: 'Diseñamos un sistema web enfocado en conversión, construido sobre la simplicidad y el flujo. La estructura destila el valor de TechVision, resalta la credibilidad y guía a los usuarios suavemente a través de la experiencia.',
    keyTakeaways: 'TechVision ahora comunica claramente como una plataforma fintech de confianza, guiando a nuevos usuarios con confianza a través de sus primeros pasos financieros.',
    summaryDescription: 'Explora cómo desarrollamos el diseño web para TechVision, creando una identidad moderna y cohesiva que comunica confianza, claridad y un enfoque global orientado a dispositivos móviles.',
    clientName: 'Carlos Martinez',
    clientRole: 'CEO & Founder',
    clientLinkedIn: 'https://linkedin.com/in/example',
    relatedProjects: ['velocity', 'cryptoflow'],
  },
  {
    id: '2',
    slug: 'quantum-labs',
    category: 'branding',
    title: 'Quantum Labs',
    year: '2025',
    industry: 'AI & Technology',
    location: 'UK',
    duration: 6,
    services: ['Branding', 'Identity Design'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    image: '/imagenes/portfolio-quantum-labs.png',
    heroImage: '/imagenes/project-hero-quantum-labs.png',
    description: 'Quantum Labs es una startup de inteligencia artificial que desarrolla soluciones de machine learning de vanguardia. Necesitaban una identidad de marca que reflejara su innovación y visión futurista.',
    aboutDescription: 'Trabajamos con Quantum Labs para crear una identidad de marca completa que posiciona a la empresa como líder en el espacio de IA, con un lenguaje visual que comunica innovación y confiabilidad.',
    problem: 'Como startup emergente en un mercado competitivo, Quantum Labs carecía de una identidad distintiva que los diferenciara de otras empresas de IA y comunicara su enfoque único en soluciones éticas.',
    solution: 'Desarrollamos un sistema de marca completo incluyendo logo, paleta de colores, tipografía y guidelines. El diseño equilibra elementos tecnológicos con un toque humano para destacar su compromiso con la IA ética.',
    keyTakeaways: 'Quantum Labs ahora tiene una identidad de marca distintiva que resuena con inversores, clientes y talento, posicionándolos como innovadores en el espacio de IA.',
    summaryDescription: 'Descubre cómo creamos la identidad de marca para Quantum Labs, estableciendo un lenguaje visual que equilibra innovación tecnológica con accesibilidad humana.',
    clientName: 'Sarah Chen',
    clientRole: 'Co-founder & CTO',
    clientLinkedIn: 'https://linkedin.com/in/example',
    relatedProjects: ['artisan', 'techvision'],
  },
  {
    id: '3',
    slug: 'medconnect',
    category: 'ux-ui',
    title: 'MedConnect',
    year: '2024',
    industry: 'Healthcare',
    location: 'US',
    duration: 10,
    services: ['UX/UI', 'User Research'],
    gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    image: '/imagenes/portfolio-medconnect.png',
    heroImage: '/imagenes/project-hero-medconnect.png',
    description: 'MedConnect es una aplicación de salud que conecta pacientes con profesionales médicos. El desafío era crear una experiencia que fuera intuitiva para usuarios de todas las edades y niveles tecnológicos.',
    aboutDescription: 'Colaboramos con MedConnect para rediseñar completamente su experiencia de usuario, enfocándonos en accesibilidad, facilidad de uso y un flujo de usuario optimizado para citas médicas.',
    problem: 'La aplicación existente tenía una tasa de abandono del 60% durante el proceso de reserva de citas. Los usuarios se frustraban con la complejidad del flujo y la falta de feedback visual.',
    solution: 'Realizamos investigación exhaustiva con usuarios, rediseñamos el flujo de reservas reduciendo los pasos de 8 a 3, e implementamos un sistema de diseño accesible siguiendo las pautas WCAG 2.1.',
    keyTakeaways: 'MedConnect redujo su tasa de abandono al 15% y aumentó las reservas completadas en un 200%, mejorando significativamente la satisfacción del usuario.',
    summaryDescription: 'Explora cómo transformamos la experiencia de MedConnect, creando una interfaz accesible y eficiente que pone la salud del paciente en primer lugar.',
    clientName: 'Dr. James Wilson',
    clientRole: 'Head of Product',
    clientLinkedIn: 'https://linkedin.com/in/example',
    relatedProjects: ['techvision', 'velocity'],
  },
  {
    id: '4',
    slug: 'velocity',
    category: 'web-design',
    title: 'Velocity',
    year: '2025',
    industry: 'SaaS',
    location: 'Global',
    duration: 12,
    services: ['Web Design', 'Development', 'Branding'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: '/imagenes/portfolio-velocity.png',
    heroImage: '/imagenes/project-hero-velocity.png',
    description: 'Velocity es una plataforma SaaS de gestión de proyectos diseñada para equipos de alto rendimiento. Necesitaban un sitio web que comunicara velocidad, eficiencia y colaboración.',
    aboutDescription: 'Desarrollamos una presencia web completa para Velocity, desde el diseño hasta el desarrollo, creando una experiencia que refleja los valores core del producto: velocidad y eficiencia.',
    problem: 'En un mercado saturado de herramientas de gestión de proyectos, Velocity luchaba por diferenciarse. Su sitio anterior no comunicaba efectivamente su propuesta única de valor centrada en la velocidad.',
    solution: 'Creamos un diseño web dinámico con animaciones sutiles que refuerzan el concepto de velocidad. Implementamos casos de uso interactivos y testimonios en video para demostrar el valor real del producto.',
    keyTakeaways: 'Velocity experimentó un aumento del 150% en demos solicitadas y mejoró su tasa de conversión de visitante a trial en un 80%.',
    summaryDescription: 'Descubre cómo diseñamos el sitio web de Velocity, creando una experiencia digital que captura la esencia de velocidad y eficiencia que define al producto.',
    clientName: 'Maria Rodriguez',
    clientRole: 'VP of Marketing',
    clientLinkedIn: 'https://linkedin.com/in/example',
    relatedProjects: ['techvision', 'medconnect'],
  },
  {
    id: '5',
    slug: 'cryptoflow',
    category: 'branding',
    title: 'CryptoFlow',
    year: '2024',
    industry: 'Web3 & Crypto',
    location: 'Singapore',
    duration: 8,
    services: ['Branding', 'Web Design'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    image: '/imagenes/portfolio-cryptoflow.png',
    heroImage: '/imagenes/project-hero-cryptoflow.png',
    description: 'CryptoFlow es un exchange de criptomonedas que prioriza la seguridad y la facilidad de uso. Buscaban una marca que transmitiera confianza en un mercado conocido por su volatilidad.',
    aboutDescription: 'Creamos una identidad de marca completa para CryptoFlow que equilibra la innovación del espacio crypto con la confiabilidad que los usuarios buscan en un exchange financiero.',
    problem: 'El mercado crypto está lleno de marcas que priorizan el hype sobre la sustancia. CryptoFlow necesitaba diferenciarse como una opción confiable y profesional sin perder el atractivo del espacio Web3.',
    solution: 'Desarrollamos una marca que combina elementos visuales modernos del espacio crypto con un tono profesional y accesible. El sistema de diseño incluye elementos de seguridad visual prominentes.',
    keyTakeaways: 'CryptoFlow logró establecerse como un exchange confiable, aumentando su base de usuarios verificados en un 300% en los primeros 6 meses post-rebrand.',
    summaryDescription: 'Explora cómo desarrollamos la marca de CryptoFlow, creando una identidad que comunica seguridad y confianza en el dinámico mundo de las criptomonedas.',
    clientName: 'Alex Wong',
    clientRole: 'Founder',
    clientLinkedIn: 'https://linkedin.com/in/example',
    relatedProjects: ['quantum-labs', 'techvision'],
  },
  {
    id: '6',
    slug: 'artisan',
    category: 'motion-design',
    title: 'Artisan',
    year: '2025',
    industry: 'Creative Agency',
    location: 'Spain',
    duration: 4,
    services: ['Motion Design', 'Branding'],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    image: '/imagenes/portfolio-artisan.png',
    heroImage: '/imagenes/project-hero-artisan.png',
    description: 'Artisan es una agencia creativa boutique que trabaja con marcas de lujo. Necesitaban motion graphics que reflejaran la elegancia y sofisticación de su trabajo.',
    aboutDescription: 'Colaboramos con Artisan para crear un sistema de motion design que eleva su presencia digital, con animaciones elegantes que reflejan la calidad premium de su trabajo.',
    problem: 'Artisan tenía un portfolio impresionante de trabajo estático, pero su presencia digital carecía de la vida y dinamismo que caracteriza a las mejores agencias creativas modernas.',
    solution: 'Diseñamos un sistema de motion completo incluyendo transiciones de página, micro-interacciones, animaciones de scroll y elementos UI animados que dan vida a todo el sitio.',
    keyTakeaways: 'Artisan ahora tiene una presencia digital que iguala la calidad de su trabajo, resultando en un aumento del 200% en solicitudes de propuestas de marcas premium.',
    summaryDescription: 'Descubre cómo creamos el sistema de motion design para Artisan, elevando su presencia digital con animaciones elegantes y sofisticadas.',
    clientName: 'Elena Vega',
    clientRole: 'Creative Director',
    clientLinkedIn: 'https://linkedin.com/in/example',
    relatedProjects: ['quantum-labs', 'velocity'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(project: Project): Project[] {
  return project.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}
