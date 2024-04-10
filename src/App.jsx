import React, { useEffect, useState } from 'react'
import "./App.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const App = () => {

  const [theme, setTheme] = useState("dark")

  const darkTheme = () => {
    setTheme("dark")
  }
  const lightTheme = () => {
    setTheme("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(theme)
  }, [theme])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout theme={theme} darkTheme={darkTheme} lightTheme={lightTheme} />} >
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Route>
    )
  )

  return (
    <>
      <div className='dark:bg-Background light:bg-white min-h-screen w-full dark:text-white text-black transition-all duration-300'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App