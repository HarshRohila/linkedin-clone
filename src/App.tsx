import { useEffect } from "react"
import "./App.css"
import Button from "@mui/material/Button"

function App() {
  useEffect(() => {
    fetch("/api/posts")
  })

  return (
    <>
      <ButtonUsage />
    </>
  )
}

function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>
}

export default App
