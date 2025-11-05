import React, { useState, useEffect } from 'react'; // Import useEffect
import {
  MessageSquare,
} from 'lucide-react';
import AnimateOnScroll from '../customHooks/AnimateOnScroll';

const Founder = () => {
  return (
    <>
     <AnimateOnScroll>
    <section className="py-20 md:py-24 fade-in-section">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Our Founders</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                 <AnimateOnScroll>
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <MessageSquare size={32} className="text-red-500 mb-4" />
                    <p className="text-gray-700 text-lg italic mb-6">
                      "Edigrad isn't just a platform; it's a promise. A promise to see the potential in every student and provide the exact tools they need to realize it. We believe in a learning journey that adapts to you."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://placehold.co/64x64/FEE2E2/DC2626?text=NV" 
                        alt="Founder 1" 
                        className="w-16 h-16 rounded-full mr-4 border-2 border-red-200"
                        onError={(e) => e.target.src = 'https://placehold.co/64x64/FEE2E2/DC2626?text=NV'}
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Nithin Varghese</h4>
                        <p className="text-red-600">Co-Founder & CEO</p>
                        <p className="text-sm text-gray-600">Bcom Tax, Cooperation, M.com Finance</p>
                      </div>
                    </div>
                  </div>
                  </AnimateOnScroll>
                  <AnimateOnScroll delay={200}>
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <MessageSquare size={32} className="text-red-500 mb-4" />
                    <p className="text-gray-700 text-lg italic mb-6">
                      "Our mission is to deliver education at its most transformative and uncompromising best. We believe that learning should be intellectually bold, dynamically structured, and distinct from conventional methods. Guided by distinguished educators, we emphasize the cultivation of authentic competence, analytical rigor, and enduring confidence. Our objective is to empower students not merely to recover lost ground but to transcend their previous limitations and achieve exceptional academic distinction."
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://placehold.co/64x64/FEE2E2/DC2626?text=JKS" 
                        alt="Founder 2" 
                        className="w-16 h-16 rounded-full mr-4 border-2 border-red-200"
                        onError={(e) => e.target.src = 'https://placehold.co/64x64/FEE2E2/DC2626?text=JKS'}
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Jyothish KS</h4>
                        <p className="text-red-600">Co-Founder & Head of Academics</p>
                        <p className="text-sm text-gray-600">Bcom Tax, MBA Finance</p>
                      </div>
                    </div>
                  </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll delay={200}>
                  <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <MessageSquare size={32} className="text-red-500 mb-4" />
                    <p className="text-gray-700 text-lg italic mb-6">
                      "Our mission is simple yet powerful: to bridge ambition and achievement.
                        At Edigrad International, we’re not building a platform. We’re building futures. And we’re honored to have you join us on that journey"
                    </p>
                    <div className="flex items-center">
                      <img 
                        src="https://placehold.co/64x64/FEE2E2/DC2626?text=RS" 
                        alt="Founder 3" 
                        className="w-16 h-16 rounded-full mr-4 border-2 border-red-200"
                        onError={(e) => e.target.src = 'https://placehold.co/64x64/FEE2E2/DC2626?text=RS'}
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Robin Skaria</h4>
                        <p className="text-red-600"> Co-Founder and Managing Partner</p>
                        <p className="text-sm text-gray-600">B.com, M.com Finance, CMA Finalist</p>

                      </div>
                    </div>
                  </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </section>
          </AnimateOnScroll>
    </>
  )
}

export default Founder