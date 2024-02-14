import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import Datas from './components/Datas.jsx'
import FetchData from './components/FetchData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchData/>
  </React.StrictMode>,
)
