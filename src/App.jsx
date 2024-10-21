import React from 'react'
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




function App() {
  return (
    <>
    <nav>
        <Header/>
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