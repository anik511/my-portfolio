import ProjectCard from "./ProjectCard";

const PersonalProjects = () => {
  const personalProjects = [
    {
      id: 1,
      title: "Restaurant Easy",
      description:
        "A modern, easy-to-use restaurant management system built with Next.js and TypeScript. Simplifies restaurant operations including order management, employee tracking, item cataloging, and branch/organization management.",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&auto=format",
      fallbackGradient: "from-orange-400 via-red-500 to-pink-500",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Organization and branch management",
        "Employee management system",
        "Order and menu management",
        "Responsive UI with reusable components"
      ],
      github: "https://github.com/anik511/restaurant-easy",
      demo: "https://restaurant-easy.vercel.app/",
      status: "Completed",
      progress: 100,
      category: "Business",
    },
    {
      id: 2,
      title: "Medication Tracker",
      description:
        "A modern, responsive medication tracking app built with Vue 3, Pinia, and Tailwind CSS. Helps users manage daily medications, track schedules, and maintain healthy habits with a beautiful interface.",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format",
      fallbackGradient: "from-green-400 via-blue-500 to-purple-600",
      technologies: ["Vue 3", "Pinia", "TypeScript", "Tailwind CSS", "Vite"],
      features: [
        "Daily schedule & calendar",
        "Status tracking (taken/missed)",
        "Profile management with streaks",
        "Persistent state with Pinia"
      ],
      github: "https://github.com/anik511/medication-tracker",
      demo: "https://medication-tracker-three.vercel.app/",
      status: "Completed",
      progress: 100,
      category: "Healthcare",
    },
    {
      id: 3,
      title: "Todo App React",
      description:
        "A clean and efficient todo application built with React and Vite. Features a minimal setup with HMR (Hot Module Replacement) and ESLint rules for maintaining code quality and fast development workflow.",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
      fallbackGradient: "from-blue-400 via-cyan-500 to-teal-600",
      technologies: ["React", "Vite", "JavaScript", "ESLint"],
      features: [
        "Fast development with Vite",
        "Hot Module Replacement",
        "ESLint integration",
        "Minimal and clean setup"
      ],
      github: "https://github.com/anik511/todo-app-react",
      demo: "https://todo-app-react-ashy-six.vercel.app/",
      status: "Completed",
      progress: 100,
      category: "Productivity",
    },
    {
      id: 4,
      title: "Cafes with VueFire",
      description:
        "A simple cafe rating website built with Vue 3 and Firebase. Features real-time data synchronization, user authentication, and interactive cafe rating system with beautiful UI components.",
      thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop&auto=format",
      fallbackGradient: "from-amber-400 via-orange-500 to-red-500",
      technologies: ["Vue 3", "Firebase", "VueFire", "Vuetify", "Pinia"],
      features: [
        "Firebase authentication",
        "Real-time Firestore database",
        "Interactive rating system",
        "Responsive design with Vuetify"
      ],
      github: "https://github.com/anik511/cafes-with-vueFire",
      demo: "https://vue-cafe.netlify.app/",
      status: "Completed",
      progress: 100,
      category: "Social",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Innovative side projects showcasing creativity, technical expertise, and problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PersonalProjects;
