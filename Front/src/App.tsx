import { ThemeProvider } from "./components/theme-provider"
import './App.css'
import Home from "./pages/Home/HomePage"
import { Navbar } from "./components/navbar"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
