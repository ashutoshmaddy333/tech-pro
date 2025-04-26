import HeroSection from "../components/HeroSection"
import PricingPlans from "../components/PricingSection"
import FeaturesSection from "../components/FeaturesSection"
import Testimonials from "../components/Testimonials"
import WebHostingServices from "../components/WebHostingServices"
import FAQ from "../components/FAQ"
import ContactSupport from "../components/ContactSupport"
import WordPressFeatures from "../components/WordPressFeatures"

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

export default HomePage
