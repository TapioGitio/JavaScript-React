import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'



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
    <BrowserRouter>
      <nav>
          <Header DarkTheme={DarkTheme} toggleDark={toggleDark}/>
      </nav>
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>  
            <Route path='/contacts' element={<Contacts />}></Route>  
          </Routes> 
        </main>
      <footer>
          <Footer/>
      </footer>
    </BrowserRouter>
  )
}

export default App