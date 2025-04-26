"use client"

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import PricingPlans from "./components/PricingSection"
import FeaturesSection from "./components/FeaturesSection"
import Testimonials from "./components/Testimonials"
import WebHostingServices from "./components/WebHostingServices"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import ContactSupport from "./components/ContactSupport"
import PrivacyPolicy from "./conditions/PrivacyPolicy"
import RefundPolicy from "./conditions/TechProHostingPolicies"
import TermsAndConditions from "./conditions/TermsAndConditions"
import WordPressFeatures from "./components/WordPressFeatures"
import dynamic from "next/dynamic"

// Dynamically import AIChat with no SSR
const AIChat = dynamic(() => import("./AIChat/AIChat"), { ssr: false })

// Scroll to top component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's no hash in the URL, scroll to top
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    // If there is a hash, scroll to that element
    else {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [pathname, hash])

  return null
}

function HomePage() {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="web-hosting-services">
        <WebHostingServices />
      </div>
      <div id="pricing">
        <PricingPlans />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact-support">
        <ContactSupport />
      </div>
      <div id="wordpress-features">
        <WordPressFeatures />
      </div>
    </>
  )
}

function App() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Return null on server-side
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>

        <AIChat />
        <Footer />
      </div>
    </Router>
  )
}

export default App
