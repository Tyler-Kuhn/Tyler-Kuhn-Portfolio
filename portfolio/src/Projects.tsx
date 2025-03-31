import Nav from "./Nav";
import Card from "./Card";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Tyler's Developer Portfolio is a sleek and modern web application built with React.js to showcase projects, skills, and experience in front-end development. The site is designed with a minimalist aesthetic, featuring smooth animations, interactive components, and a responsive layout for an optimal user experience across devices.",
    techStack: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    repoLink: "#",
    imageSrc: "/portfolio_project.png",
  },
  {
    title: "Full Stack Todo App",
    description:
      "This full-stack to-do app allows users to manage their tasks with ease and efficiency. Built using React for the front-end, Express and Node.js for the back-end, and PostgreSQL with Prisma as the ORM for the database, this application offers a fast and seamless experience for managing your to-do lists.",
    techStack: [
      "React",
      "Axios",
      "Express",
      "Postgres",
      "Prisma",
      "Node",
      "Tailwind",
    ],
    liveLink: "#",
    repoLink: "#",
    imageSrc: "/task-manager.jpg",
  },
];

export default function Projects() {
  return (
    <div>
      <Nav />
      <div className="mt-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
