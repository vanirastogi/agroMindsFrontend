import React from 'react'
import Navbar from './Navbar'
import Slider from 'react-slick'
import ImageSlider from './ImageSlider'
import Footer from './Footer'
import Services from './Services'

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Services />
     
      <Footer />

    </>
  )
}

export default Home
