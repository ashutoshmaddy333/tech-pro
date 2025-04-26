"use client"

import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import { useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  // Function to handle navigation based on current page
  const handleNavigation = (sectionId) => {
    if (!isHomePage) {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`
    }
    // If on home page, ScrollLink will handle it automatically
  }

  return (
    <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-colors duration-300"
          >
            <span className="mr-2">⚡</span> {/* Lightning bolt icon */}
            TechPro Hoisting
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center justify-center space-x-8 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 px-8 py-4 rounded-lg shadow-lg">
          {isHomePage ? (
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
            >
              <span className="relative z-10">HOME</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ) : (
            <Link
              to="/"
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              <span className="relative z-10">HOME</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}

          {isHomePage ? (
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
            >
              <span className="relative z-10">PRICING</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ) : (
            <Link
              to="/#pricing"
              onClick={() => handleNavigation("pricing")}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              <span className="relative z-10">PRICING</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}

          {isHomePage ? (
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
            >
              <span className="relative z-10">FEATURES</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ) : (
            <Link
              to="/#features"
              onClick={() => handleNavigation("features")}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              <span className="relative z-10">FEATURES</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}

          {isHomePage ? (
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={500}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
            >
              <span className="relative z-10">TESTIMONIALS</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ) : (
            <Link
              to="/#testimonials"
              onClick={() => handleNavigation("testimonials")}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              <span className="relative z-10">TESTIMONIALS</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}

          <a
            href="https://swaget.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group"
          >
            <span className="relative z-10">WEBSITE DEVELOPMENT</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-rose-500 group-hover:w-full transition-all duration-300"></span>
          </a>

          {isHomePage ? (
            <ScrollLink
              to="faq"
              smooth={true}
              duration={500}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
            >
              <span className="relative z-10">FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ) : (
            <Link
              to="/#faq"
              onClick={() => handleNavigation("faq")}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              <span className="relative z-10">FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}

          {isHomePage ? (
            <ScrollLink
              to="contact-support"
              smooth={true}
              duration={500}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group cursor-pointer"
            >
              <span className="relative z-10">CONTACT SUPPORT</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ) : (
            <Link
              to="/#contact-support"
              onClick={() => handleNavigation("contact-support")}
              className="uppercase tracking-wider text-sm font-bold text-gray-100 hover:text-white transition-all duration-300 hover:scale-110 relative group"
            >
              <span className="relative z-10">CONTACT SUPPORT</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
