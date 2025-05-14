"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import sourceImage from "../assets/source.svg" // ✅ adjust path if needed

const heroStyles = {
  section: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
  },
  content: {
    transition: "opacity 1s ease-in-out",
  },
}

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = "1"
      heroRef.current.style.transform = "translateY(0)"
    }
  }, [])

  return (
    <section
      className="pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      style={heroStyles.section}
    >
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto"
        style={{
          ...heroStyles.content,
          opacity: 1,
        }}
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Maximize the Value of</span>
              <span className="block text-emerald-600 dark:text-emerald-400">Your Software Licenses</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Turn your unused or excess software licenses into cash. SoftSell provides a secure, transparent
              marketplace for businesses to sell their software assets at competitive prices.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
                >
                  Sell My Licenses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  Learn How It Works
                </a>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={sourceImage}
                alt="Software dashboard illustration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 right-4 bg-gray-900 bg-opacity-80 text-white px-4 py-2 rounded-md shadow-md text-sm sm:text-base">
                <div className="font-semibold text-emerald-400">Average Return</div>
                <div className="text-xl font-bold">70%</div>
                <div className="text-xs text-gray-300">of original license cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
