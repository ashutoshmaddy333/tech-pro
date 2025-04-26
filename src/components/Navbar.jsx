"use client"

import { useState } from "react"
import { useLocation } from "react-router-dom"
import {
  ChevronDown,
  Menu,
  X,
  Server,
  Database,
  ShoppingCart,
  Globe,
  Lock,
  Box,
  CloudCog,
  Building2,
  Newspaper,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
  Mail,
  PenTool,
  Settings,
  BookOpen,
  Shield,
  Lightbulb,
  Key,
} from "lucide-react"

import { HashLink } from "react-router-hash-link" // Import HashLink

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item)
  }

  const navItems = {
    "Web Hosting": {
      icon: Globe,
      path: "#web-hosting", // Add path for routing
      featured: {
        title: "Popular Hosting Solutions",
        description: "Find the perfect hosting for your needs",
        items: [
          {
            name: "WordPress Hosting",
            icon: PenTool,
            description: "Optimized for WordPress",
            path: "https://billing.swaget.in/index.php/store/web-hosting",
          },
          {
            name: "VPS Hosting",
            icon: Server,
            description: "Virtual private servers",
            path: "https://billing.swaget.in/index.php/store/linux-vps-usa",
          },
        ],
      },
      categories: [
        {
          name: "Shared Hosting",
          icon: MonitorSmartphone,
          path: "https://billing.swaget.in/index.php/store/web-hostings-usa",
        },
        {
          name: "WordPress Hosting",
          icon: PenTool,
          description: "Optimized for WordPress",
          path: "https://billing.swaget.in/index.php/store/web-hosting",
        },
        { name: "VPS Hosting", icon: Server, path: "https://billing.swaget.in/index.php/store/linux-vps-usa" },
        {
          name: "Dedicated Servers",
          icon: Database,
          path: "https://billing.swaget.in/index.php/store/poweredge-dedicated-servers",
        },
      ],
    },
    Licenses: {
      icon: Lock,
      path: "https://billing.swaget.in/index.php/store/shared-licenses", // Add path for routing
    },
    Services: {
      icon: CloudCog,
      path: "#services", // Add path for routing
      featured: {
        "Premium Hosting": {
          description: "High-performance hosting solutions",
          icon: Server,
          items: [
            {
              name: "Ultra Fast Premium Reseller Hosting USA",
              path: "https://billing.swaget.in/index.php/store/reseller-hosting-usa",
            },
            {
              name: "Ultra Fast Premium Reseller Hosting India",
              path: "https://billing.swaget.in/index.php/store/reseller-hosting-india",
            },
            {
              name: "Premium Business Reseller Hosting Plans",
              path: "https://billing.swaget.in/index.php/store/reseller-hosting-plan",
            },
          ],
        },
        "Web Hosting": {
          description: "Reliable web hosting packages",
          icon: Globe,
          items: [
            { name: "Premium Web Hosting India", path: "https://billing.swaget.in/index.php/store/web-hosting-india" },
            { name: "Premium Web Hosting USA", path: "https://billing.swaget.in/index.php/store/web-hostings-usa" },
            {
              name: "Affordable Shared Word Press Web Hosting",
              path: "https://billing.swaget.in/index.php/store/web-hosting",
            },
          ],
        },
      },
      main: {
        "Hosting Solutions": {
          icon: Server,
          items: [
            {
              name: "Affordable Shared Word Press Web Hosting",
              path: "https://billing.swaget.in/index.php/store/web-hosting",
            },
            {
              name: "Affordable Shared Reseller Web Hosting Solutions",
              path: "https://billing.swaget.in/index.php/store/shared-reseller-web-hosting",
            },
          ],
        },
        "VPS Hosting": {
          icon: Database,
          items: [
            { name: "Powerful Linux VPS Hosting USA", path: "https://billing.swaget.in/index.php/store/linux-vps-usa" },
            {
              name: "Powerful Linux VPS Hosting India",
              path: "https://billing.swaget.in/index.php/store/linux-vps-india",
            },
            { name: "Windows VPS Hosting USA", path: "https://billing.swaget.in/index.php/store/windows-vps-usa" },
            { name: "Windows VPS Hosting India", path: "https://billing.swaget.in/index.php/store/windows-vps-india" },
            { name: "Affordable VPS Hosting Solutions", path: "https://billing.swaget.in/index.php/store/vps-hosting" },
          ],
        },
        Licenses: {
          icon: Key,
          items: [
            {
              name: "Affordable Shared cPanel License Solutions",
              path: "https://billing.swaget.in/index.php/store/cpanel-license",
            },
            {
              name: "Affordable Shared License Solutions",
              path: "https://billing.swaget.in/index.php/store/shared-licenses",
            },
          ],
        },
      },
    },
    "Other Tools": {
      icon: Settings,
      path: "#other-tools", // Add path for routing
      categories: [
        {
          name: "Domain Registration",
          icon: Globe,
          description: "Register your perfect domain",
          path: "https://billing.swaget.in/cart.php?a=add&domain=register",
        },
        { name: "SSL Certificates", icon: ShieldCheck, description: "Secure your website", path: "#ssl-certificates" },
        {
          name: "Website Development",
          icon: PenTool,
          description: "Create your website easily",
          path: "https://swaget.in/",
        },
        { name: "Email Services", icon: Mail, description: "Professional email hosting", path: "#email-services" },
      ],
    },
    Solutions: {
      icon: Workflow,
      path: "#solutions", // Add path for routing
      featured: {
        title: "Enterprise Solutions",
        description: "Scale your business with our solutions",
        items: [
          {
            name: "Business Hosting",
            icon: Building2,
            description: "For growing businesses",
            path: "https://billing.swaget.in/index.php/store/reseller-hosting-plan",
          },
          {
            name: "E-commerce",
            icon: ShoppingCart,
            description: "Online store solutions",
            path: "https://billing.swaget.in/index.php/store/web-hosting",
          },
        ],
      },
      categories: [
        {
          name: "Business Hosting",
          icon: Building2,
          path: "https://billing.swaget.in/index.php/store/reseller-hosting-plan",
        },
        {
          name: "Enterprise Solutions",
          icon: Workflow,
          path: "https://billing.swaget.in/index.php/store/linux-vps-india",
        },
        {
          name: "E-commerce Hosting",
          icon: ShoppingCart,
          path: "https://billing.swaget.in/index.php/store/web-hosting",
        },
        {
          name: "Reseller Hosting",
          icon: Box,
          path: "https://billing.swaget.in/index.php/store/reseller-hosting-plan",
        },
      ],
    },
    Blog: {
      icon: BookOpen,
      path: "#blog", // Add path for routing
      categories: [
        { name: "Hosting Guides", icon: BookOpen, description: "Learn about hosting", path: "#hosting-guides" },
        { name: "Security Updates", icon: Shield, description: "Stay secure", path: "#security-updates" },
        { name: "Tech News", icon: Newspaper, description: "Latest updates", path: "#tech-news" },
        { name: "Tutorials", icon: Lightbulb, description: "Step-by-step guides", path: "#tutorials" },
      ],
    },
  }

  const getDropdownContent = (item) => {
    const itemData = navItems[item]

    if (item === "Services") {
      return (
        <div className="p-6">
          {/* Featured Section */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {Object.entries(itemData.featured).map(([title, section]) => (
              <div key={title} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  {section.icon && <section.icon className="h-6 w-6 text-blue-600" />}
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{section.description}</p>
                <div className="space-y-2">
                  {Array.isArray(section.items) ? (
                    section.items.map((item) => (
                      <HashLink
                        key={item.name || item}
                        to={item.path}
                        className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-white rounded px-3 py-2 transition-colors duration-200"
                      >
                        {item.name || item}
                      </HashLink>
                    ))
                  ) : (
                    <p className="text-sm text-red-500">Invalid items format</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {Object.entries(itemData.main).map(([category, section]) => (
              <div key={category}>
                <div className="flex items-center space-x-2 mb-3">
                  {section.icon && <section.icon className="h-5 w-5 text-blue-600" />}
                  <h4 className="font-semibold text-gray-900">{category}</h4>
                </div>
                <ul className="space-y-2">
                  {Array.isArray(section.items) ? (
                    section.items.map((item) => (
                      <li key={item.name || item}>
                        <HashLink
                          to={item.path}
                          className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded px-2 py-1 transition-colors duration-200"
                        >
                          {item.name || item}
                        </HashLink>
                      </li>
                    ))
                  ) : (
                    <p className="text-sm text-red-500">Invalid items format</p>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="p-4">
        {itemData.featured && (
          <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{itemData.featured.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{itemData.featured.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {itemData.featured.items.map((item) => (
                <HashLink
                  key={item.name}
                  to={item.path}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-200"
                >
                  {item.icon && <item.icon className="h-5 w-5 text-blue-600 mt-1" />}
                  <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </HashLink>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {itemData.categories &&
            itemData.categories.map((category) => (
              <HashLink
                key={category.name}
                to={category.path}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                {category.icon && <category.icon className="h-5 w-5 text-blue-600" />}
                <div>
                  <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  {category.description && <div className="text-xs text-gray-500">{category.description}</div>}
                </div>
              </HashLink>
            ))}
        </div>
      </div>
    )
  }

  // Function to handle smooth scrolling with offset
  const scrollWithOffset = (el) => {
    const headerOffset = 80 // Adjust this value based on your header height
    const elementPosition = el.offsetTop - headerOffset
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })
  }

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="hidden md:flex items-center space-x-6">
            {Object.keys(navItems).map((item) => {
              const IconComponent = navItems[item].icon
              return (
                <div key={item} className="relative group">
                  <HashLink
                    to={navItems[item].path}
                    className="flex items-center space-x-1 text-gray-200 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                    onClick={(e) => {
                      toggleDropdown(item)
                    }}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    <span>{item}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item ? "rotate-180" : ""}`}
                    />
                  </HashLink>

                  {activeDropdown === item && (
                    <div className="absolute z-50 left-0 mt-2 w-[42rem] rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5">
                      {getDropdownContent(item)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-blue-400 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {Object.keys(navItems).map((item) => (
            <HashLink
              key={item}
              to={navItems[item].path}
              className="text-gray-200 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              scroll={(el) => scrollWithOffset(el)}
            >
              {item}
            </HashLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
