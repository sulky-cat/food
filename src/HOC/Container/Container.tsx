import clsx from 'clsx'
import { HOCProps } from '../../types'

import cl from './Container.module.scss'

export default function Container({ children, className }: HOCProps) {
   return <div className={clsx(cl.container, className)}>{children}</div>
}
