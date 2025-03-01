/************* 
  Components 
  ************/
import Header from '@/components/Header'
import Home from '@/components/Home'
import Skill from '@/components/Skill'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header className="fixed top-2 left-1/2 -translate-x-1/2 shadow-lg shadow-indigo-900/10" />
      <main>
        <Home />
        <Skill />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App