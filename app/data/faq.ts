export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer:
      "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, GCP, Azure, React Native, Flutter, and various AI/ML frameworks. Our team stays current with industry trends to deliver cutting-edge solutions.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex web applications or mobile apps typically range from 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    id: 3,
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. We believe in building long-term partnerships with our clients.",
  },
  {
    id: 4,
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with iterative development cycles. This includes discovery and planning, design, development, testing, and deployment phases. Regular check-ins and demos ensure alignment throughout the project.",
  },
  {
    id: 5,
    question: "How do you handle project communication?",
    answer:
      "We use tools like Slack, Jira, and regular video calls to maintain clear communication. You'll have a dedicated project manager as your main point of contact, with weekly progress updates and access to our project management dashboard.",
  },
  {
    id: 6,
    question: "What industries do you work with?",
    answer:
      "We serve clients across various industries including fintech, healthcare, e-commerce, SaaS, education, and enterprise. Our diverse experience allows us to bring best practices and innovative solutions to any sector.",
  },
  {
    id: 7,
    question: "Do you work with startups?",
    answer:
      "Absolutely! We love working with startups and understand the unique challenges of building an MVP and scaling quickly. We offer flexible engagement models suited to startup budgets and timelines.",
  },
  {
    id: 8,
    question: "How do I get started?",
    answer:
      "Simply reach out through our contact form or schedule a call. We'll discuss your project requirements, provide initial recommendations, and if there's a good fit, we'll prepare a detailed proposal with scope, timeline, and pricing.",
  },
];
