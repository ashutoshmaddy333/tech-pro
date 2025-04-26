"use client"

import { useEffect, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink, useLocation } from "react-router-dom"

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  // Check if component is mounted (client-side)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Initialize smooth scroll for anchor links
  useEffect(() => {
    if (!isMounted) return

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute("href"))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [isMounted])

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-blue-900 text-white pt-16 pb-8 relative">
      {/* Footer Decoration - Glowing Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-75"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer"
              >
                <span className="mr-2">⚡</span>
                TechPro Hoisting
              </ScrollLink>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Providing cutting-edge hosting solutions for businesses of all sizes. Our mission is to empower your
              digital journey with reliable, scalable infrastructure.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/swaget.in"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/Swagetinfocomm"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/swaget.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="http://linkedin.com/in/dhananjay-shukla-73322332b"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white relative inline-block mb-6">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                {isHomePage ? (
                  <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Home
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Home
                  </RouterLink>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <ScrollLink
                    to="pricing"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Pricing
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/#pricing"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Pricing
                  </RouterLink>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Features
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/#features"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Features
                  </RouterLink>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <ScrollLink
                    to="testimonials"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Testimonials
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/#testimonials"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    Testimonials
                  </RouterLink>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <ScrollLink
                    to="faq"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    FAQ
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to="/#faq"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                    FAQ
                  </RouterLink>
                )}
              </li>
              <li>
                <RouterLink
                  to="/hosting-guide"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                  Hosting Guide
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/website-security"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                  Website Security
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/domain-registration"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2 group-hover:bg-purple-400 transition-colors"></span>
                  Domain Registration
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white relative inline-block mb-6">
              Contact Information
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="text-gray-300">L-87 B, Saket, New Delhi – 110017</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="text-gray-300">
                  <div>Phone: 08069409932</div>
                  <div>WhatsApp: +919935353574</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="text-gray-300">info@swaget.in</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white relative inline-block mb-6">
              Newsletter
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"></span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates, promotions, and tech insights.
            </p>
            <form className="mt-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-1 rounded-md transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center absolute left-0 top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <p className="text-gray-300 text-xs pl-9">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900/80 py-6 mt-8 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">©2020 TechProHoisting... All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <RouterLink to="/terms-and-conditions" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </RouterLink>
              <span className="hidden md:inline">|</span>
              <RouterLink to="/privacy-policy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </RouterLink>
              <span className="hidden md:inline">|</span>
              <RouterLink to="/refund-policy" className="hover:text-white transition-colors duration-300">
                Refund Policy
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
