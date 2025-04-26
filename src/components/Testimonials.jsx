"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "Chief Technology Officer",
      company: "ABC Corp",
      testimonial:
        "The cloud hosting service has transformed our infrastructure capabilities. We've experienced 99.9% uptime, rapid deployment cycles, and the technical support team resolves issues promptly. This has allowed us to focus on innovation rather than maintenance.",
      rating: 5,
      industry: "Technology",
    },
    {
      name: "Jane Smith",
      position: "Director of Operations",
      company: "XYZ Ltd",
      testimonial:
        "After evaluating numerous providers, we chose this platform for its robust security features and scalability. Over the past three years, we've expanded our digital footprint without compromising performance or experiencing unexpected cost increases.",
      rating: 5,
      industry: "Finance",
    },
    {
      name: "Robert Johnson",
      position: "E-commerce Manager",
      company: "Global Retail Inc",
      testimonial:
        "The elastic scalability has been crucial during our seasonal peaks. Last Black Friday, our traffic increased 400% and the platform handled it flawlessly. The detailed analytics dashboard helps us optimize resources and control costs effectively.",
      rating: 4,
      industry: "Retail",
    },
    {
      name: "Sarah Williams",
      position: "Head of Digital Transformation",
      company: "Healthcare Solutions",
      testimonial:
        "Migrating our sensitive patient data required a partner with impeccable security credentials. The team provided comprehensive compliance documentation and implemented custom security protocols that exceeded our expectations.",
      rating: 5,
      industry: "Healthcare",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [filter, setFilter] = useState("All")

  const filteredTestimonials = filter === "All" ? testimonials : testimonials.filter((t) => t.industry === filter)

  const navigate = (direction) => {
    if (animating) return
    setAnimating(true)

    setCurrentIndex((prevIndex) => {
      const length = filteredTestimonials.length
      if (direction === "next") {
        return (prevIndex + 1) % length
      } else {
        return (prevIndex - 1 + length) % length
      }
    })

    setTimeout(() => setAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      navigate("next")
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex, filter])

  const industries = ["All", ...new Set(testimonials.map((t) => t.industry))]

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how organizations across industries leverage our solutions to drive innovation and growth
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => {
                  setFilter(industry)
                  setCurrentIndex(0)
                }}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === industry
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {filteredTestimonials.length > 0 ? (
          <div className="relative">
            <div className={`transition-opacity duration-500 ease-in-out ${animating ? "opacity-0" : "opacity-100"}`}>
              <div className="bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{filteredTestimonials[currentIndex].name}</h3>
                      <p className="text-gray-600">{filteredTestimonials[currentIndex].position}</p>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-gray-800 text-lg">
                        {filteredTestimonials[currentIndex].company}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                        {filteredTestimonials[currentIndex].industry}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={
                              i < filteredTestimonials[currentIndex].rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-500">
                        {filteredTestimonials[currentIndex].rating}.0 Rating
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-2/3 relative">
                    <Quote size={60} className="absolute -top-6 -left-6 text-gray-100 z-0" fill="currentColor" />
                    <div className="relative z-10">
                      <p className="text-gray-700 text-xl leading-relaxed">
                        "{filteredTestimonials[currentIndex].testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-10">
              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => navigate("prev")}
                  className="p-3 rounded-full bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigate("next")}
                  className="p-3 rounded-full bg-white hover:bg-gray-50 text-gray-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-xl">
            <p className="text-gray-600 text-lg">No testimonials available for this industry.</p>
            <button
              onClick={() => setFilter("All")}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              View All Testimonials
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestimonialsSection
