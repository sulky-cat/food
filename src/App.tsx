import { Outlet } from 'react-router'
import Header from './components/Header'
import Container from './HOC/Container/Container'
import Main from './HOC/Main'

export default function App() {
   return (
      <>
         <Header />

         <Main>
            <Outlet />
         </Main>

         <footer className="footer">
            <Container>@ 2025. SC.</Container>
         </footer>
      </>
   )
}
