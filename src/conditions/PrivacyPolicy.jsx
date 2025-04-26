"use client"

import { useState } from "react"

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null)

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div>
          <p className="mb-4">
            TechPro Hosting ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you visit our website,{" "}
            <a href="https://techprohosting.com" className="text-blue-600 hover:text-blue-800 underline">
              techprohosting.com
            </a>{" "}
            (the "Site"), or engage with our services.
          </p>
          <p className="mb-4">
            By accessing the Site or using our services, you agree to the terms outlined in this Privacy Policy. If you
            do not agree with these terms, please refrain from using our Site or services.
          </p>
        </div>
      ),
    },
    {
      id: "information-collected",
      title: "Information We Collect",
      content: (
        <div>
          <p className="mb-4">
            We collect information that you voluntarily provide to us and information that is automatically collected
            when you use our services. This information may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span className="font-semibold">Personal Information:</span> Name, email address, phone number, postal
              address, and other contact details.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> Information about your interactions with our Site, such
              as IP address, browser type, pages visited, and timestamps.
            </li>
            <li>
              <span className="font-semibold">Client Information:</span> Information provided by clients during business
              interactions, such as project requirements and specifications.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: (
        <div>
          <p className="mb-4">We may use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To provide and maintain our services to you.</li>
            <li>To improve, customize, and enhance your experience with our Site and services.</li>
            <li>To communicate with you regarding updates, news, offers, and other relevant information.</li>
            <li>To fulfill legal or regulatory requirements.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      content: (
        <div>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. However, we may disclose your
            information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>With your consent or at your direction.</li>
            <li>To our trusted service providers who assist us in delivering our services.</li>
            <li>When required by law or to protect our legal rights.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "Data Security",
      content: (
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your information from unauthorized
          access, alteration, disclosure, or destruction. While we strive to protect your information, no method of data
          transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute
          security.
        </p>
      ),
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: (
        <div>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access, update, or correct your personal information.</li>
            <li>Request the deletion of your personal information.</li>
            <li>Opt-out of receiving marketing communications.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      content: (
        <p className="mb-4">
          Our Site may contain links to third-party websites or services. We are not responsible for the privacy
          practices or content of these third parties.
        </p>
      ),
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: (
        <p className="mb-4">
          Our services are not directed at individuals under the age of 13. We do not knowingly collect personal
          information from children under 13 years of age. If you believe that we have inadvertently collected such
          information, please contact us immediately.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      content: (
        <p className="mb-4">
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon
          posting the revised policy on this page.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
          <a href="mailto:support@techprohosting.com" className="text-blue-600 hover:text-blue-800 underline">
            support@techprohosting.com
          </a>
          .
        </p>
      ),
    },
  ]

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
      <div className="bg-white p-8 rounded-lg shadow">
        <header className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-blue-800">Privacy Policy</h1>
          <p className="text-gray-600">TechPro Hosting</p>
          <p className="text-sm text-gray-500 mt-1">Effective Date: April 3, 2020</p>
        </header>

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border border-blue-100 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left bg-blue-100 hover:bg-blue-200 transition-colors flex justify-between items-center"
              >
                <h2 className="text-lg font-medium text-blue-800">{section.title}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-blue-600 transform transition-transform ${activeSection === section.id ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 py-4 bg-white transition-all duration-300 ${
                  activeSection === section.id ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-8 pt-6 border-t border-blue-100 text-center text-sm text-gray-500">
          <p>© 2025 TechPro Hosting. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default PrivacyPolicy
