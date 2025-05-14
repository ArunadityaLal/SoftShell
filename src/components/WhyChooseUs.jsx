"use client"

import { Shield, Clock, DollarSign, Award } from "lucide-react"
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

const WhyChooseUs = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Make the section visible immediately
    if (sectionRef.current) {
      sectionRef.current.style.opacity = "1"
      sectionRef.current.style.transform = "translateY(0)"
    }
  }, [])

  const features = [
    {
      id: 1,
      title: "Secure Transactions",
      description:
        "Our platform uses bank-level encryption and secure escrow services to protect your assets and financial information.",
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
    },
    {
      id: 2,
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and payment within 3-5 business days after accepting our offer.",
      icon: <Clock className="h-10 w-10 text-emerald-500" />,
    },
    {
      id: 3,
      title: "Best Market Rates",
      description:
        "Our extensive network of buyers ensures you get the highest possible value for your software licenses.",
      icon: <DollarSign className="h-10 w-10 text-emerald-500" />,
    },
    {
      id: 4,
      title: "Compliance Guaranteed",
      description: "We handle all legal and compliance aspects of the transfer, ensuring a worry-free experience.",
      icon: <Award className="h-10 w-10 text-emerald-500" />,
    },
  ]

  return (
    <section
      id="why-choose-us"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Why Choose SoftSell</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            We've helped thousands of businesses recover value from their unused software assets.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
