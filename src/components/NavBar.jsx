import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <div>
            <nav className='bg-black text-white-text p-3'>
                <div className='overflow-hidden'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-primary text-xl sm:text-2xl md:3xl'>Gym
                            <span className='text-secondary'>Nest</span>
                        </h1>
                        <div className='hidden lg:flex justify-between items-center space-x-4'>
                            <Link to="/" className="hover:text-primary transition-all duration-500 capitalize">Home</Link>
                            <Link to="/about" className="hover:text-primary transition-all duration-500 capitalize">About</Link>
                            <Link to="/services" className="hover:text-primary transition-all duration-500 capitalize">Services</Link>
                            <Link to="/classes" className="hover:text-primary transition-all duration-500 capitalize">Classes</Link>
                            <Link to="/gallery" className="hover:text-primary transition-all duration-500 capitalize">Gallery</Link>
                            <Link to="/contact" className="hover:text-primary transition-all duration-500 capitalize">Contact</Link>
                            <Link to="/plans" className="hover:text-primary transition-all duration-500 capitalize">Formulate Exercise</Link>
                        </div>
                        <div className='cursor-pointer group relative transition-transform duration-300 lg:opacity-0' onClick={toggleMenu}>
                            <div className='w-9 h-1 bg-white m-1.5 group-hover:bg-secondary transition-all duration-300'></div>
                            <div className='w-9 h-1 bg-white m-1.5 group-hover:bg-secondary'></div>
                            <div className='w-9 h-1 bg-white m-1.5 group-hover:bg-secondary'></div>
                        </div>
                    </div>
                    <div className={`z-10 mobile-links overflow-hidden absolute left-0 w-full flex flex-col text-center text-white items-start space-y-4 p-3 transition-transform duration-700 lg:hidden bg-secondary ${isOpenMenu ? 'block' : 'hidden'}`}>
                        <Link to="/" className="hover:text-primary transition-all duration-500 capitalize" onClick={toggleMenu}>Home</Link>
                        <Link to="/about" className="hover:text-primary transition-all duration-500 capitalize" onClick={toggleMenu}>About</Link>
                        <Link to="/services" className="hover:text-primary transition-all duration-500 capitalize" onClick={toggleMenu}>Services</Link>
                        <Link to="/classes" className="hover:text-primary transition-all duration-500 capitalize" onClick={toggleMenu}>Classes</Link>
                        <Link to="/gallery" className="hover:text-primary transition-all duration-500 capitalize" onClick={toggleMenu}>Gallery</Link>
                        <Link to="/contact" className="hover:text-primary transition-all duration-500 capitalize" onClick={toggleMenu}>Contact</Link>
                        <Link to="/plans" className="hover:text-primary transition-all duration-500 capitalize" onClick={toggleMenu}>Formulate Exercise</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar