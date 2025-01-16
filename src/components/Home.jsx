import React from 'react'
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Classes from './Classes';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Classes/>
        <Testimonials/>
    </div>
  )
}

export default Home


