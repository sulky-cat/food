import clsx from 'clsx'

import cl from './Button.module.scss'

export default function Button(
   props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
   return (
      <button
         type={props.type}
         className={clsx(cl.button, props.className)}
         onClick={props.onClick}
      >
         {props.children}
      </button>
   )
}
