export type ProjectCategory = 'web-design' | 'motion-design' | 'immersive';

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
  galleryImages?: string[]; // 4 gallery images
  challengeImages?: string[]; // 2 challenge images
  relatedProjects: string[]; // slugs
}

export const categories: { id: ProjectCategory; labelKey: string }[] = [
  { id: 'web-design', labelKey: 'webDesign' },
  { id: 'motion-design', labelKey: 'motionDesign' },
  { id: 'immersive', labelKey: 'immersive' },
];

export const projects: Project[] = [
  {
    id: '6',
    slug: 'bambu-coliving',
    category: 'web-design',
    title: 'Bambu Coliving',
    year: '2025',
    industry: 'Coliving / Espacios Compartidos',
    location: 'Bogota, Colombia',
    duration: 8,
    services: ['Web Development', 'UX/UI Design', 'Content Strategy'],
    gradient: 'linear-gradient(135deg, #4ade80 0%, #166534 50%, #a3e635 100%)',
    image: '/imagenes/portfolio-bambu-coliving.png',
    heroImage: '/imagenes/project-hero-bambu-coliving.png',
    description:
      'Bambu Coliving es una propuesta de espacio residencial y profesional en Bogota que combina confort, comunidad y estilo de vida para nomadas digitales, emprendedores y profesionales jovenes.',
    aboutDescription:
      'Desarrollamos la presencia web de Bambu Coliving, combinando identidad visual, claridad informativa y enfoque en experiencia comunitaria, estructurada para convertir visitantes en miembros.',
    problem:
      'Representar una experiencia de vida unica que va mas alla de lofts clasicos. Comunicar la propuesta de comunidad activa y espacios compartidos de forma clara y atractiva, integrando informacion de espacios, servicios y experiencias para conversion y engagement.',
    solution:
      'Creamos un sitio web que resalta habitaciones privadas con servicios completos, espacios comunes de coworking y ocio, experiencias sociales y culturales, testimonios reales y llamados a la accion orientados a reserva y contacto. Narrativa centrada en comunidad con claridad funcional.',
    keyTakeaways:
      'El sitio web de Bambu Coliving funciona como herramienta estrategica de atraccion y conversion, reflejando con precision la propuesta de valor: un lugar para vivir con confort, trabajar con proposito y conectar con personas afines.',
    summaryDescription:
      'Descubre como disenamos la presencia web de Bambu Coliving, conectando nomadas digitales con un espacio de comunidad, coworking y vida en Bogota.',
    clientName: 'Bambu Coliving',
    clientRole: 'Founder',
    clientLinkedIn: 'https://linkedin.com/in/example',
    galleryImages: [
      '/imagenes/gallery-bambu-1.png',
      '/imagenes/gallery-bambu-2.png',
      '/imagenes/gallery-bambu-3.png',
      '/imagenes/gallery-bambu-4.png',
    ],
    challengeImages: [
      '/imagenes/challenge-bambu-1.png',
      '/imagenes/challenge-bambu-2.png',
    ],
    relatedProjects: ['topra', 'fz-academia'],
  },
  {
    id: '7',
    slug: 'topra',
    category: 'web-design',
    title: 'ToPra',
    year: '2025',
    industry: 'Productividad',
    location: 'Remote',
    duration: 6,
    services: ['Web Development', 'AI Integration', 'UX/UI Design'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #0d9488 100%)',
    image: '/imagenes/portfolio-topra.png',
    heroImage: '/imagenes/project-hero-topra.png',
    description:
      'ToPra es una aplicación de productividad inteligente que combina gestión de tareas con un coach de IA integrado. Diseñada para profesionales que buscan optimizar su flujo de trabajo diario con asistencia personalizada.',
    aboutDescription:
      'Desarrollamos ToPra desde cero como una plataforma web de productividad que integra inteligencia artificial para ofrecer coaching personalizado, ayudando a los usuarios a priorizar tareas y mantener el enfoque.',
    problem:
      'Los profesionales remotos enfrentan sobrecarga de tareas y falta de estructura. Las herramientas existentes son complejas o genéricas, sin adaptarse al contexto individual del usuario ni ofrecer orientación proactiva.',
    solution:
      'Construimos una aplicación minimalista con un motor de IA que analiza patrones de trabajo, sugiere prioridades y ofrece micro-coaching contextual. La interfaz prioriza la claridad y la acción inmediata sobre la configuración.',
    keyTakeaways:
      'ToPra logró que sus usuarios completaran un 40% más de tareas prioritarias en la primera semana de uso, con una retención del 78% al tercer mes.',
    summaryDescription:
      'Descubre cómo diseñamos y desarrollamos ToPra, una app de productividad con IA que transforma la gestión de tareas en un proceso inteligente y personalizado.',
    clientName: 'Daniel Herrera',
    clientRole: 'Founder & Product Lead',
    clientLinkedIn: 'https://linkedin.com/in/example',
    galleryImages: [
      '/imagenes/gallery-topra-1.png',
      '/imagenes/gallery-topra-2.png',
      '/imagenes/gallery-topra-3.png',
      '/imagenes/gallery-topra-4.png',
    ],
    challengeImages: [
      '/imagenes/challenge-topra-1.png',
      '/imagenes/challenge-topra-2.png',
    ],
    relatedProjects: ['fz-academia', 'bambu-coliving'],
  },
  {
    id: '8',
    slug: 'fz-academia',
    category: 'web-design',
    title: 'FZ Academia',
    year: '2025',
    industry: 'Educación Digital',
    location: 'International',
    duration: 10,
    services: ['Web Development', 'E-learning Platform', 'UX/UI Design'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
    image: '/imagenes/portfolio-fz-academia.png',
    heroImage: '/imagenes/project-hero-fz-academia.png',
    description:
      'FZ Academia es una plataforma de educación musical online que conecta estudiantes con instructores profesionales a través de cursos interactivos, clases en vivo y un sistema de progreso personalizado.',
    aboutDescription:
      'Creamos la plataforma completa de FZ Academia, desde la arquitectura técnica hasta la experiencia de usuario, diseñando un ecosistema de aprendizaje musical que funciona para estudiantes de todos los niveles.',
    problem:
      'La educación musical online carecía de plataformas que combinaran contenido de calidad con interactividad real. Los estudiantes abandonaban cursos por falta de seguimiento personalizado y conexión con instructores.',
    solution:
      'Desarrollamos una plataforma e-learning con video lessons de alta calidad, sistema de práctica interactivo, seguimiento de progreso con IA y un marketplace de instructores verificados. El diseño prioriza la experiencia inmersiva de aprendizaje.',
    keyTakeaways:
      'FZ Academia alcanzó 2,000 estudiantes activos en los primeros 3 meses, con una tasa de completación de cursos del 65%, muy por encima del promedio de la industria e-learning del 15%.',
    summaryDescription:
      'Explora cómo construimos FZ Academia, una plataforma de educación musical que revoluciona el aprendizaje online con tecnología interactiva y experiencias personalizadas.',
    clientName: 'Francisco Zambrano',
    clientRole: 'Director & Founder',
    clientLinkedIn: 'https://linkedin.com/in/example',
    galleryImages: [
      '/imagenes/gallery-fz-academia-1.png',
      '/imagenes/gallery-fz-academia-2.png',
      '/imagenes/gallery-fz-academia-3.png',
      '/imagenes/gallery-fz-academia-4.png',
    ],
    challengeImages: [
      '/imagenes/challenge-fz-academia-1.png',
      '/imagenes/challenge-fz-academia-2.png',
    ],
    relatedProjects: ['topra', 'vr-experience'],
  },
  {
    id: '9',
    slug: 'vr-experience',
    category: 'immersive',
    title: 'VR Experience',
    year: '2025',
    industry: 'Inmersión 360°',
    location: 'Field',
    duration: 8,
    services: ['VR Development', '360° Optimization', 'Remote Control'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
    image: '/imagenes/portfolio-vr-experience.png',
    heroImage: '/imagenes/project-hero-vr-experience.png',
    description:
      'VR Experience es una solución inmersiva 360° diseñada para operar completamente offline en entornos de campo. Permite a los usuarios explorar escenas panorámicas de alta resolución con navegación intuitiva y control remoto desde un segundo dispositivo.',
    aboutDescription:
      'Desarrollamos una experiencia VR 360° offline con control remoto, optimizada para funcionar sin conexión a internet en entornos de campo, ferias y eventos donde la conectividad es limitada o inexistente.',
    problem:
      'El cliente necesitaba una herramienta de demostración inmersiva para presentar proyectos en ubicaciones remotas sin acceso a internet. Las soluciones existentes dependían de streaming o conexión constante, haciendo imposible su uso en campo.',
    solution:
      'Construimos una aplicación VR completamente offline que carga escenas 360° de alta resolución desde almacenamiento local. Implementamos un sistema de control remoto vía red local que permite a un presentador guiar la experiencia desde un tablet o smartphone, sincronizando navegación y puntos de interés en tiempo real.',
    keyTakeaways:
      'La solución permite presentaciones inmersivas en cualquier entorno sin dependencia de internet. El sistema de control remoto reduce la fricción del usuario final y permite demostraciones guiadas profesionales.',
    summaryDescription:
      'Descubre cómo desarrollamos una experiencia VR 360° offline con control remoto, llevando la inmersión a entornos sin conectividad con rendimiento y control profesional.',
    clientName: 'Ricardo Méndez',
    clientRole: 'Director de Innovación',
    clientLinkedIn: 'https://linkedin.com/in/example',
    galleryImages: [
      '/imagenes/gallery-vr-experience-1.png',
      '/imagenes/gallery-vr-experience-2.png',
      '/imagenes/gallery-vr-experience-3.png',
      '/imagenes/gallery-vr-experience-4.png',
    ],
    challengeImages: [
      '/imagenes/challenge-vr-experience-1.png',
      '/imagenes/challenge-vr-experience-2.png',
    ],
    relatedProjects: ['bambu-coliving', 'fz-academia'],
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
