import { ThemeProvider } from "./components/theme-provider"
import './App.css'
import Home from "./pages/Home/HomePage"
import Navbar  from "./components/navbar"
import { Route, Routes } from "react-router-dom"
import { CreateTodo } from "./pages/Todo/CreateTodoPage"
import { UpdateTodo } from "./pages/Todo/EditTodoPage"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-todo" element={<CreateTodo />} />
          <Route path="/todos/:taskId" element={<UpdateTodo />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
