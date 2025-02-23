import './App.css'
import Header from '@/components/Header'
import Home from '@/components/Home'

function App() {
  return (
    <div className="min-h-screen bg-stone-800">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App