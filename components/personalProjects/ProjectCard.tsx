import { ExternalLink, Github, Code, Zap } from "lucide-react";
import { useState } from "react";
type Project = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    fallbackGradient: string;
    technologies: string[];
    features: string[];
    github: string;
    demo: string;
    status: string;
    progress: number;
    category: string;
};

type ProjectCardProps = {
    project: Project;
    index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
      case "In Development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/40";
      case "Beta":
        return "bg-amber-500/20 text-amber-400 border-amber-500/40";
      case "Planning":
        return "bg-purple-500/20 text-purple-400 border-purple-500/40";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/40";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-emerald-500";
    if (progress >= 75) return "bg-blue-500";
    if (progress >= 50) return "bg-amber-500";
    return "bg-purple-500";
  };
  return (
    <article
      key={project.id}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${
        activeProject === project.id
          ? "ring-2 ring-purple-500/50 scale-[1.02]"
          : ""
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Thumbnail Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} opacity-80`}
          style={{
            backgroundImage: `url(${project.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
            {project.category}
          </span>
        </div>

        {/* Status & Progress */}
        <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </span>
          <div className="w-20 h-1.5 bg-black/40 rounded-full backdrop-blur-md overflow-hidden">
            <div
              className={`h-full ${getProgressColor(
                project.progress
              )} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={project.github}
            target="_blank"
            className="p-2.5 bg-black/60 backdrop-blur-md rounded-xl hover:bg-black/80 transition-all duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
            title="View Source Code"
          >
            <Github className="w-4 h-4 text-white" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="p-2.5 bg-blue-600/80 backdrop-blur-md rounded-xl hover:bg-blue-500 transition-all duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="p-6 cursor-pointer"
        onClick={() =>
          setActiveProject(activeProject === project.id ? null : project.id)
        }
      >
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
          {project.description}
        </p>

        {/* Expandable Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            activeProject === project.id
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {/* Features */}
          <div className="mb-4 pt-4 border-t border-white/10">
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-amber-400">
              <Zap className="w-4 h-4" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xs text-gray-300 bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20"
                >
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies - Always Visible */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-purple-400">
            <Code className="w-4 h-4" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 rounded-lg border border-purple-500/30 hover:border-purple-400/50 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span>Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className={`h-full ${getProgressColor(
                project.progress
              )} rounded-full transition-all duration-1000 ease-out transform origin-left`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </article>
  );
};

export default ProjectCard;
