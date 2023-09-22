import React from 'react'
import ReactDOM from 'react-dom/client'
import { General, Education } from './components/FormFields.jsx'
// import GeneratedCv from './components/GeneratedCv.jsx'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <General />
    <Education />
    {/* <GeneratedCv /> */}
  </React.StrictMode>,
)
