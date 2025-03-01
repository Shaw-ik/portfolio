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
      <Header className="fixed top-3 left-1/2 -translate-x-1/2 mt-4" />
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