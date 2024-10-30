import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contacts from './pages/Contacts'



function App() {

  return (
    <BrowserRouter>
      <nav>
          <Header/>
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