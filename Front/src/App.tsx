import { ThemeProvider } from "./components/theme-provider"
import './App.css'
import Home from "./pages/Home/HomePage"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
