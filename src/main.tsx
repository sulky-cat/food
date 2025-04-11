import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './styles/index.scss'

import AllRoutes from './Routes.tsx'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <AllRoutes />
      </BrowserRouter>
   </StrictMode>
)
