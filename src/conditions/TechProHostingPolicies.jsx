"use client"

import { useState } from "react"

const TechProHostingPolicies = () => {
  const [activeTab, setActiveTab] = useState("refund")
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
      {/* Tabs */}
      <div className="flex mb-6 border-b border-blue-200">
        <button
          className={`py-3 px-6 font-medium text-lg ${activeTab === "refund" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"}`}
          onClick={() => setActiveTab("refund")}
        >
          Refund Policy
        </button>
      </div>

      {/* Refund Policy Content */}
      {activeTab === "refund" && (
        <>
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-center">TechPro Hosting – STANDARD REFUND POLICY</h1>
          </div>

          <div className="p-6">
            <p className="mb-6 italic">
              This Policy is provided in English. In the event of any discrepancy between the English version and any
              translation provided for convenience, the English version will prevail.
            </p>

            <hr className="border-t border-blue-200 my-6" />

            {/* Advance Payments Section */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("advance-payments")}
                className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
              >
                <h2 className="text-xl font-bold text-blue-800">Refund Policy for Advance (Partial) Payments</h2>
                <span className="text-blue-800 text-xl">{activeSection === "advance-payments" ? "−" : "+"}</span>
              </button>

              <div
                className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "advance-payments" ? "block" : "hidden"}`}
              >
                <p>
                  TechPro Hosting (referred to as "TechPro" hereafter) collects an advance payment for services rendered
                  on https://www.techprohosting.com after domain registration, hosting setup, and demonstration of the
                  basic design to customers. This advance payment is non-refundable.
                </p>
              </div>
            </div>

            <hr className="border-t border-blue-200 my-6" />

            {/* Exception for Advance Payments */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("advance-exception")}
                className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
              >
                <h2 className="text-xl font-bold text-blue-800">Exception for Advance (Partial) Payments</h2>
                <span className="text-blue-800 text-xl">{activeSection === "advance-exception" ? "−" : "+"}</span>
              </button>

              <div
                className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "advance-exception" ? "block" : "hidden"}`}
              >
                <p>
                  The advance deposit is refundable only if the domain has not been registered, hosting has not been set
                  up, and the basic design has not been showcased within 72 hours of placing the order for shared
                  hosting, VPS hosting, and customized hosting plans.
                </p>
              </div>
            </div>

            <hr className="border-t border-blue-200 my-6" />

            {/* Second Payment */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("second-payment")}
                className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
              >
                <h2 className="text-xl font-bold text-blue-800">Refund Policy for Second (Full) Payment</h2>
                <span className="text-blue-800 text-xl">{activeSection === "second-payment" ? "−" : "+"}</span>
              </button>

              <div
                className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "second-payment" ? "block" : "hidden"}`}
              >
                <p>
                  TechPro Hosting collects the remaining payment upon successful completion of work, and these payments
                  are non-refundable.
                </p>
              </div>
            </div>

            <hr className="border-t border-blue-200 my-6" />

            {/* Web Hosting & Server Services */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("hosting-services")}
                className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
              >
                <h2 className="text-xl font-bold text-blue-800">Web Hosting & Server Services Refund Policy</h2>
                <span className="text-blue-800 text-xl">{activeSection === "hosting-services" ? "−" : "+"}</span>
              </button>

              <div
                className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "hosting-services" ? "block" : "hidden"}`}
              >
                <ul className="list-none space-y-2">
                  <li>
                    <em>Shared Hosting, VPS, and Dedicated Servers:</em> Refund requests must be made within 7 days of
                    the initial purchase. Beyond this period, no refunds will be issued.
                  </li>
                  <li>
                    <em>Domain Registration:</em> Domain registration fees are non-refundable once the domain is booked.
                  </li>
                  <li>
                    <em>Software Licensing (cPanel, Plesk, etc.):</em> Once software licenses are activated, they are
                    non-refundable.
                  </li>
                  <li>
                    <em>SSL Certificates:</em> SSL certificate purchases are non-refundable after activation.
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-t border-blue-200 my-6" />

            {/* Digital Marketing Services */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("marketing-services")}
                className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
              >
                <h2 className="text-xl font-bold text-blue-800">Digital Marketing (SEO) Services Refund Policy</h2>
                <span className="text-blue-800 text-xl">{activeSection === "marketing-services" ? "−" : "+"}</span>
              </button>

              <div
                className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "marketing-services" ? "block" : "hidden"}`}
              >
                <p>
                  Cancellation of Digital Marketing (SEO) Services is allowed at any time, and billing for future months
                  will cease, except for the upcoming month. However, no refunds will be issued for the cost of the
                  upcoming or previous months since the service has been planned, prepared, or executed. If cancellation
                  and refund requests occur within 48 hours of initial purchase or renewal, a full refund for that
                  service month can be provided. Beyond this 48-hour window, you are responsible for the current month's
                  payment but will not be billed for future months.
                </p>
              </div>
            </div>

            <hr className="border-t border-blue-200 my-6" />

            {/* Mode of Refund */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("refund-mode")}
                className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
              >
                <h2 className="text-xl font-bold text-blue-800">Mode of Refund</h2>
                <span className="text-blue-800 text-xl">{activeSection === "refund-mode" ? "−" : "+"}</span>
              </button>

              <div
                className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "refund-mode" ? "block" : "hidden"}`}
              >
                <p className="mb-2">
                  Refunds by TechPro Hosting are processed based on the initial payment method. Below are the refund
                  methods for various payment options:
                </p>
                <ul className="list-none space-y-2">
                  <li>
                    <em>Credit Card/Debit Card/Internet Banking:</em> Refunds will be credited back to the respective
                    credit/debit card or internet banking account used for payment. TechPro initiates refunds within a
                    maximum of 5 working days. However, it may take up to 7-10 working days for respective banks to
                    process and reflect the refund in your account. Contact your bank directly for any delays
                    post-confirmation of the refund by TechPro Hosting.
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-t border-blue-200 my-6" />

            {/* Refund Time Frame */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection("refund-timeframe")}
                className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg focus:outline-none"
              >
                <h2 className="text-xl font-bold text-blue-800">Refund Time Frame</h2>
                <span className="text-blue-800 text-xl">{activeSection === "refund-timeframe" ? "−" : "+"}</span>
              </button>

              <div
                className={`mt-2 p-4 bg-blue-50 rounded-lg transition-all duration-300 ${activeSection === "refund-timeframe" ? "block" : "hidden"}`}
              >
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="p-2 border border-blue-200 text-left">Mode of Payment</th>
                        <th className="p-2 border border-blue-200 text-left">Refund Mode</th>
                        <th className="p-2 border border-blue-200 text-left">
                          Refund Time (up to, from the date of order cancellation)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-blue-200">Credit Card</td>
                        <td className="p-2 border border-blue-200">Credit Card</td>
                        <td className="p-2 border border-blue-200">10 Working Days</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-blue-200">Net Banking</td>
                        <td className="p-2 border border-blue-200">Net Banking</td>
                        <td className="p-2 border border-blue-200">10 Working Days</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-blue-200">Debit Card</td>
                        <td className="p-2 border border-blue-200">Debit Card</td>
                        <td className="p-2 border border-blue-200">10 Working Days</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-blue-200">UPI</td>
                        <td className="p-2 border border-blue-200">UPI</td>
                        <td className="p-2 border border-blue-200">10 Working Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  For any queries regarding the refund policy, please contact us at{" "}
                  <a href="mailto:support@techprohosting.com" className="text-blue-600 hover:underline">
                    support@techprohosting.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <hr className="border-t border-blue-200 my-6" />

            <p className="text-center text-sm text-gray-600 mt-8">© 2025 TechPro Hosting. All Rights Reserved.</p>
          </div>
        </>
      )}
    </div>
  )
}

export default TechProHostingPolicies
