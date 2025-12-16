import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-colors">
              BrandLogo
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button (Placeholder for simplicity, logic can be added later) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
