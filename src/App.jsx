import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const App = () => {
     const [theme, setTheme] = useState(false);
  return (
    <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
        <Route path="/projects" element={<Projects theme={theme} setTheme={setTheme}/>} />
        <Route path="/about" element={<About theme={theme} setTheme={setTheme}/>} />
         <Route path="/contact" element={<Contact theme={theme} setTheme={setTheme}/>} />
    </Routes>
  )
}

export default App