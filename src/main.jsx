import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css'

const RootProvider = ({ children }) => (
  
    <CartProvider>
      <AdminProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </AdminProvider>
    </CartProvider>
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <RootProvider>
        <App />
      </RootProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </Router>
  </StrictMode>
)
