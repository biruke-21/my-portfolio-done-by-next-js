export type Service = {
  id: number;
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Full Stack Development",
    description:
      "Complete web applications built from frontend to backend, including APIs, authentication, databases and deployment.",
    technologies: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    number: "02",
    title: "Frontend Development",
    description:
      "Responsive and accessible interfaces focused on clean design, smooth interactions and great user experiences.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    number: "03",
    title: "Backend & APIs",
    description:
      "Reliable backend services and REST APIs designed to connect applications, handle business logic and manage data.",
    technologies: ["Node.js", "REST API", "TypeScript"],
  },
  {
    id: 4,
    number: "04",
    title: "Database Development",
    description:
      "Well-structured databases with reliable data models, relationships and efficient queries for modern applications.",
    technologies: ["PostgreSQL", "Prisma", "SQL"],
  },
];