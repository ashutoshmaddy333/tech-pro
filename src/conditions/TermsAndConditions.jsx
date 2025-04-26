"use client"

import { useState } from "react"

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null)
    } else {
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="bg-blue-600 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold text-center">Terms and Conditions for TechPro Hosting</h1>
        <p className="text-center mt-2">
          <em>Effective Date: April 3, 2025</em>
        </p>
      </div>

      <div className="p-6">
        <p className="mb-4">Welcome to TechPro Hosting!</p>
        <p className="mb-4">
          These Terms and Conditions outline the rules and regulations for using TechPro Hosting's website,
          <a href="https://techprohosting.com" className="text-blue-600 hover:underline">
            {" "}
            techprohosting.com
          </a>{" "}
          (the "Site").
        </p>
        <p className="mb-6">
          By accessing our Site and using our services, you agree to these Terms and Conditions. If you do not agree
          with any part of these terms, please discontinue use of our Site and services.
        </p>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 1 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("definitions")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">1. Definitions</h2>
            <span className="text-blue-800 text-xl">{activeSection === "definitions" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "definitions" ? "block" : "hidden"}`}
          >
            <ul className="list-none space-y-2">
              <li>
                <em>"Client," "You," "Your"</em> refers to the person accessing this website and accepting the Company's
                terms and conditions.
              </li>
              <li>
                <em>"Company," "We," "Us," "Our"</em> refers to TechPro Hosting.
              </li>
              <li>
                <em>"Party," "Parties," or "Us"</em> refers to both the Client and TechPro Hosting.
              </li>
            </ul>
            <p className="mt-2">
              All terms refer to the offer, acceptance, and consideration of payment necessary to provide services in
              accordance with and subject to prevailing laws.
            </p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 2 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("cookies")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">2. Cookies</h2>
            <span className="text-blue-800 text-xl">{activeSection === "cookies" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "cookies" ? "block" : "hidden"}`}
          >
            <p>
              By accessing TechPro Hosting, you agree to our use of cookies as outlined in our <em>Privacy Policy</em>.
              Cookies help improve user experience and enable essential website functionalities.
            </p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 3 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("license")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">3. License</h2>
            <span className="text-blue-800 text-xl">{activeSection === "license" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "license" ? "block" : "hidden"}`}
          >
            <p className="mb-2">
              Unless otherwise stated, TechPro Hosting and/or its licensors own the intellectual property rights for all
              material on TechPro Hosting. All intellectual property rights are reserved.
            </p>
            <p className="mb-2">You may access the website for personal use, subject to the restrictions below:</p>
            <ul className="list-none space-y-2">
              <li>
                You <em>must not</em> republish, sell, rent, copy, redistribute, or sub-license any material from
                TechPro Hosting without prior consent.
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 4 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("user-content")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">4. User-Generated Content</h2>
            <span className="text-blue-800 text-xl">{activeSection === "user-content" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "user-content" ? "block" : "hidden"}`}
          >
            <p className="mb-2">
              TechPro Hosting allows users to post comments and feedback. However, we do not monitor all posted content
              and are not responsible for its accuracy.
            </p>
            <p className="mb-2">By posting content, you agree that:</p>
            <ul className="list-none space-y-2">
              <li>You have the necessary rights and permissions to share it.</li>
              <li>Your content does not violate any intellectual property, privacy, or legal rights.</li>
              <li>Your content does not contain unlawful, offensive, or promotional material.</li>
            </ul>
            <p className="mt-2">We reserve the right to remove any content deemed inappropriate or offensive.</p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 5 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("hyperlinking")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">5. Hyperlinking to Our Content</h2>
            <span className="text-blue-800 text-xl">{activeSection === "hyperlinking" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "hyperlinking" ? "block" : "hidden"}`}
          >
            <p className="mb-2">The following organizations may link to our website without prior approval:</p>
            <ul className="list-none space-y-2">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory services</li>
            </ul>
            <p className="mt-2">
              Other businesses may request linking permission by emailing
              <a href="mailto:support@techprohosting.com" className="text-blue-600 hover:underline">
                {" "}
                support@techprohosting.com
              </a>
              . Approved links must not misrepresent sponsorship or affiliation.
            </p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 6 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("iframes")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">6. iFrames</h2>
            <span className="text-blue-800 text-xl">{activeSection === "iframes" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "iframes" ? "block" : "hidden"}`}
          >
            <p>
              You may not create frames around our webpages that alter the visual presentation of our Site without
              written permission.
            </p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Sections 7-11 */}
        {/* Section 7 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("content-liability")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">7. Content Liability</h2>
            <span className="text-blue-800 text-xl">{activeSection === "content-liability" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "content-liability" ? "block" : "hidden"}`}
          >
            <p>
              We are not responsible for content appearing on third-party websites linking to or from TechPro Hosting.
            </p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 8 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("privacy")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">8. Your Privacy</h2>
            <span className="text-blue-800 text-xl">{activeSection === "privacy" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "privacy" ? "block" : "hidden"}`}
          >
            <p>
              Please review our <em>Privacy Policy</em> for details on how we handle user data.
            </p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 9 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("reservation")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">9. Reservation of Rights</h2>
            <span className="text-blue-800 text-xl">{activeSection === "reservation" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "reservation" ? "block" : "hidden"}`}
          >
            <p className="mb-2">We reserve the right to:</p>
            <ul className="list-none space-y-2">
              <li>Remove links that do not comply with our policies.</li>
              <li>Amend these Terms and Conditions at any time.</li>
            </ul>
            <p className="mt-2">By continuing to use our Site, you agree to be bound by the updated terms.</p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 10 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("disclaimer")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">10. Disclaimer</h2>
            <span className="text-blue-800 text-xl">{activeSection === "disclaimer" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "disclaimer" ? "block" : "hidden"}`}
          >
            <p className="mb-2">To the maximum extent permitted by law:</p>
            <ul className="list-none space-y-2">
              <li>We do not guarantee the accuracy or availability of our website content.</li>
              <li>We are not liable for any loss or damage arising from website use.</li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        {/* Section 11 */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection("contact")}
            className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
          >
            <h2 className="text-xl font-bold text-blue-800">11. Contact Information</h2>
            <span className="text-blue-800 text-xl">{activeSection === "contact" ? "−" : "+"}</span>
          </button>

          <div
            className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "contact" ? "block" : "hidden"}`}
          >
            <p className="mb-2">For inquiries regarding these Terms and Conditions, contact us at:</p>
            <p>
              📧{" "}
              <a href="mailto:support@techprohosting.com" className="text-blue-600 hover:underline">
                support@techprohosting.com
              </a>
            </p>
            <p>📞 +91-8069409932</p>
          </div>
        </div>

        <hr className="border-t border-blue-200 my-6" />

        <p className="text-center text-sm text-gray-600 mt-8">© 2025 TechPro Hosting. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default TermsAndConditions
