"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react" // Importing lucide-react icons

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const faqData = [
    {
      question: "What is web hosting?",
      answer:
        "Web hosting is a service that allows you to store your website's files on a server and make them accessible to users on the internet.",
    },
    {
      question: "How do I choose the right hosting plan?",
      answer:
        "Consider your website's needs, such as storage, traffic, and security requirements, and choose a plan that fits your budget and offers the necessary features.",
    },
    {
      question: "Do you offer 24/7 support?",
      answer: "Yes, we provide 24/7 expert support to assist you with any issues or questions you may have.",
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer:
        "Yes, you can easily upgrade your hosting plan as your website grows and requires more resources. Contact our support team for assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Choose the one that suits you best during checkout.",
    },
  ]

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white shadow-xl overflow-hidden transition-shadow hover:shadow-2xl"
            >
              <div className="p-5">
                <button
                  className="flex items-center justify-between w-full text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600 focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{item.question}</span>
                  <span className={`transition-transform duration-300 ${activeQuestion === index ? "rotate-180" : ""}`}>
                    {activeQuestion === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-500" />
                    )}
                  </span>
                </button>
                {activeQuestion === index && <div className="mt-4 text-gray-600 leading-relaxed">{item.answer}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
