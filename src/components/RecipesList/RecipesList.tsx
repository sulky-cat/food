import cl from './RecipesList.module.scss'

import { RecipesListProps } from '@src/types'
import Dish from '@src/components/Dish'

export default function RecipesList({
   recipes,
   mainTitle,
   secondTitle,
}: RecipesListProps) {
   return (
      <>
         {mainTitle && <h1 className={cl.title}>{mainTitle}</h1>}
         {secondTitle && <h1 className={cl.title}>{secondTitle}</h1>}
         <div className={cl.recipes}>
            {recipes.map((recipe) => (
               <Dish key={recipe.id} {...recipe} />
            ))}
         </div>
      </>
   )
}
