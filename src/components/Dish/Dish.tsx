import { Link } from 'react-router'

import cl from './Dish.module.scss'

import { Dish as DishProps } from '@src/types'

export default function Dish({
   id,
   title,
   image,
   user_id,
   user_name,
}: DishProps) {
   return (
      <article className={cl.card}>
         <Link className={cl.image} to={`recipe/${id}`}>
            <img src={image} alt={title} />
         </Link>
         <div className={cl.footer}>
            <div className={cl.userIcon}>{user_id}</div>
            <div className={cl.info}>
               <h3 className={cl.title}>{title}</h3>
               <div className={cl.userName}>by {user_name}</div>
            </div>
         </div>
      </article>
   )
}
