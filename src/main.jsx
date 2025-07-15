// main.jsx
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

// Componente que agrupa todos los contextos
const AppProviders = ({ children }) => (
  <CartProvider>
    <AdminProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </AdminProvider>
  </CartProvider>
)

const container = document.getElementById('root')

// Evita múltiple createRoot (opcional si usás HMR en dev)
if (!container._root) {
  container._root = createRoot(container)
}

container._root.render(
  <StrictMode>
    <Router>
      <AppProviders>
        <App />
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
      </AppProviders>
    </Router>
  </StrictMode>
)
