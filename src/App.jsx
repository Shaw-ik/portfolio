import './App.css'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-stone-800">
      <Header />
      <main>
        <Home />
        <Contact />
      </main>
    </div>
  )
}

export default App