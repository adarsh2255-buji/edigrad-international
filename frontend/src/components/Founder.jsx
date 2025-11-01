import React, { useState, useEffect } from 'react'; // Import useEffect
import {
  MessageSquare,
} from 'lucide-react';

const Founder = () => {
  return (
    <>
    <section className="py-20 md:py-24 fade-in-section">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Our Founders</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <MessageSquare size={32} className="text-red-500 mb-4" />
                    <p className="text-gray-700 text-lg italic mb-6">
                      "Edigrad isn't just a platform; it's a promise. A promise to see the potential in every student and provide the exact tools they need to realize it. We believe in a learning journey that adapts to you."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://placehold.co/64x64/FEE2E2/DC2626?text=AV" 
                        alt="Founder 1" 
                        className="w-16 h-16 rounded-full mr-4 border-2 border-red-200"
                        onError={(e) => e.target.src = 'https://placehold.co/64x64/FEE2E2/DC2626?text=AV'}
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Nithin Varghese</h4>
                        <p className="text-red-600">Co-Founder & CEO</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <MessageSquare size={32} className="text-red-500 mb-4" />
                    <p className="text-gray-700 text-lg italic mb-6">
                      "Our mission is simple: to deliver education at its unhinged best. With the finest tutors and a focus on building real prowess, we're here to help students excel where they once felt they let off."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://placehold.co/64x64/FEE2E2/DC2626?text=SP" 
                        alt="Founder 2" 
                        className="w-16 h-16 rounded-full mr-4 border-2 border-red-200"
                        onError={(e) => e.target.src = 'https://placehold.co/64x64/FEE2E2/DC2626?text=SP'}
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Jyothish</h4>
                        <p className="text-red-600">Co-Founder & Head of Academics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}

export default Founder