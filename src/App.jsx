import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Brands from './components/Brands'
import Features from './components/Features'
import Carousel from './components/Carousel'
import ShowCase from './components/ShowCase'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'
import './index.css'



function App() {

  const [DarkTheme, setDarkTheme] = useState(false)
  const toggleDark = () => {
    setDarkTheme(theme => !theme)
  }

  useEffect(() => {
    const htmlElement= document.documentElement;
    if(DarkTheme) {
      htmlElement.classList.add('dark')
      htmlElement.style.colorScheme = 'dark'
    } else {
      htmlElement.classList.remove('dark')
      htmlElement.style.colorScheme = 'light'
    }
  }, [DarkTheme])

  return (
    <>
    <nav>
        <Header DarkTheme={DarkTheme} toggleDark={toggleDark}/>
    </nav>
    <main>
        <MainSection/>
        <Brands/>
        <Features/>
        <Carousel/>
        <ShowCase/>
        <Testimonials/>
        <FAQ/>
        <Contact/>
        <NewsLetter/>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default App