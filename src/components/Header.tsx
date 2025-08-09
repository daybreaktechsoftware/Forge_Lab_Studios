import { Camera, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Camera
                className={`h-8 w-8 ${
                  isScrolled ? "text-light-green" : "text-white"
                } transition-colors duration-300`}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-light-green rounded-full animate-pulse-slow"></div>
            </div>
            <span
              className={`text-2xl font-bold tracking-tight ${
                isScrolled ? "text-text-dark" : "text-white"
              } transition-colors duration-300`}
            >
              Forge Lab Studios
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-text-dark hover:text-light-green"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-green transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* <button
              onClick={onLoginClick}
              className="bg-light-green hover:bg-dark-green text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Client Login</span>
            </button> */}
            <a
              href="#contact"
              className="bg-light-green hover:bg-dark-green text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </nav>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-text-dark hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-text-dark hover:text-light-green transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLoginClick?.();
                }}
              ></button>
              <a
                href="#contact"
                className="w-full bg-light-green hover:bg-dark-green text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
