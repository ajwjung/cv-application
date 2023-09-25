import React from 'react'
import ReactDOM from 'react-dom/client'
import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
// import GeneratedCv from './components/GeneratedCv.jsx'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Education />
    <Experience />
    <Projects />
    {/* <GeneratedCv /> */}
  </React.StrictMode>,
)
