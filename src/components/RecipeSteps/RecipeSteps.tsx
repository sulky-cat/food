import cl from './RecipeSteps.module.scss'

import { RecipeStepsProps } from '@src/types'

export default function RecipeSteps({ steps }: RecipeStepsProps) {
   return (
      <>
         <h2 className={cl.title}>How to cook:</h2>
         <ol className={cl.list}>
            {steps.map((step, i) => (
               <li className={cl.step} key={i}>
                  <div className={cl.description}>{step.description}</div>
                  <div className={cl.picture}>
                     <img src={step.image} alt={`Step ${i + 1}`} />
                  </div>
               </li>
            ))}
         </ol>
      </>
   )
}
