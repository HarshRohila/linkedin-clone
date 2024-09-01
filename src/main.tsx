import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { makeServer } from "./mock-server/index.ts"
import "./material-styles.ts"

makeServer({ environment: "development" })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
