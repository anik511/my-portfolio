import { Code, Database, Settings, Globe, Sparkles, Star } from 'lucide-react';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript"],
      color: "from-yellow-400/30 to-orange-500/30",
      hoverColor: "from-yellow-400/50 to-orange-500/50",
      iconColor: "text-yellow-400"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "Vue", "Next.js", "Nuxt.js"],
      color: "from-blue-400/30 to-cyan-500/30",
      hoverColor: "from-blue-400/50 to-cyan-500/50",
      iconColor: "text-blue-400"
    },
    {
      title: "Database Systems",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL"],
      color: "from-green-400/30 to-emerald-500/30",
      hoverColor: "from-green-400/50 to-emerald-500/50",
      iconColor: "text-green-400"
    },
    {
      title: "Development Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git", "JIRA", "Postman"],
      color: "from-purple-400/30 to-pink-500/30",
      hoverColor: "from-purple-400/50 to-pink-500/50",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <div id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-10 shadow-2xl shadow-black/50 hover:shadow-3xl transition-all duration-500">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-gray-400 text-lg">Expertise in modern web technologies and development tools</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.05] hover:shadow-xl hover:shadow-black/30 transform hover:-translate-y-2`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} group-hover:bg-gradient-to-r group-hover:${category.hoverColor} rounded-xl border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <div className={`${category.iconColor} transition-all duration-500 group-hover:drop-shadow-lg`}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 hover:border-white/30 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;