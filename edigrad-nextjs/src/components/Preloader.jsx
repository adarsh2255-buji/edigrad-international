import React from 'react'
import logo from '../../public/logo.png';

const Preloader = () => {
  return (
    <>
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white">
{/* Logo Image */}
         <img src='/logo.png'
            alt="Edigrad International Logo" 
            className="w-15 h-auto rounded-full animate-bounce" // Adjust size as needed
            onError={(e) => { 
              e.target.src = 'https://placehold.co/40x40/FEE2E2/DC2626?text=Logo'; 
              e.target.onerror = null; 
            }}
          />
    <div className="flex flex-col items-center mt-4">
      <span className="font-bold text-3xl text-red-700 font-cent ">Edigrad International</span>
      <span className="text-lg text-gray-900 italic mt-2 font-commercial">unlock your potential</span>
    </div>
  </div>
    </>
  )
}

export default Preloader