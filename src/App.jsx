/************* 
  Components 
  ************/
import Header from '@/components/Header'
import Home from '@/components/Home'
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App