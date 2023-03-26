import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { AuthContextProvider } from './context/AuthContext'
import {BrowserRouter as Router} from 'react-router-dom'
const AuthContextProv = AuthContextProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProv>
      <Router>
    <App />
    </Router>
    </AuthContextProv>
    
  </React.StrictMode>
)
