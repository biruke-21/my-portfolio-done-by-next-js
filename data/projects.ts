export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  
  {
    id: 1,
    title: "online-bus-ticketing",
    description:
      "An online bus ticketing system is a digital platform that helps passengers book bus tickets easily through the internet..",
    image: "/images/projects/busGo.jpg",
    category: "Bus Ticketing",
    technologies: ["React", "TypeScript", "next.js"],
    githubUrl: "https://github.com/biruke-21",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "CarRental managemnet system",
    description:
      " A Car Rental Management System is a software application designed to help car rental companies and customers manage the process of renting vehicles efficiently..",
    image: "/images/projects/CarRental.jpg",
    category: "Car Rental",
    technologies: ["react.js","next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/biruke-21",
    liveUrl: "#",
    featured: true,
  },
  
];