import React from 'react'
import ReactDOM from 'react-dom/client'
import FormFields from './components/FormFields.jsx'
// import GeneratedCv from './components/GeneratedCv.jsx'
import '../src/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormFields />
    {/* <GeneratedCv /> */}
  </React.StrictMode>,
)
