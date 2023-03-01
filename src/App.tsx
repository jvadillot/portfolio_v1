import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Aboutme from './components/Aboutme'
import CareerExp from './components/CareerExp'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar />
        <Hero />
        <Aboutme />
        <CareerExp />
        <Projects  projects={[]}/>
        <Contact  />
    </div>
  )
}

export default App
