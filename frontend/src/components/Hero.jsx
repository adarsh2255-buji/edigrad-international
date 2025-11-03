import React, { useState, useEffect } from 'react'; // Import useEffect
import {  Send} from 'lucide-react';

const Hero = () => {
  return (
    <>
    <main>
        {/* Hero Section */}
            <section className="bg-gray-50 relative overflow-hidden">
              <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                  <h1 className="text-4xl md:text-6xl font-extrabold  text-gray-900 leading-tight mb-6 hero-fade-in">
                    Unlock Your Potential
                    <span className="block text-red-600">in Commerce Studies.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 hero-fade-in-delay ">
                    Welcome to Edigrad International, your personalized online learning bridge for Higher Secondary and Degree Commerce.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 hero-fade-in-delay">
                    <a
                      href="https://forms.gle/your-google-form-link" // <-- !! REPLACE WITH YOUR GOOGLE FORM LINK
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium font-sans text-lg shadow-lg hover:bg-red-700 transition-all transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      Register for a Free Demo
                      <Send size={20} className="ml-2" />
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  {/* You can replace this placeholder with a relevant image */}
                  <img 
                    src="https://placehold.co/600x400/FEE2E2/EF4444?text=Online+Learning" 
                    alt="Online Commerce Coaching"
                    className="rounded-lg shadow-2xl hero-fade-in"
                    onError={(e) => e.target.src = 'https://placehold.co/600x400/FEE2E2/EF4444?text=Image+Error'}
                  />
                </div>
              </div>
            </section>
    </main>
    </>
  )
}

export default Hero