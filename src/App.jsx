import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Plans from './components/Plans';
import Classes from './components/Classes';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <BackToTop />
        <Footer/>
      </Router>
    </>
  )
}

export default App
