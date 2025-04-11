import { Link } from 'react-router'

import cl from './Header.module.scss'

import Logo from '@public/logo.svg'
import Container from '@src/HOC/Container/Container'
import Search from '@src/components/Search'

export default function Header() {
   return (
      <header className={cl.header}>
         <Container className={cl.container}>
            <Link className={cl.logo} to="./">
               <img src={Logo} alt="Holy fooder" />
            </Link>
            <Search className={cl.search} />
         </Container>
      </header>
   )
}
