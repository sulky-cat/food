import { Routes, Route } from 'react-router'

import App from './App.tsx'
import Recipes from './pages/Recipes'
import Recipe from './pages/Recipe'

export default function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<App />}>
            <Route index element={<Recipes />} />
            <Route path="recipe/:id" element={<Recipe />} />

            <Route path="*" element={<div>404</div>} />
         </Route>
      </Routes>
   )
}
