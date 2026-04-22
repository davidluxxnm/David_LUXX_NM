import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const goToHireMe = () => {
    setIsMenuOpen(false);
    navigate("/hireme");
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          hasScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">

            {/* Logo */}
            <Link to="/" className="group">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">
                  <span className="text-gray-900">David</span>
                  <span className="text-blue-600">Luxx</span>
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map(({ path, label }) => {
                  const active = isActive(path);
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`text-base font-medium transition ${
                          active
                            ? "text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* ✅ Hire Me Button (ONCLICK) */}
              <button
                onClick={goToHireMe}
                className="bg-blue-600 px-6 py-2.5 rounded-lg font-semibold text-white hover:bg-blue-700 transition"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                >
                  {label}
                </Link>
              ))}

              {/* Mobile Hire Me */}
              <button
                onClick={goToHireMe}
                className="w-full mt-3 mx-4 bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16 lg:h-20" />
    </>
  );
}