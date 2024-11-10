import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col border p-4 mb-4 rounded-lg shadow-sm">
      {project.link ? (
        <a
          href={project.link}
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-800 hover:underline font-semibold text-xl mb-2"
        >
          {project.title}
        </a>
      ) : (
        <h2 className="font-semibold text-xl mb-2">{project.title}</h2>
      )}

      <p className="text-gray-700">
        <span className="font-medium">Type:</span> {project.type}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Status:</span> {project.status}
      </p>

      {project.students && project.students.length > 0 && (
        <div className="mt-2">
          <p className="text-gray-700">
            <span className="font-medium">Students:</span>{" "}
            {project.students.join(", ")}
          </p>
        </div>
      )}

      <div className="flex justify-center mt-2">
        <p className="text-gray-600 text-justify">{project.description}</p>
      </div>

      {project.applyBy && (
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Apply By:</span> {project.applyBy}
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
