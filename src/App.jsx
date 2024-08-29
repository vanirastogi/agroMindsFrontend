import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import NotFound from './components/NotFound';

function App() {


  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/about' element = {<About />}></Route>
          <Route path='/contact' element = {<Contact />}></Route>
          <Route path='*' element = {<NotFound />}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
