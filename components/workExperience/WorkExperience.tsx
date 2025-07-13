
import {
  Calendar,
  MapPin,
  Code,
  Database,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import OfficeProjectCard from "./OfficeProjectCard";

const WorkExperience = () => {
  
  const workExperience = [
    {
      id: 1,
      company: "Swosti Limited",
      position: "Software Engineer (Frontend)",
      duration: "November 2021 - Present",
      location: "Dhaka, Bangladesh",
      description:
        "Leading frontend development for fintech solutions in microfinance and cooperative banking, delivering secure and scalable financial products.",
      keyPoints: [
        "Led frontend architecture for core financial products serving thousands of microfinance clients",
        "Collaborated with cross-functional teams to implement real-time dashboards and payment integrations",
        "Optimized performance for large-scale financial data processing and multi-branch operations",
      ],
      projects: [
        {
          name: "Swosti-mfi247",
          description: "Microfinance Software",
          features: [
            "Customer onboarding interfaces",
            "Loan management system",
            "Real-time data dashboards",
          ],
          keyContributions: [
            "Developed comprehensive customer onboarding workflow with document verification and KYC integration",
            "Built real-time loan tracking dashboard with automated repayment calculations and alerts",
            "Implemented microservices integration for seamless data flow between loan and customer modules",
          ],
          technologies: ["React", "TypeScript", "Redux", "MySQL", "REST API"],
        },
        {
          name: "Swosti-CoopBank247",
          description: "Cooperative Banking System",
          features: [
            "Member account management",
            "Multi-language support",
            "Multi-branch consistency",
          ],
          keyContributions: [
            "Architected multi-language UI system supporting Bengali and English with dynamic content switching",
            "Developed member deposit and lending interfaces with real-time balance updates and transaction history",
            "Created centralized component library ensuring consistent UI/UX across multiple branches",
          ],
          technologies: ["Vue.js", "Vuex", "i18n", "PostgreSQL", "Firebase"],
        },
        {
          name: "Swosti-Migration",
          description: "Data Migration Tool",
          features: [
            "Legacy data import UI",
            "Excel dataset handling",
            "Custom validation tables",
          ],
          keyContributions: [
            "Built robust Excel data processing system handling 100K+ records with custom validation rules",
            "Developed interactive data transformation interface with real-time preview and error highlighting",
            "Implemented batch processing UI with progress tracking and rollback capabilities for failed migrations",
          ],
          technologies: [
            "React",
            "SheetJS",
            "Java (Spring Boot)",
            "PostgreSQL",
          ],
        },
        {
          name: "Swosti-Billing",
          description: "Billing Software",
          features: [
            "Reconciliation reports",
            "Reusable components",
          ],
          keyContributions: [
            "Created automated reconciliation system with discrepancy detection and resolution workflows",
            "Built reusable financial components library reducing development time by 40% across projects",
          ],
          technologies: [
            "React",
            "Material-UI",
            "MySQL",
            "PDF.js",
          ],
        },
      ],
      technologies: [
        "React",
        "Vue",
        "Java (Spring Boot)",
        "MySQL",
        "PostgreSQL",
        "Firebase"
      ],
      gradient: "from-blue-500/20 to-purple-600/20",
    },
    {
      id: 2,
      company: "MarnIT",
      position: "Frontend Developer",
      duration: "May 2021 - October 2021",
      location: "Dhaka, Bangladesh",
      description:
        "Developed responsive e-commerce and internal systems, contributing to maintainable frontends and seamless API integrations in an Agile environment.",
      keyPoints: [
        "Built customer-facing e-commerce platform with advanced search and checkout functionality",
        "Developed real-time inventory management system for efficient stock tracking",
        "Implemented role-based access control for student portal with secure authentication",
      ],
      projects: [
        {
          name: "MarnBazar",
          description: "E-commerce Platform",
          features: [
            "Product listing & search",
            "Cart management",
            "Checkout system",
          ],
          keyContributions: [
            "Built advanced product search with filters, sorting, and real-time suggestions",
            "Developed responsive shopping cart with persistent state and dynamic pricing calculations",
            "Implemented secure checkout flow with multiple payment methods and order tracking system",
          ],
          technologies: [
            "Vue.js",
            "Nuxt.js",
            "Vuex",
            "Laravel",
            "MySQL"
            
          ],
        },
        {
          name: "Inventory Management",
          description: "Stock Management System",
          features: [
            "Stock tracking",
            "Supplier management",
            "Reporting dashboard",
          ],
          keyContributions: [
            "Created real-time inventory tracking with low-stock alerts and automated reorder suggestions",
            "Built supplier management interface with performance analytics and purchase order automation",
            "Developed comprehensive reporting dashboard with inventory turnover and profitability metrics",
          ],
          technologies: ["Vue.js", "Chart.js", "Laravel", "MySQL"],
        },
        {
          name: "Student Portal",
          description: "Educational Platform",
          features: [
            "User authentication",
            "Role-based access",
            "Student dashboard",
          ],
          keyContributions: [
            "Implemented JWT-based authentication system with role-based permissions (Student/Admin/Teacher)",
            "Created interactive student dashboard with course progress tracking and assignment submissions",
            "Built responsive grade management system with real-time updates and parent notification features",
          ],
          technologies: ["Vue.js", "JWT", "Laravel", "MySQL", "Pusher"],
        },
      ],
      technologies: ["Vue.js", "Nuxt.js", "Chart.js", "Pusher", "MySQL"],
      gradient: "from-emerald-500/20 to-teal-600/20",
    },
  ];


  return (
    <div
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building innovative fintech solutions and e-commerce platforms
              with modern technologies
            </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job) => (
              <div
                key={job.id}
                className={`relative backdrop-blur-xl bg-gradient-to-br ${job.gradient} rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300 group`}
              >
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      {job.company}
                    </h3>
                    <p className="text-lg text-blue-300 font-medium">
                      {job.position}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 lg:mt-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">
                      {job.id === 1 ? "Current" : "Completed"}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {job.description}
                </p>

                {/* Key Points */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    Key Projects
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {job.projects.map((project, index) => (
                      <OfficeProjectCard key={index} name={project.name} description={project.description} features={project.features} technologies={project.technologies} keyContributions={project.keyContributions} />
                      
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-400" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkExperience;
