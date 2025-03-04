import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import FlappyPug from './components/FlappyPug/FlappyPug';
import GameLauncher from './components/FlappyPug/GameLauncher';

function App() {
  return (
    <Router>
      <div className="cursor-none md:cursor-none">
        <Routes>
          <Route path="/flappy-pug" element={<FlappyPug />} />
          <Route
            path="/"
            element={
              <>
                <Header className="fixed top-2 left-1/2 -translate-x-1/2 shadow-lg shadow-indigo-900/10" />
                <main>
                  <Home />
                  <Skill />
                  <Experience />
                  <Projects />
                  <Contact />
                </main>
                <Footer />
                <GameLauncher />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;