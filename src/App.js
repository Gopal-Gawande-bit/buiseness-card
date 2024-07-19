import logo from "./logo.svg"
import "./App.css"
import { Header } from "./components/Header/Header"
import { About } from "./components/About/About"
import { Footer } from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
