import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css" // Keep only Tailwind directives

// Apply global styles directly to the document
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.scrollBehavior = "smooth"

  // Create a style element for critical CSS
  const style = document.createElement("style")
  style.textContent = `
    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .dark {
      color-scheme: dark;
    }

    /* Fix for Tailwind forms in dark mode */
    .dark input, .dark select, .dark textarea {
      background-color: #1f2937;
      border-color: #374151;
      color: #f9fafb;
    }

    /* Fix for button focus states */
    button:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    /* Fix for links */
    a {
      text-decoration: none;
    }
  `
  document.head.appendChild(style)
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
