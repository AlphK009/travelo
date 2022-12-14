import { ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'
import 'tailwindcss/tailwind.css';
interface Props {
  children: ReactNode
  noFooter?: boolean
}

const Layout = ({ children, noFooter = false }: Props) => {
  return (
    <>
      <Header />
      {children}
      {noFooter ? null : <Footer />}
    </>
  )
}

export default Layout
