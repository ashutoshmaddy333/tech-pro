"use client"

import dynamic from "next/dynamic"

// Dynamically import App with no SSR
const App = dynamic(() => import("../App"), { ssr: false })

export default function ClientWrapper() {
  return <App />
}
