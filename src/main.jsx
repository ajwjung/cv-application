import React from 'react'
import ReactDOM from 'react-dom/client'
import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Form Fields</h1>
    <General />
    <Education />
    <Experience />
    <Projects />
    <Skills />
  </React.StrictMode>,
)
