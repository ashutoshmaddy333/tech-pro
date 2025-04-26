"use client"

import { useEffect, useState } from "react"

const TawkToChat = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (typeof window !== "undefined") {
      // Initialize Tawk.to script
      const Tawk_API = window.Tawk_API || {}
      const Tawk_LoadStart = new Date()

      // Create and inject the script
      const s1 = document.createElement("script")
      const s0 = document.getElementsByTagName("script")[0]

      s1.async = true
      s1.src = "https://embed.tawk.to/65212e0eeb150b3fb99f010a/1hc4pnqoe"
      s1.charset = "UTF-8"
      s1.setAttribute("crossorigin", "*")

      // Insert the script before the first script tag in the document
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0)
      } else {
        document.head.appendChild(s1)
      }
    }

    // Cleanup function
    return () => {
      if (typeof window !== "undefined") {
        // Clean up the script when component unmounts
        const script = document.querySelector('script[src="https://embed.tawk.to/65212e0eeb150b3fb99f010a/1hc4pnqoe"]')
        if (script && script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [isMounted])

  // This component doesn't render anything visible
  return null
}

export default TawkToChat
