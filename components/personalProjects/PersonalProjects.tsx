"use client";
import { useState } from "react";
import { ExternalLink, Github, Code, Zap } from "lucide-react";

const PersonalProjects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const personalProjects = [
    {
      id: 1,
      title: "CryptoTracker Pro",
      description:
        "Real-time cryptocurrency portfolio tracker with advanced analytics and market insights",
      image: "🚀",
      technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
      features: [
        "Real-time price tracking",
        "Portfolio analytics",
        "Market trend analysis",
      ],
      github: "#",
      demo: "#",
      status: "In Development",
    },
    {
      id: 2,
      title: "TaskFlow Manager",
      description:
        "Collaborative project management tool with real-time updates and team coordination",
      image: "📊",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      features: [
        "Real-time collaboration",
        "Task automation",
        "Team analytics",
      ],
      github: "#",
      demo: "#",
      status: "Completed",
    },
    {
      id: 3,
      title: "AI Code Assistant",
      description:
        "Intelligent code completion and suggestion tool for faster development workflow",
      image: "🤖",
      technologies: ["Vue.js", "Python", "TensorFlow", "Redis"],
      features: [
        "Code autocompletion",
        "Bug detection",
        "Performance optimization",
      ],
      github: "#",
      demo: "#",
      status: "Beta",
    },
    {
      id: 4,
      title: "EcoTrack",
      description:
        "Environmental impact tracker helping users monitor and reduce their carbon footprint",
      image: "🌱",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Chart.js"],
      features: [
        "Carbon footprint tracking",
        "Eco-friendly suggestions",
        "Progress analytics",
      ],
      github: "#",
      demo: "#",
      status: "Planning",
    },
  ];

  const getStatusColor = (status:string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Development":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Beta":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planning":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };
  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Personal Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Innovative side projects showcasing creativity and technical
              expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((project) => (
              <div
                key={project.id}
                className={`relative backdrop-blur-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group cursor-pointer ${
                  activeProject === project.id
                    ? "ring-2 ring-purple-500/50"
                    : ""
                }`}
                onClick={() =>
                  setActiveProject(
                    activeProject === project.id ? null : project.id
                  )
                }
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{project.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-blue-600/50 rounded-lg hover:bg-blue-500/50 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Code className="w-4 h-4 text-purple-400" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-xl"></div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalProjects;
