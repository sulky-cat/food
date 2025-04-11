import { FaRegClock } from 'react-icons/fa6'

import cl from './RecipeDecsription.module.scss'

import { RecipeDecsriptionProps } from '@src/types'

const getTime = (time: number) => {
   const h = Math.floor(time / 60)
   const m = time % 60

   const hourText = h > 0 ? `${h} ${h > 1 ? 'hours' : 'hour'}` : ''
   const minuteText = m > 0 ? `${m} ${m > 1 ? 'minutes' : 'minute'}` : ''

   return `${hourText} ${minuteText}`
}

export default function RecipeDecsription({
   title,
   semiTitle,
   description,
   image,
   ingredients,
   time,
   className,
}: RecipeDecsriptionProps & { className?: string }) {
   return (
      <div className={className}>
         <div className={cl.aboutDish}>
            <div className={cl.information}>
               <h1 className={cl.title}>{title}</h1>
               {semiTitle && <h2 className={cl.semiTitle}>{semiTitle}</h2>}
               <p className={cl.description}>{description}</p>
            </div>
            <img className={cl.image} src={image} alt={title} />
         </div>
         <div className={cl.ingridients}>
            <h3 className={cl['ingridients-title']}>Ingredients:</h3>
            <ul className={cl['ingridients-list']}>
               {ingredients.map((ingridient, i) => (
                  <li className={cl['ingridients-item']} key={i}>
                     {ingridient}
                  </li>
               ))}
            </ul>
         </div>

         {time && (
            <div className={cl.time}>
               {getTime(time)}
               <FaRegClock />
            </div>
         )}
      </div>
   )
}
