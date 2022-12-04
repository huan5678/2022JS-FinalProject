import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Dashboard from './Dashboard';
import {FrontendContextProvider} from './context/FrontendContextStore';
import {BackendContextProvider} from './context/BackendContextStore';
import './index.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FrontendContextProvider>
        <Routes>
          <Route path="/" index element={<App />} />
        </Routes>
      </FrontendContextProvider>
      <BackendContextProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BackendContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
