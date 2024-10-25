import React from 'react'
import MainSection from '../components/MainSection'
import Brands from '../components/Brands'
import Features from '../components/Features'
import Carousel from '../components/Carousel'
import ShowCase from '../components/ShowCase'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <>
      <MainSection/>
      <Brands/>
      <Features />
      <Carousel/>
      <ShowCase/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <NewsLetter/>
  </>
  )
}

export default Home