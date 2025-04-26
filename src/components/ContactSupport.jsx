"use client"
import TawkToChat from "../AIChat/AIChat" // Import the TawkToChat component

const ContactSupport = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">We're Here to Help!</h2>
          <p className="text-xl text-gray-700">
            Reach out to our support team for any questions or assistance you may need.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-4">Our friendly support team is available to assist you 24/7.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a
                    href="mailto:info@swaget.in"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    info@swaget.in
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <a
                    href="tel:+11234567890"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    Phone : 08069409932{" "}
                  </a>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.999 1.999 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">L-87 B, Saket, New Delhi – 110017</span>
                </li>
              </ul>

              {/* Add a live chat option */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Need immediate help?</h4>
                <button
                  onClick={() => window.Tawk_API?.maximize()}
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  Start Live Chat
                </button>
              </div>
            </div>
            <div className="p-12 bg-gray-50">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300">
                  Send Message
                </button>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Share Our Services</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://techprohosting.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/intent/tweet?url=https://techprohosting.com&text=Check out TechPro Hosting for premium web hosting solutions!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://techprohosting.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Include the TawkToChat component */}
      <TawkToChat />
    </section>
  )
}

export default ContactSupport
