"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navStyles = {
  nav: {
    position: "fixed",
    width: "100%",
    zIndex: 50,
    transition: "all 0.3s ease",
  },
  scrolledDark: {
    backgroundColor: "#111827",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      style={{
        ...navStyles.nav,
        ...(isScrolled ? navStyles.scrolledDark : {}),
      }}
      className={`transition-all duration-300 ${isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold text-emerald-400">
                  Soft<span className="text-white">Sell</span>
                </span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#why-choose-us" className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Why Choose Us
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Get a Quote
              </a>
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 shadow-lg">
          <a href="#how-it-works" className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
            How It Works
          </a>
          <a href="#why-choose-us" className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <a href="#contact" className="bg-emerald-600 hover:bg-emerald-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
