import { useEffect, useState } from 'react'

import { Dish } from '@src/types'
import { RECIPES_LIST } from '@src/fakeData/recopesList'
import RecipesList from '@src/components/RecipesList'
import Section from '@src/HOC/Section'

export default function Recipes() {
   const [recipes, setRecipes] = useState<Dish[]>([])
   const [loading, setLoadig] = useState(true)

   // <Fake fetch>
   const getData = async () =>
      await Promise.resolve(
         setTimeout(() => {
            setRecipes(RECIPES_LIST)
            setLoadig(false)
         }, 500)
      )
   useEffect(() => {
      getData()
   }, [])
   // </Fake fetch>

   return (
      <Section>
         {loading ? (
            <h2>Loading...</h2>
         ) : recipes.length > 0 ? (
            <RecipesList mainTitle="All recipes" recipes={recipes} />
         ) : (
            <h2>No recipes</h2>
         )}
      </Section>
   )
}
