import React, { useState } from "react";
import { 
  FaCode, 
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaArrowRight,
  FaGlobeAfrica,
  FaRocket,
  FaMobile,
  FaShoppingCart,
  FaDatabase,
  FaCloud,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Project() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-featured online store with payment integration and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <FaShoppingCart />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Business Management System",
      category: "web",
      description: "Comprehensive CRM and business management solution for small to medium businesses.",
      tech: ["React", "Express", "PostgreSQL", "Tailwind"],
      icon: <FaChartLine />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with transaction history and bill payments.",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      icon: <FaMobile />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      description: "Modern portfolio website with blog functionality and CMS integration.",
      tech: ["React", "Tailwind", "Framer Motion"],
      icon: <FaLaptopCode />,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Cloud Storage Solution",
      category: "backend",
      description: "Secure cloud storage platform with file sharing and collaboration features.",
      tech: ["Node.js", "AWS", "MongoDB", "Redis"],
      icon: <FaCloud />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      category: "web",
      description: "Analytics dashboard for tracking social media metrics and engagement.",
      tech: ["React", "D3.js", "Express", "Socket.io"],
      icon: <FaUsers />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <FaCode /> },
    { id: "web", name: "Web Apps", icon: <FaLaptopCode /> },
    { id: "mobile", name: "Mobile Apps", icon: <FaMobile /> },
    { id: "backend", name: "Backend", icon: <FaDatabase /> },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const stats = [
    { value: "25+", label: "Projects Completed", icon: <FaCode /> },
    { value: "15+", label: "Happy Clients", icon: <FaUsers /> },
    { value: "98%", label: "Success Rate", icon: <FaChartLine /> },
    { value: "4+", label: "Years Experience", icon: <FaRocket /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <FaGlobeAfrica />
            MY PORTFOLIO
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my work building modern web applications and digital solutions
            for businesses across various industries.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl text-blue-600 flex justify-center mb-2">{item.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                <div className="text-xs text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                  filter === cat.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {project.tech[0]}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-blue-600 text-xl">{project.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3 border-t border-gray-100">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm font-medium"
                    >
                      GitHub <FaGithub size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Technologies I Use
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Tools and frameworks I work with daily</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Next.js", "Node.js", "Express", "MongoDB", 
              "PostgreSQL", "Tailwind CSS", "TypeScript", "Git", 
              "Docker", "AWS", "Firebase", "GraphQL", "Python"
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-blue-100 mb-6">
            Let's collaborate and bring your ideas to life with modern technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Start a Project <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}