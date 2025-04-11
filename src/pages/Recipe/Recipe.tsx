import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

import cl from './Recipe.module.scss'

import { RECIPES } from '@src/fakeData/recipes'
import { Recipe as RecipeType } from '@src/types'
import Section from '@src/HOC/Section'
import RecipeDecsription from '@src/components/RecipeDescription'
import RecipeSteps from '@src/components/RecipeSteps'
import RecipesList from '@src/components/RecipesList'

export default function Recipe() {
   const { id } = useParams()
   const [recipe, setRecipe] = useState<RecipeType | undefined>(undefined)
   const [loading, setLoading] = useState(true)

   // <Fake fetc>
   const getRecipe = async () =>
      await Promise.resolve(
         setTimeout(() => {
            setRecipe(RECIPES.find((recipe) => `${recipe.id}` === id))
            setLoading(false)
         }, 500)
      )
   useEffect(() => {
      getRecipe()
   }, [])
   // </Fake fetc>

   return (
      <Section>
         {loading ? (
            <h2>Loading...</h2>
         ) : recipe ? (
            <>
               <RecipeDecsription
                  title={recipe.title}
                  semiTitle={recipe.semiTitle}
                  description={recipe.description}
                  image={recipe.image}
                  ingredients={recipe.ingredients}
                  time={recipe.time}
                  className={cl.decsription}
               />
               <RecipeSteps steps={recipe.steps} />
               <RecipesList recipes={[1]} />
            </>
         ) : (
            <h2>
               Not found. Please, return to the <Link to="/">main page</Link>
            </h2>
         )}
      </Section>
   )
}
