import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductPage from './ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductPage />
  </StrictMode>,
)
