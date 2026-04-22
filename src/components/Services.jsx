import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaChartLine, 
  FaTools, 
  FaMobileAlt,
  FaCogs,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";
import { MdBusiness, MdDesignServices, MdAnalytics } from "react-icons/md";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <FaCode />,
      title: "Web Application Development",
      description: "Custom web applications built with modern technologies to solve specific business problems.",
      features: ["Full-stack development", "Responsive design", "Performance optimization", "API integration", "Security best practices"],
      price: "Project-based",
      delivery: "4-8 weeks",
      color: "blue"
    },
    {
      icon: <MdBusiness />,
      title: "Business IT Solutions",
      description: "Technology solutions designed specifically for business needs, focusing on efficiency and growth.",
      features: ["Business process automation", "System integration", "Workflow optimization", "IT consulting", "Digital transformation"],
      price: "Consultation + Project",
      delivery: "Ongoing",
      color: "purple"
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description: "Creating beautiful, user-friendly interfaces with modern frameworks for optimal user experience.",
      features: ["React.js applications", "UI/UX implementation", "Cross-browser compatibility", "Mobile-first design", "Performance tuning"],
      price: "From $500",
      delivery: "2-4 weeks",
      color: "green"
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database design, and efficient data management.",
      features: ["API development", "Database design", "Authentication systems", "Server deployment", "Scalable architecture"],
      price: "From $800",
      delivery: "3-6 weeks",
      color: "orange"
    },
    {
      icon: <MdDesignServices />,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create intuitive digital experiences.",
      features: ["Wireframing", "Prototyping", "User research", "Design systems", "Accessibility standards"],
      price: "From $400",
      delivery: "1-3 weeks",
      color: "pink"
    },
    {
      icon: <FaTools />,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly and securely.",
      features: ["Regular updates", "Security patches", "Bug fixes", "Performance monitoring", "Backup management"],
      price: "Monthly retainer",
      delivery: "Ongoing",
      color: "red"
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Web Design",
      description: "Websites that work perfectly on all devices - desktop, tablet, and mobile for maximum reach.",
      features: ["Mobile optimization", "Touch-friendly interface", "Fast loading", "Cross-device testing", "SEO friendly"],
      price: "From $300",
      delivery: "1-2 weeks",
      color: "teal"
    },
    {
      icon: <MdAnalytics />,
      title: "Business Analytics Dashboards",
      description: "Custom dashboards to visualize business data and help make informed decisions.",
      features: ["Data visualization", "Real-time updates", "Custom reports", "KPIs tracking", "Interactive charts"],
      price: "Project-based",
      delivery: "3-5 weeks",
      color: "indigo"
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understand your business needs and project requirements", icon: <FaRocket /> },
    { step: "02", title: "Planning", description: "Create detailed project plan and technical specifications", icon: <FaCogs /> },
    { step: "03", title: "Development", description: "Build the solution with regular updates and feedback", icon: <FaCode /> },
    { step: "04", title: "Delivery", description: "Deploy, test, and provide ongoing support", icon: <FaShieldAlt /> }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", hover: "hover:border-blue-300", button: "bg-blue-600 hover:bg-blue-700" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", hover: "hover:border-purple-300", button: "bg-purple-600 hover:bg-purple-700" },
      green: { bg: "bg-green-50", text: "text-green-600", hover: "hover:border-green-300", button: "bg-green-600 hover:bg-green-700" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", hover: "hover:border-orange-300", button: "bg-orange-600 hover:bg-orange-700" },
      pink: { bg: "bg-pink-50", text: "text-pink-600", hover: "hover:border-pink-300", button: "bg-pink-600 hover:bg-pink-700" },
      red: { bg: "bg-red-50", text: "text-red-600", hover: "hover:border-red-300", button: "bg-red-600 hover:bg-red-700" },
      teal: { bg: "bg-teal-50", text: "text-teal-600", hover: "hover:border-teal-300", button: "bg-teal-600 hover:bg-teal-700" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hover: "hover:border-indigo-300", button: "bg-indigo-600 hover:bg-indigo-700" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <FaCogs />
            WHAT I OFFER
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Services</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional IT and development services tailored to help businesses 
            grow and succeed in the digital world.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl text-blue-600 mb-1">8+</div>
              <div className="text-sm text-gray-600">Services</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl text-blue-600 mb-1">25+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl text-blue-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl text-blue-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What I Can Do For You
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Comprehensive solutions for every business need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const isHovered = hoveredCard === index;
              
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group bg-white border-2 rounded-2xl p-6 transition-all duration-300 ${colors.hover} ${
                    isHovered ? 'shadow-xl -translate-y-1' : 'shadow-sm border-gray-100'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 ${
                    isHovered ? 'scale-110' : ''
                  }`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-colors ${isHovered ? colors.text : ''}`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <FaCheckCircle className={`text-xs ${colors.text}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-gray-400 mt-1">+ {service.features.length - 4} more</div>
                      )}
                    </div>
                  </div>

                  {/* Pricing & Delivery */}
                  <div className="pt-5 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Starting from</p>
                        <p className={`text-lg font-bold ${colors.text}`}>{service.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 mb-0.5">Delivery</p>
                        <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                          <FaClock size={12} />
                          {service.delivery}
                        </p>
                      </div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className={`w-full py-2.5 ${colors.button} text-white rounded-lg font-medium text-center block transition-all duration-300 ${
                        isHovered ? 'shadow-md' : ''
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              My Working Process
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">A simple, transparent approach to every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative text-center">
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <FaShieldAlt />
                WHY CHOOSE ME
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quality You Can <span className="text-blue-600">Trust</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I deliver high-quality solutions with a focus on client satisfaction, 
                clear communication, and technical excellence.
              </p>
              
              <div className="space-y-4">
                {[
                  "100% Client Satisfaction Guaranteed",
                  "Clear Communication & Regular Updates",
                  "Post-Launch Support & Maintenance",
                  "Competitive Pricing & Flexible Options"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Work With Me <FaArrowRight />
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="text-4xl font-bold mb-2">Let's Talk</div>
              <p className="text-blue-100 mb-4">Free consultation to discuss your project</p>
              <div className="text-2xl font-bold mb-2">+250 782 575 191</div>
              <p className="text-blue-100 text-sm">davidluxxnm@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Let's discuss your requirements and create a solution that fits your business needs perfectly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Get a Free Quote <FaArrowRight />
            </Link>
            <a
              href="tel:+250782575191"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Schedule a Call
            </a>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            Response guaranteed within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}