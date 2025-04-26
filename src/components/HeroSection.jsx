"use client"

import { useState } from "react"
import { Search, CheckCircle } from "lucide-react"

const HeroSection = () => {
  const [domainInput, setDomainInput] = useState("")

  const handleSearch = () => {
    if (domainInput.trim()) {
      const searchUrl = `https://billing.swaget.in/cart.php?a=add&domain=register&query=${encodeURIComponent(domainInput.trim())}`
      window.open(searchUrl, "_blank")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              TechPro Hosting: Premium Web Hosting Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Get started with our professional hosting solutions and 24/7 support.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {[
                "Host Unlimited Domain for 1st Year",
                "Free SSL Certificate",
                "One-Click WordPress Install",
                "24/7 Expert Support",
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://billing.swaget.in/cart.php?a=add&domain=register">
                <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-lg transition-colors">
                  Get Started
                </button>
              </a>
              <a href="https://billing.swaget.in/index.php/store/reseller-hosting-plan">
                <button className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 rounded-lg font-semibold text-lg transition-colors">
                  See Plans
                </button>
              </a>
            </div>
          </div>

          {/* Domain Search */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Find Your Perfect Domain</h2>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Enter your domain name"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Search Domain
              </button>
            </div>
            {/* Domain Prices */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { domain: ".com", price: "₹1117/yr" },
                { domain: ".org", price: "₹1466/yr" },
                { domain: ".net", price: "₹1432/yr" },
                { domain: ".in", price: "₹649/yr" },
              ].map((item) => (
                <div key={item.domain} className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="font-medium">{item.domain}</div>
                  <div className="text-sm text-gray-300">{item.price}/yr</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
