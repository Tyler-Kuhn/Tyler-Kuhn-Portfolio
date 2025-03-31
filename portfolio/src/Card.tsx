import { motion } from "framer-motion";

// Define types for props in the Card component
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  repoLink?: string;
  liveLink?: string;
  techStack?: string[]; // Add techStack prop to the interface
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  repoLink,
  liveLink,
  techStack = [], // Default to an empty array if not provided
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 rounded-3xl shadow-lg p-5 text-white max-w-sm mx-auto transition-transform duration-300"
    >
      {/* Project Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-2xl shadow-md border-1"
      />

      {/* Project Info */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-zinc-400 text-sm mt-2">{description}</p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-zinc-700 px-3 py-1 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-700 text-white rounded-lg shadow-md hover:bg-zinc-600 transition"
            >
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
