import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram, 
  FaArrowRight,
  FaCode, 
  FaBriefcase,
  FaLaptopCode
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const expertiseAreas = [
    { name: "Full-Stack Development", icon: <FaCode /> },
    { name: "Business Technology", icon: <FaBriefcase /> },
    { name: "Web Solutions", icon: <FaLaptopCode /> },
  ];

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/davidluxxnm", icon:  <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/davidluxxnm", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://youtube.com/@bwebwe_entertainment", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://facebook.com/david.luxx.nm", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://instagram.com/david_luxx_nm", icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              David <span className="text-blue-600">Luxx</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">Full-Stack Developer</p>
            <p className="text-gray-500 text-sm mt-3">
              Building modern web solutions for businesses in Rwanda and beyond.
            </p>
            <div className="flex gap-2 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Expertise</h3>
            <ul className="space-y-2">
              {expertiseAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="text-blue-600">{area.icon}</span>
                  {area.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-600 hover:text-blue-600 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-blue-600" />
                <a href="mailto:davidluxxnm@gmail.com" className="text-gray-600 hover:text-blue-600">
                  davidluxxnm@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-blue-600" />
                <a href="tel:+250782575191" className="text-gray-600 hover:text-blue-600">
                  +250 782 575 191
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaMapMarkerAlt className="text-blue-600" />
                <span className="text-gray-600">Rubavu, Rwanda</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
            >
              Hire Me <FaArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} David Luxx Nizeyimana. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Rubavu, Gisenyi • Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}