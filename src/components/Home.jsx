import React, { useState, useEffect } from "react";
import snap from "../assets/snap.jpg";
import { FaWhatsapp, FaPhone, FaEnvelope, FaCheckCircle, FaRocket, FaUsers, FaLaptopCode } from "react-icons/fa";

const Home = () => {
  const whatsappNumber = "+250782575191";
  const whatsappMessage = "Hello David! I saw your portfolio and would like to discuss a project.";
  
  const [showContactPanel, setShowContactPanel] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Core skills with levels
  const coreSkills = [
    { skill: "Business Analysis", level: 90, color: "bg-blue-600" },
    { skill: "Web Development", level: 95, color: "bg-blue-600" },
    { skill: "System Design", level: 85, color: "bg-blue-500" },
    { skill: "Project Management", level: 75, color: "bg-blue-400" },
    { skill: "Database Design", level: 85, color: "bg-blue-500" },
    { skill: "IT Solutions", level: 90, color: "bg-blue-600" },
  ];

  // Technical skills
  const technicalSkills = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Node.js",
    "MongoDB", "SQL", "REST APIs", "Git/GitHub", "Figma",
    "Data Analysis", "Cloud Computing", "UI/UX Design", "Tailwind CSS"
  ];

  // Services offered
  const services = [
    {
      icon: <FaLaptopCode className="text-3xl text-blue-600" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with latest technologies."
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "Business Consulting",
      description: "Strategic IT solutions aligned with your business goals and objectives."
    },
    {
      icon: <FaRocket className="text-3xl text-blue-600" />,
      title: "Digital Growth",
      description: "Scale your business with custom digital solutions and automation."
    }
  ];

  // Stats
  const stats = [
    { label: "Projects Completed", value: "25+", icon: "🚀" },
    { label: "Years Experience", value: "3+", icon: "⭐" },
    { label: "Happy Clients", value: "15+", icon: "😊" },
    { label: "Success Rate", value: "98%", icon: "📈" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Fixed WhatsApp Button */}
      <div className="fixed right-6 bottom-6 z-50">
        {showContactPanel && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 mb-2 animate-slideUp">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Let's Connect</h3>
              <button 
                onClick={() => setShowContactPanel(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl transition"
              >
                ×
              </button>
            </div>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 mb-4 shadow-md"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Chat
            </a>

            <div className="space-y-3">
              <a 
                href="tel:+250782575191" 
                className="flex items-center gap-3 p-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Call Me</p>
                  <p className="text-xs text-gray-500">+250 782 575 191</p>
                </div>
              </a>
              
              <a 
                href="mailto:davidluxxnm@gmail.com" 
                className="flex items-center gap-3 p-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Send Email</p>
                  <p className="text-xs text-gray-500">davidluxxnm@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Usually responds within 30 minutes
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowContactPanel(!showContactPanel)}
          className={`w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isScrolled ? 'scale-110 shadow-xl' : 'scale-100'
          }`}
        >
          {showContactPanel ? (
            <span className="text-2xl font-light">×</span>
          ) : (
            <FaWhatsapp className="text-2xl" />
          )}
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        
        {/* PROFILE SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-8 md:py-16">
          
          {/* Profile Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={snap}
                  alt="David Luxx Nizeyimana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
          </div>

          {/* Profile Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-700 font-medium text-sm">Available for Work</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              David Luxx <span className="text-blue-600">Nizeyimana</span>
            </h1>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">💼 Business IT Professional</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">⚡ Full-Stack Developer</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">🎯 IT Consultant</span>
            </div>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I build web applications that help businesses grow by aligning technical solutions with real business needs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              With experience in both business and IT, I design systems that are reliable, scalable, and focused on measurable results.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button 
                onClick={() => setShowContactPanel(true)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-md hover:shadow-lg"
              >
                Let's Talk 💬
              </button>
              <a 
                href="#services"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition"
              >
                My Services →
              </a>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <section id="services" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What I Do</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Providing end-to-end IT solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CORE SKILLS SECTION */}
        <section className="py-16 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Core Competencies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Key areas where I excel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreSkills.map(({ skill, level, color }, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>
                  <span className="text-sm font-medium text-blue-600">{level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full ${color} transition-all duration-1000`}
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section className="py-16 border-t border-gray-100 bg-gray-50 -mx-4 sm:mx-0 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Technical Stack</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4">Technologies I work with daily</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {technicalSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map(({ label, value, icon }, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-3xl font-bold text-blue-600">{value}</div>
                <div className="text-sm text-gray-600 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern, scalable solutions.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <FaCheckCircle className="text-green-300" />
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <FaCheckCircle className="text-green-300" />
                <span>Quick response guaranteed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <FaCheckCircle className="text-green-300" />
                <span>Free consultation</span>
              </div>
            </div>

            <button 
              onClick={() => setShowContactPanel(true)}
              className="mt-8 px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-lg transition transform hover:scale-105"
            >
              Start a Conversation →
            </button>
          </div>
        </section>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Home;