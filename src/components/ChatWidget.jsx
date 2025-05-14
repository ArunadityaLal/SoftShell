"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send } from "lucide-react"

// Component-specific styles
const chatStyles = {
  container: {
    position: "fixed",
    bottom: "1.5rem",
    right: "1.5rem",
    zIndex: 50,
  },
  button: {
    borderRadius: "9999px",
    padding: "1rem",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  chatWindow: {
    position: "absolute",
    bottom: "5rem",
    right: 0,
    width: "24rem",
    borderRadius: "0.5rem",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
  },
  chatHeader: {
    padding: "1rem",
  },
  chatMessages: {
    flexGrow: 1,
    padding: "1rem",
    overflowY: "auto",
    maxHeight: "24rem",
  },
  typingIndicator: {
    display: "flex",
    space: "0.25rem",
  },
  typingDot: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "9999px",
    animation: "bounce 1s infinite",
  },
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 How can I help you with selling your software licenses today?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = { id: messages.length + 1, text: inputValue, isBot: false }
    setMessages([...messages, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      let botResponse
      const lowercaseInput = inputValue.toLowerCase()

      if (lowercaseInput.includes("how do i sell")) {
        botResponse =
          "To sell your licenses, simply fill out our contact form with details about your software. Our team will provide a valuation within 24 hours!"
      } else if (
        lowercaseInput.includes("price") ||
        lowercaseInput.includes("value") ||
        lowercaseInput.includes("worth")
      ) {
        botResponse =
          "License values vary based on type, age, and demand. We typically offer 40-70% of the original purchase price. Submit your details for a free valuation!"
      } else if (lowercaseInput.includes("time") || lowercaseInput.includes("how long")) {
        botResponse =
          "Our process is quick! You'll receive a valuation within 24 hours, and payment within 3-5 business days after accepting our offer."
      } else if (lowercaseInput.includes("compliance") || lowercaseInput.includes("legal")) {
        botResponse =
          "Don't worry about the legal aspects! Our compliance team handles all transfer paperwork and ensures all transactions meet vendor requirements."
      } else {
        botResponse =
          "Thanks for your message! For specific questions about selling your software licenses, please fill out our contact form and our team will get back to you within 24 hours."
      }

      setMessages((prev) => [...prev, { id: prev.length + 1, text: botResponse, isBot: true }])
      setIsTyping(false)
    }, 1500)
  }

  const exampleQuestions = [
    "How do I sell my licenses?",
    "What's my software worth?",
    "How long does the process take?",
    "Is this process compliant with licensing terms?",
  ]

  const handleExampleClick = (question) => {
    setInputValue(question)
    // Focus the input after setting the value
    document.getElementById("chat-input").focus()
  }

  return (
    <div style={chatStyles.container}>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Chat with us"
        style={chatStyles.button}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden transition-all duration-300 flex flex-col border border-gray-200 dark:border-gray-700"
          style={chatStyles.chatWindow}
        >
          {/* Chat header */}
          <div className="bg-emerald-600 text-white p-4" style={chatStyles.chatHeader}>
            <h3 className="font-medium">SoftSell Support</h3>
            <p className="text-sm text-emerald-100">We typically reply in a few minutes</p>
          </div>

          {/* Chat messages */}
          <div
            className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50 dark:bg-gray-800"
            style={chatStyles.chatMessages}
          >
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-3/4 rounded-lg p-3 ${
                    message.isBot
                      ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      : "bg-emerald-600 text-white"
                  } shadow-sm`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="max-w-3/4 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm">
                  <div className="flex space-x-1" style={chatStyles.typingIndicator}>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ ...chatStyles.typingDot, animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ ...chatStyles.typingDot, animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ ...chatStyles.typingDot, animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Example questions */}
          <div className="p-3 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(question)}
                  className="text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Chat input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex"
          >
            <input
              id="chat-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 dark:border-gray-700 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-r-lg px-4 py-2 transition-colors"
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ChatWidget
