import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App(background) {

  return (
    <>
      <BrowserRouter>
        <div className={background}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
