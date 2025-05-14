"use client"

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

const Testimonials = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    // Make the section visible immediately
    if (sectionRef.current) {
      sectionRef.current.style.opacity = "1"
      sectionRef.current.style.transform = "translateY(0)"
    }
  }, [])

  const testimonials = [
    {
      id: 1,
      content:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses after our company downsized. The process was seamless and their valuation was higher than we expected.",
      author: "Sarah Johnson",
      role: "CIO",
      company: "TechGrowth Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      content:
        "As a CFO, I'm always looking for ways to optimize our IT spend. SoftSell turned our shelf-ware into working capital with minimal effort on our part. Their compliance team handled all the complex transfer requirements.",
      author: "Michael Chen",
      role: "CFO",
      company: "Innovate Solutions",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section
      id="testimonials"
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
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about their experience with SoftSell.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <svg className="h-8 w-8 text-emerald-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                    />
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
