import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './Footer'
import "../styles/global.scss"
import '../styles/layout.scss'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>
        {children}
        </main>  
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
