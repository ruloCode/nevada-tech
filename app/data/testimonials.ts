export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Nevada Tech transformed our digital presence completely. Their expertise in web development and attention to detail exceeded all expectations. The team delivered on time and the results speak for themselves.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc",
    avatar: "/avatars/avatar-1.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Nevada Tech on our mobile app was a game-changer. They understood our vision from day one and delivered a product that our users love. Highly recommend their services.",
    author: "Michael Chen",
    role: "Product Director",
    company: "InnovateCo",
    avatar: "/avatars/avatar-2.jpg",
  },
  {
    id: 3,
    quote:
      "The cloud migration project was handled flawlessly. Nevada Tech's DevOps expertise saved us significant time and resources. Their team is responsive, professional, and truly understands enterprise needs.",
    author: "Emily Rodriguez",
    role: "CTO",
    company: "DataStream Solutions",
    avatar: "/avatars/avatar-3.jpg",
  },
  {
    id: 4,
    quote:
      "Our e-commerce platform conversion rates increased by 40% after the redesign. Nevada Tech's UI/UX team created an experience that converts. Best investment we've made this year.",
    author: "James Wilson",
    role: "Founder",
    company: "ShopSmart",
    avatar: "/avatars/avatar-4.jpg",
  },
  {
    id: 5,
    quote:
      "The AI integration Nevada Tech built for us has automated 60% of our manual processes. Their technical expertise combined with business understanding is rare. Exceptional partner.",
    author: "Lisa Thompson",
    role: "Operations Manager",
    company: "AutomateNow",
    avatar: "/avatars/avatar-5.jpg",
  },
];
