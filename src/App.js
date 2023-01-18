import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home'
import Nav from './components/navbar/Nav'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App


