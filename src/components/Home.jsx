import React from 'react'
import MainSection from './MainSection'
import Brands from './Brands'
import Features from './Features'
import Carousel from './Carousel'
import ShowCase from './ShowCase'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'
import NewsLetter from './NewsLetter'

function Home() {
  return (
    <div>
        <MainSection/>
        <Brands/>
        <Features/>
        <Carousel/>
        <ShowCase/>
        <Testimonials/>
        <FAQ/>
        <Contact/>
        <NewsLetter/>
    </div>
  )
}

export default Home