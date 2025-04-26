"use client"

import { useState, useEffect, useRef } from "react"
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react"

const PricingSection = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const autoSlideTimerRef = useRef(null)

  const plans = [
    {
      name: "Startup Hosting Plan",
      description: "Perfect for personal websites",
      price: "₹2,999 ",
      tag: "Basic",
      features: [
        "Unlimited cPanel Accounts",
        "25GB SSD NVMe Disk Space",
        "Unlimited Free SSL",
        "Host Unlimited Domains",
        "Unlimited Bandwidth",
        "cPanel + WHM",
        "Softaculous",
        "Unlimited MySQL DB's",
        "Unlimited Email Accounts",
        "Object Cache for WordPress",
        "Renew At Same Price",
        "07 Days Money-Back Guarantee",
      ],
      notIncluded: [],
      link: "https://billing.swaget.in/index.php/store/reseller-hosting-plan/startup-hosting-plan",
    },
    {
      name: "Pro Hosting Plan",
      description: "Great for small businesses",
      price: "₹6,790",
      popular: true,
      tag: "Popular",
      features: [
        "Unlimited cPanel Accounts",
        "50GB SSD NVMe Disk Space",
        "Unlimited Free SSL",
        "Host Unlimited Domains",
        "Unlimited Bandwidth",
        "cPanel + WHM",
        "Softaculous",
        "Unlimited MySQL DB's",
        "Unlimited Email Accounts",
        "Object Cache for WordPress",
        "Renew At Same Price",
        "07 Days Money-Back Guarantee",
      ],
      notIncluded: [],
      link: "https://billing.swaget.in/index.php/store/reseller-hosting-plan/pro-hosting-plan",
    },
    {
      name: "Enterprise Hosting Plan",
      description: "Advanced features for professionals",
      price: "₹12,649",
      tag: "Advanced",
      features: [
        "Unlimited cPanel Accounts",
        "100GB SSD NVMe Disk Space",
        "Unlimited Free SSL",
        "Host Unlimited Domains",
        "Unlimited Bandwidth",
        "cPanel + WHM",
        "Softaculous",
        "Unlimited MySQL DB's",
        "Unlimited Email Accounts",
        "Object Cache for WordPress",
        "Renew At Same Price",
        "10 Days Money-Back Guarantee",
      ],
      notIncluded: [],
      link: "https://billing.swaget.in/index.php/store/reseller-hosting-plan/enterprise-hosting-plan",
    },
    {
      name: "Ultimate Hosting Plan",
      description: "For growing businesses",
      price: "₹18,490",
      tag: "Growing",
      features: [
        "Unlimited Websites",
        "Unlimited cPanel Accounts",
        "250GB SSD NVMe Disk Space",
        "Unlimited Free SSL",
        "Host Unlimited Domains",
        "Unlimited Bandwidth",
        "cPanel + WHM",
        "Softaculous",
        "Unlimited MySQL DB's",
        "Unlimited Email Accounts",
        "Object Cache for WordPress",
        "Renew At Same Price",
        "10 Days Money-Back Guarantee",
      ],
      notIncluded: [],
      link: "https://billing.swaget.in/index.php/store/reseller-hosting-plan/ultimate-hosting-plan",
    },
    {
      name: "Premium Hosting Plan",
      description: "Solutions for large organizations",
      price: "₹33,490",
      tag: "Premium",
      features: [
        "Unlimited Websites",
        "Unlimited cPanel Accounts",
        "500GB SSD NVMe Disk Space",
        "Unlimited Free SSL",
        "Host Unlimited Domains",
        "Unlimited Bandwidth",
        "cPanel + WHM",
        "Softaculous",
        "Unlimited MySQL DB's",
        "Unlimited Email Accounts",
        "Object Cache for WordPress",
        "Renew At Same Price",
        "30 Days Money-Back Guarantee",
      ],
      notIncluded: [],
      link: "https://billing.swaget.in/index.php/store/reseller-hosting-plan/premium-hosting-plan",
    },
    {
      name: "Elite Hosting Plan",
      description: "The ultimate hosting experience",
      price: "₹67,990",
      tag: "Elite",
      features: [
        "Unlimited Websites",
        "Unlimited cPanel Accounts",
        "1000GB SSD NVMe Disk Space",
        "Unlimited Free SSL",
        "Host Unlimited Domains",
        "Unlimited Bandwidth",
        "cPanel + WHM",
        "Softaculous",
        "Unlimited MySQL DB's",
        "Unlimited Email Accounts",
        "Object Cache for WordPress",
        "Renew At Same Price",
        "30 Days Money-Back Guarantee",
      ],
      notIncluded: [],
      link: "https://billing.swaget.in/index.php/store/reseller-hosting-plan/elite-hosting-plan",
    },
  ]

  // Auto-slide functionality - 3 seconds
  useEffect(() => {
    const startAutoSlide = () => {
      clearInterval(autoSlideTimerRef.current)
      autoSlideTimerRef.current = setInterval(() => {
        if (!isPaused) {
          nextPage()
        }
      }, 3000)
    }

    startAutoSlide()

    return () => clearInterval(autoSlideTimerRef.current)
  }, [isPaused, currentPage])

  // Number of pages for the carousel (2 pages with 3 plans each)
  const totalPages = Math.ceil(plans.length / 3)

  // Handle carousel navigation with animation
  const nextPage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
      setIsTransitioning(false)
    }, 300)
  }

  const prevPage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
      setIsTransitioning(false)
    }, 300)
  }

  const goToPage = (page) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 300)
  }

  // Get plans for current page (3 plans per page)
  const displayPlans = plans.slice(currentPage * 3, currentPage * 3 + 3)

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Premium Hosting Plan</h2>
          <p className="text-lg md:text-xl text-gray-600">Get the perfect hosting solution for your website</p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-4 md:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-blue-50 transition text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Pricing Cards Carousel */}
          <div
            className={`overflow-hidden my-4 transition-all duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 lg:gap-8">
              {displayPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`flex flex-col h-full relative rounded-xl bg-white p-4 md:p-6 lg:p-8 border border-gray-200 
                                    shadow-lg hover:shadow-xl hover:border-blue-300 transition transform hover:-translate-y-1 duration-300
                                    ${plan.popular ? "ring-2 ring-blue-600" : ""}`}
                  style={{ animationDelay: `${index * 150}ms`, animation: "fadeInUp 0.5s ease-out forwards" }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-2">{plan.name}</h3>
                  <p className="mt-1 text-sm md:text-base text-gray-500 mb-3 text-center">{plan.description}</p>
                  <div className="mt-2 md:mt-3 text-center">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm md:text-base text-gray-500">/yr</span>
                  </div>

                  <a
                    href={plan.link}
                    className="w-full mt-4 md:mt-6 rounded-lg px-4 py-2 md:py-3 text-sm md:text-base font-semibold transition-all text-center bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Select Plan
                  </a>

                  <div className="mt-4 md:mt-6 space-y-2 text-sm md:text-base flex-grow overflow-y-auto">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start text-gray-600">
                        <Check className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-left">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start text-gray-400">
                        <X className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-gray-300 mr-2 flex-shrink-0" />
                        <span className="text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${
                  currentPage === idx ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Animation keyframes */}
        <style jsx="true">{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 20px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default PricingSection
