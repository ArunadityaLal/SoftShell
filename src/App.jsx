"use client"

import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "./components/Testimonials"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import ChatWidget from "./components/ChatWidget"

const appStyles = {
  root: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
    document.body.style.backgroundColor = "#111827"
    document.body.style.color = "#f9fafb"

    const style = document.createElement("style")
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #2d3748;
      }
      ::-webkit-scrollbar-thumb {
        background: #4a5568;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #718096;
      }

      .dark input, .dark select, .dark textarea {
        color-scheme: dark;
      }

      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-25%); }
      }
      .animate-bounce {
        animation: bounce 1s infinite;
      }

      * {
        transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300" style={appStyles.root}>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
