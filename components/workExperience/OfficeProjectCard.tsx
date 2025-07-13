import {
  Code,
  Shield,
  Zap,
} from "lucide-react";
type Project = {
  name: string;
  description: string;
  features: string[];
  keyContributions: string[];
  technologies: string[];
};

function OfficeProjectCard({name, description, features, keyContributions, technologies}:Project) {
  return (
    <div
      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-200 group/project hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h5 className="font-medium text-white mb-1 group-hover/project:text-blue-300 transition-colors">
            {name}
          </h5>
          <p className="text-sm text-gray-400 mb-2">{description}</p>
        </div>
        <div className="opacity-0 group-hover/project:opacity-100 transition-opacity">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Key Contributions */}
      <div className="mb-3">
        <h6 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
          <Shield className="w-3 h-3 text-blue-400" />
          Key Contributions
        </h6>
        <ul className="space-y-1">
          {keyContributions.map((contribution, i) => (
            <li
              key={i}
              className="text-xs text-gray-400 flex items-start gap-2"
            >
              <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <span className="leading-relaxed">{contribution}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-3">
        <h6 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
          <Code className="w-3 h-3 text-purple-400" />
          Technologies
        </h6>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h6 className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1">
          <Zap className="w-3 h-3 text-yellow-400" />
          Features
        </h6>
        <div className="flex flex-wrap gap-1">
          {features.map((feature, i) => (
            <span
              key={i}
              className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover/project:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
}

export default OfficeProjectCard;
