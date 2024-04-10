import React from 'react'
import {Outlet} from  "react-router-dom"
import Navbar from '../Navbar/Navbar'

const Layout = ({theme, darkTheme, lightTheme}) => {
  return (
    <>
        <Navbar theme={theme} darkTheme={darkTheme} lightTheme={lightTheme}/>
        <Outlet />
    </>
  )
}

export default Layout