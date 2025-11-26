"use client";
import React, { useState} from 'react'; // Import useEffect
import {Menu,X} from 'lucide-react';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Edigrad', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <a href="#" className="flex items-center space-x-2">
          {/* Logo Image */}
          <img src='/logo.png'
            alt="Edigrad International Logo" 
            className="w-15 h-auto rounded-full" // Adjust size as needed
            onError={(e) => { 
              e.target.src = 'https://placehold.co/40x40/FEE2E2/DC2626?text=Logo'; 
              e.target.onerror = null; 
            }}
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-red-600 font-cent">Edigrad International</span>
            <span className="text-[18px] text-gray-900 italic font-commercial">unlock your potential</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 font-medium hover:text-red-600 transition-colors">
              {item.name}
            </a>
          ))}
          <a
            href="https://forms.gle/your-google-form-link" // <-- !! REPLACE WITH YOUR GOOGLE FORM LINK
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-red-700 transition-all transform hover:scale-105"
          >
            Live Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40 p-5 space-y-3 border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-700 font-sans font-medium hover:text-red-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://forms.gle/your-google-form-link" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-red-600 text-white px-5 py-3 rounded-lg font-medium shadow-md hover:bg-red-700 transition-transform mt-2"
          >
            Register for Live Demo
          </a>
        </div>
      )}
    </header>
  )
}

export default Header