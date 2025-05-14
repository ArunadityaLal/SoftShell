"use client"

import { Upload, DollarSign, CreditCard } from "lucide-react"
import { useEffect, useRef } from "react"

// Component-specific styles
const sectionStyles = {
  section: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "50vh",
  },
  content: {
    transition: "opacity 1s ease-in-out",
  },
}

const HowItWorks = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Make the section visible immediately
    if (sectionRef.current) {
      sectionRef.current.style.opacity = "1"
      sectionRef.current.style.transform = "translateY(0)"
    }
  }, [])

  const steps = [
    {
      id: 1,
      title: "Upload License",
      description:
        "Submit your software license details through our secure portal. We accept licenses from major vendors including Microsoft, Adobe, Oracle, and more.",
      icon: <Upload className="h-12 w-12 text-emerald-500" />,
    },
    {
      id: 2,
      title: "Get Valuation",
      description:
        "Our experts analyze your license and provide a competitive market valuation within 24 hours, ensuring you get the best possible price.",
      icon: <DollarSign className="h-12 w-12 text-emerald-500" />,
    },
    {
      id: 3,
      title: "Get Paid",
      description:
        "Accept our offer and receive payment via your preferred method. We handle all the transfer paperwork and compliance requirements.",
      icon: <CreditCard className="h-12 w-12 text-emerald-500" />,
    },
  ]

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
      style={sectionStyles.section}
    >
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto"
        style={{
          ...sectionStyles.content,
          opacity: 1, // Start visible
        }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">How It Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Selling your software licenses has never been easier. Our streamlined process gets you paid quickly and
            securely.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 dark:bg-emerald-900 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2">
                    <svg
                      className="h-10 w-10 text-gray-300 dark:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
