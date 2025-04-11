import cl from './Section.module.scss'

import { HOCProps } from '@src/types'
import Container from '../Container/Container'

export default function Section({ children }: HOCProps) {
   return (
      <section className={cl.section}>
         <Container>{children}</Container>
      </section>
   )
}
